import logger from "../logger.js";

const logMessage = logger('config:mgr');

export default function start(config) {
    logMessage.highlight(' Starting the App ');
    logMessage.debug('Received configuration in start -', config);
}