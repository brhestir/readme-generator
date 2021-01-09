// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Includes
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Title: ",
        name: "title",
        default: "[readme-generator-default-title]",
    },
    {
        type: "input",
        message: "Description: ",
        name: "description", 
        default: "[A readme-generator for generating README.md files in Markdown format.]",
    },
    {
        type: "input",
        message: "Installation: ",
        name: "installation",
        default: "[Installation instructions go here]",
    },
    {
        type: "input",
        message: "Usage: ",
        name: "usage",
        default: "[Usage instructions go here]",
    },
    {
        type: "input",
        message: "Licence: ",
        name: "licence",
        default: "[Selected licence goes here, prob default to MIT]",
    },
    {
        type: "input",
        message: "Contributing: ",
        name: "contributing",
        default: "[Contribution details go here]",
    },
    {
        type: "input",
        message: "Tests: ",
        name: "tests",
        default: "[Test instructions+data goes here]",
    },
    {
        type: "input",
        message: "Questions: ",
        name: "questions",
        default: "[What is a good question to put here?]",
    }
];

const promptUser = (questionArray) => {
    inquirer.prompt(questionArray).then((response) => {
        console.log(response);
        console.log('----------------------------------------');

        writeToFile('README_output.md', generateMarkdown(response));
    }).catch((error) => {
        if(error.isTtyError) {
            // Prompt cannot be rendered in current env.
            console.log('[E] Prompt cannot be rendered in current environment')
        } else {
            // Parse over some other set of possible errors
            console.log(`[E] ${error}`);
        }
    });

};

const generateTOC = (tocArray) => {

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(fileName + " written successfully.");
    });
};

// TODO: Create a function to initialize app
function init() {
    promptUser(questions);
}

// Function call to initialize app
init();
