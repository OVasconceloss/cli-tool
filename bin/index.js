#!/usr/bin/env node
import arg from 'arg';
import logger from "../src/logger.js";
import start from '../src/commands/start.js';
import getConfig from '../src/config/config-mgr.js';

const logMessage = logger('config:mgr');

try  {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });

    logMessage.debug('Received args', args);
    
    if (args['--start']) {
        const configuration = getConfig();
        start(configuration);
    }
} catch (error) {
    logMessage.warning(error.message);
    console.log(' ');

    usageTool();
}

function usageTool() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app`);
}