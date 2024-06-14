import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { promisify } from "util";
import logger from "../logger.js";

const logMessage = logger('config:mgr');

const makeDirAsync = promisify(fs.mkdir);
const writeAsyncFile = promisify(fs.writeFile);

export async function createProject() {
    try {
        const projectInfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'Enter project name',
                validate: (input) => !!input.trim() || "Project name cannot be empty",
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter project description',
            },
            {
                type: 'input',
                name: 'creator',
                message: 'Entrer creator name',
            }
        ]);
        
        const projectDirectory = path.join(process.cwd(), projectInfo.projectName);

        await makeDirAsync(projectDirectory);
        await writeAsyncFile(
            path.join(projectDirectory, 'README.md'), `# ${projectInfo.projectName}\n\n${projectInfo.description}\n\nDeveloped by ${projectInfo.creator}`
        );

        logMessage.highlight(`Project '${projectInfo.projectName}' created successfully in '${projectDirectory}'`);

    } catch (error) {
        logMessage.error('Failed to create project: ', error);
    }
}