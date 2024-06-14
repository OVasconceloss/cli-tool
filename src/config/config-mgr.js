import Ajv from "ajv";
import logger from "../logger.js";
import { cosmiconfigSync } from "cosmiconfig";
import betterAjvErrors from "better-ajv-errors";
import schema from './schema.json' assert { type: 'json' };

const newAjv = new Ajv();
const logMessage = logger('config:mgr');
const configLoader = cosmiconfigSync('tool');

export default function getConfig() {
    const resultConfig = configLoader.search(process.cwd());

    if (!resultConfig) {
        logMessage.warning('Could not find configuration, using default');
        return { port: 8080 };
    } else {
        const validate = newAjv.compile(schema);
        const isValidConfig = validate(resultConfig.config);

        if (!isValidConfig) {
            logMessage.warning('Invalid configuration was supplied');
            console.log();
            console.log(betterAjvErrors(schema, resultConfig.config, validate.errors));
            process.exit(1);
        }

        logMessage.debug('Found configuration (package.json file)', resultConfig.config);
        return resultConfig.config;
    }
}