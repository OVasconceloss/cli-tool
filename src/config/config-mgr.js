import chalk from "chalk";
import { pkgUpSync } from "pkg-up";

export default function getConfig() {
    const packagePath = pkgUpSync({ cwd: process.cwd()});
    const packageConfig = packagePath;

    if (packageConfig.tool) {
        console.log('Found configuration (package.json file)', packageConfig.tool);
        return packageConfig.tool;
    } else {
        console.log(chalk.yellow('Could not find configuration, using default'));
        return { port: 8080 };
    }
}