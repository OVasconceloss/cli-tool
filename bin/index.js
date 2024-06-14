#!/usr/bin/env node
const arg = require('arg')

try  {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });
    
    if (args['--start'])
        console.log('starting the app');
} catch (error) {
    console.log(error.message);
    console.log(' ');

    usageTool();
}

function usageTool() {
    console.log(`tool [CMD]
    --start\tStarts the app
    --build\tBuilds the app`);
}