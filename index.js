// index.js

// Includes
const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors');
const {generateMarkdown, capitalizedFirstChar} = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        default: "readme-generator-default-title",
        message: "Title: ",
    },
    {
        name: "description",
        type: "input",
        default: "A readme-generator for generating README.md files in Markdown format.",
        message: "Description: ",    
    },
    {
        name: "installation",
        type: "input",
        default: "Installation instructions go here",
        message: "Installation: ",
    },
    {
        name: "usage",
        type: "input",
        default: "Usage instructions go here",
        message: "Usage: ",
    },
    {   
        name: "licence",
        type: "list",
        message: "Licence: ",
        choices: [ "MIT",
                   "Apache 2.0",
                   "Boost Software Licence 1.0",
                   "BSD 3-Clause Licence",
                   "GNU GPL v3",
                   "MIT",
                   "Mozilla Public Licence 2.0",
        ],
        default: "MIT",
                
    },
    {
        name: "contributing",
        type: "input",
        default: "Contribution details go here",
        message: "Contributing: ",
    },
    {
        name: "tests",
        type: "input",
        default: "npm test",
        message: "Tests: ",
    },
    {
        name: "questions",
        type: "input",
        default: "Questions and / or comments are welcome and appreciated",
        message: "Questions: ",
    }
];

// Function which begins prompting the user with list of questions
const promptUser = (questionArray) => {
    inquirer.prompt(questionArray).then((response) => {
        writeToFile('README_output.md', generateMarkdown(response));
    })
};

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(fileName + " written successfully.");
    });
};

// Function to initialize app
function init() {
    promptUser(questions);
}

// Initialize app
init();
