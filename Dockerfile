# Base image
FROM debian:bullseye AS base

## Install OS Packages
RUN apt update
RUN apt install curl ca-certificates gnupg build-essential git jq make g++ locales-all -y

## Install Postgres
### Update postgresql APT repository [apt.postgresql.org](https://wiki.postgresql.org/wiki/Apt)
RUN ["bash", "-c", "curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | tee /etc/apt/trusted.gpg.d/apt.postgresql.org.gpg >/dev/null"]
RUN ["bash", "-c", "echo 'deb http://apt.postgresql.org/pub/repos/apt/ bullseye-pgdg main' > /etc/apt/sources.list.d/postgresql.list"]
RUN apt update
RUN apt upgrade -y
RUN apt install postgresql-client-14 postgresql-14 postgresql-14-cron pgbouncer postgresql-server-dev-14 libcurl4-openssl-dev -y
RUN git clone --depth 1 https://github.com/pramsey/pgsql-http
RUN cd pgsql-http && make && make install

## Install NodeJS
RUN ["bash", "-c", "curl -fsSL https://deb.nodesource.com/setup_16.x | bash -"]
RUN apt install nodejs -y
RUN npm install -g yarn

#####################################################################################################################################################

# Run service
FROM base AS run-stage

# Default ENVs that can be overwritten
ARG IASQL_ENV=local
ENV IASQL_ENV=$IASQL_ENV

WORKDIR /run

## Copy files
COPY dashboard/run/tsconfig.json tsconfig.json
COPY dashboard/run/src src

## Install stage dependencies
COPY dashboard/run/package.json dashboard/run/yarn.lock ./
RUN yarn install

## Build
RUN yarn build

## Prune dev dependencies
RUN yarn install --production

#####################################################################################################################################################

# Dashboard
FROM base AS dashboard-stage

# Default ENVs that can be overwritten
ARG IASQL_ENV=local
ENV IASQL_ENV=$IASQL_ENV
ENV REACT_APP_IASQL_ENV=$IASQL_ENV

# Default ENVs
ENV GENERATE_SOURCEMAP=false

WORKDIR /dashboard

## Copy files
COPY dashboard/tsconfig.json dashboard/tailwind.config.js dashboard/craco.config.js ./
COPY dashboard/public public
COPY dashboard/src src

## Install stage dependencies
COPY dashboard/package.json dashboard/yarn.lock ./
RUN yarn install

## Build
RUN yarn build

## Prune dev dependencies
RUN yarn install --production

#####################################################################################################################################################

# Engine
FROM base AS engine-stage

# Default ENVs that can be overwritten
ARG IASQL_ENV=local
ENV IASQL_ENV=$IASQL_ENV
ARG DB_USER=postgres
ENV DB_USER=$DB_USER
ARG DB_PASSWORD=test
ENV DB_PASSWORD=$DB_PASSWORD

WORKDIR /engine

## Copy files
COPY ormconfig.js tsconfig.json ./
COPY src src

## Install stage dependencies
COPY package.json yarn.lock ./
RUN yarn install

## Build
RUN yarn build

## Prune dev dependencies
RUN yarn install --production

#####################################################################################################################################################

# Main stage
FROM base AS main-stage

## Copy from run-stage
WORKDIR /dashboard/run
COPY --from=run-stage /run/package.json package.json
COPY --from=run-stage /run/node_modules node_modules
COPY --from=run-stage /run/dist dist

## Copy from dashboard-stage
WORKDIR /dashboard
COPY --from=dashboard-stage /dashboard/build build

## Copy from engine-stage
WORKDIR /engine
COPY --from=engine-stage /engine/package.json ./
COPY --from=engine-stage /engine/node_modules node_modules
COPY --from=engine-stage /engine/dist dist

## Copy files
COPY ./src/scripts/postgresql.conf /etc/postgresql/14/main/postgresql.conf
COPY ./src/scripts/pg_hba.conf /etc/postgresql/14/main/pg_hba.conf
COPY docker-entrypoint.sh /engine/docker-entrypoint.sh
COPY src/scripts /engine/src/scripts

## Ports
EXPOSE 5432
EXPOSE 8888

ENTRYPOINT ["/engine/docker-entrypoint.sh"]
