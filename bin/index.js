#!/usr/bin/env node
import arg from 'arg';
import chalk from 'chalk';
import { pkgUpSync } from 'pkg-up';

try  {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });
    
    if (args['--start']) {
        const packagePath = pkgUpSync({ cwd: process.cwd() });
        const packageConfig = packagePath;

        if (packageConfig.tool) {
            console.log('Found configuration (package.json file)', packageConfig.tool);
        } else {
            console.log(chalk.yellow('Could not find configuration, using default'))
        }

        console.log(chalk.green('starting the app'));
    }
} catch (error) {
    console.log(chalk.yellow(error.message));
    console.log(' ');

    usageTool();
}

function usageTool() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app`);
}