#!/usr/bin/env node
import arg from 'arg';
import chalk from 'chalk';

try  {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });
    
    if (args['--start'])
        console.log(chalk.bgGreen('starting the app'));
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