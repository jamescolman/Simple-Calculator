#! /usr/bin/env node
//shabang #(sha)!(bang)
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter the first number", type: "number", name: "FirstNumber" },
    { message: "Enter the second number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "Operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.Operators === "Addition") {
    console.log("Your value is", answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operators === "Subtraction") {
    console.log("Your value is", answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operators === "Multiplication") {
    console.log("Your value is", answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operators === "Division") {
    console.log("Your value is", answer.FirstNumber / answer.SecondNumber);
}
