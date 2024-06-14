import chalk from "chalk";

export default function start(config) {
    console.log(chalk.green(' Starting the App'));
    console.log(chalk.gray('Received configuration in start -'), config);
}