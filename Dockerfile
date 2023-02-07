# Run service
FROM node:16-bullseye AS run-stage

WORKDIR /run

COPY dashboard/run/tsconfig.json tsconfig.json
COPY dashboard/run/src src

COPY dashboard/run/package.json dashboard/run/yarn.lock .
RUN yarn install

RUN yarn build

# Dashboard
FROM node:16-bullseye AS dashboard-stage

WORKDIR /dashboard

COPY dashboard/tsconfig.json dashboard/tailwind.config.js dashboard/craco.config.js .
COPY dashboard/assets assets
COPY dashboard/public public
COPY dashboard/src src

COPY dashboard/package.json dashboard/yarn.lock .
RUN yarn install

ENV REACT_APP_IASQL_ENV=local
RUN yarn build
RUN ls

# Engine
FROM debian:bullseye AS main-stage

# Install OS Packages
RUN apt update
RUN apt install curl ca-certificates gnupg build-essential git jq -y

# Install Postgres
# Update postgresql APT repository [apt.postgresql.org](https://wiki.postgresql.org/wiki/Apt)
RUN ["bash", "-c", "curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | tee /etc/apt/trusted.gpg.d/apt.postgresql.org.gpg >/dev/null"]
RUN ["bash", "-c", "echo 'deb http://apt.postgresql.org/pub/repos/apt/ bullseye-pgdg main' > /etc/apt/sources.list.d/postgresql.list"]
RUN apt update
RUN apt upgrade -y
RUN apt install postgresql-client-14 postgresql-14 postgresql-14-cron pgbouncer postgresql-server-dev-14 libcurl4-openssl-dev git make g++ locales-all -y

RUN git clone --depth 1 https://github.com/pramsey/pgsql-http
RUN cd pgsql-http && make && make install

# Install NodeJS
RUN ["bash", "-c", "curl -fsSL https://deb.nodesource.com/setup_16.x | bash -"]
RUN apt install nodejs -y
RUN npm install -g yarn

WORKDIR /engine

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY docker-entrypoint.sh ormconfig.js tsconfig.json .
COPY src src
RUN yarn build

COPY ./src/scripts/postgresql.conf /etc/postgresql/14/main/postgresql.conf
COPY ./src/scripts/pg_hba.conf /etc/postgresql/14/main/pg_hba.conf

WORKDIR /run
COPY --from=run-stage /run/package.json package.json
COPY --from=run-stage /run/node_modules node_modules
COPY --from=run-stage /run/dist dist

WORKDIR /dashboard
COPY --from=dashboard-stage /dashboard/package.json package.json
COPY --from=dashboard-stage /dashboard/node_modules node_modules
COPY --from=dashboard-stage /dashboard/build build

WORKDIR /engine

# Default ENVs that can be overwritten
ARG IASQL_ENV=local
ENV IASQL_ENV=$IASQL_ENV
ARG DB_USER=postgres
ENV DB_USER=$DB_USER
ARG DB_PASSWORD=test
ENV DB_PASSWORD=$DB_PASSWORD

EXPOSE 5432
EXPOSE 3000
EXPOSE 8888
ENTRYPOINT ["/engine/docker-entrypoint.sh"]
