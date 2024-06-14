#!/usr/bin/env node
import arg from 'arg';
import chalk from 'chalk';
import start from '../src/commands/start.js';
import getConfig from '../src/config/config-mgr.js';

try  {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });
    
    if (args['--start']) {
        const configuration = getConfig();
        start(configuration);
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