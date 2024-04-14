#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let condition = true;
while (condition) {
    let currency = {
        USD: 1,
        EUR: 0.94,
        PKR: 277.30,
        INR: 86.61,
        SYD: 3.75,
        KWD: 0.31,
    };
    const answer1 = await inquirer.prompt([
        {
            name: "to",
            type: "list",
            message: "What is the currency you want to convert FROM?",
            choices: ["USD", "EUR", "PKR", "INR", "SYD", "KWD"]
        }
    ]);
    const answer2 = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            message: "What is the currency you want to convert TO?",
            choices: ["USD", "EUR", "PKR", "INR", "SYD", "KWD"]
        }
    ]);
    const amount = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount you want to convert"
        },
    ]);
    let result = amount.amount / currency[answer1.to] * currency[answer2.from];
    console.log(chalk.green(`${amount.amount} ${answer1.to} is equal to ${result} ${answer2.from}`));
    let loop = await inquirer.prompt([
        {
            name: "loop",
            type: "confirm",
            message: "Do you want to continue?",
            default: "false"
        }
    ]);
    condition = loop.loop;
}
