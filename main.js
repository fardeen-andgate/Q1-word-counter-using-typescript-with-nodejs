#! /usr/bin/env node
import inquirer from "inquirer";
import { welcome } from "./design/design.js";
welcome();
const answers = await inquirer.prompt([
    {
        name: "Dialogue",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Dialogue.trim().split(" ");
console.log(`Your provided Dialogue word count is ${words.length}`);
