#!/usr/bin/env node
import arg from 'arg';
import chalk from 'chalk';
import logger from "../src/logger.js";
import start from '../src/commands/start.js';
import getConfig from '../src/config/config-mgr.js';
import { createProject } from '../src/commands/create.js';

const logMessage = logger('config:mgr');

try  {
    const args = arg({
        '--start': Boolean,
        '--create': Boolean,
    });

    logMessage.debug('Received args', args);
    
    if (args['--start']) {
        const configuration = getConfig();
        start(configuration);
    }

    if (args['--create']) { createProject(); }

} catch (error) {
    logMessage.warning(error.message);
    console.log(' ');

    usageTool();
}

function usageTool() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the project
    ${chalk.greenBright('--create')}\tCreate the project`);
}