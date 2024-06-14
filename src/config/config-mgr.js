import Ajv from "ajv";
import chalk from "chalk";
import { cosmiconfigSync } from "cosmiconfig";
import betterAjvErrors from "better-ajv-errors";
import schema from './schema.json' assert { type: 'json' };

const newAjv = new Ajv();
const configLoader = cosmiconfigSync('tool');

export default function getConfig() {
    const resultConfig = configLoader.search(process.cwd());

    if (!resultConfig) {
        console.log(chalk.yellow('Could not find configuration, using default'));
        return { port: 8080 };
    } else {
        const validate = newAjv.compile(schema);
        const isValidConfig = validate(resultConfig.config);

        if (!isValidConfig) {
            console.log(chalk.yellow('Invalid configuration was supplied'));
            console.log();
            console.log(betterAjvErrors(schema, resultConfig.config, validate.errors));
            process.exit(1);
        }

        console.log('Found configuration (package.json file)', resultConfig.config);
        return resultConfig.config;
    }
}