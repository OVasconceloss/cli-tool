import chalk from "chalk";

export default function createLogger(name) {
    return {
        log: (...args) => console.log(chalk.gray(...args)),
        warning: (...args) => console.log(chalk.yellow(...args)),
        highlight: (...args) => console.log(chalk.green(...args)),
        debug: console.log
    };
}