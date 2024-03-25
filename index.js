#!/user/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        type: "number",
        message: "please guesse number between 1 - 10",
        name: "Randomnumber",
    },
]);
if (answers.RandomNumber === randomNumber) {
    console.log("you win");
}
else {
    console.log("you lose , please try again");
}
