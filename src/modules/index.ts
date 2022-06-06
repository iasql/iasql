import config from '../config'

// No good way to re-export a require without this, and no way to determine what to import by the
// config variable without require
// tslint:disable-next-line:no-var-requires
export const latest = require(`./${config.modules.latestVersion}`);

export * as v0_0_5 from './0.0.5'
export * as v0_0_6 from './0.0.6'
export * as v0_0_7 from './0.0.7'
export * as v0_0_8 from './0.0.8'
export * from './interfaces'
