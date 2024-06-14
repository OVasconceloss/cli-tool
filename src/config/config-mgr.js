import chalk from "chalk";
import { cosmiconfigSync } from "cosmiconfig";

const configLoader = cosmiconfigSync('tool');

export default function getConfig() {
    const resultConfig = configLoader.search(process.cwd());

    if (resultConfig) {
        console.log('Found configuration (package.json file)', resultConfig.config);
        return packageConfig.tool;
    } else if (hasJSConfigFile()) {
        return loadJSConfigFile();
    } else {
        console.log(chalk.yellow('Could not find configuration, using default'));
        return { port: 8080 };
    }
}