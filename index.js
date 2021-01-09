// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Title: ",
        name: "title",
    },
    {
        type: "input",
        message: "Description: ",
        name: "description", 
    },
    {
        type: "input",
        message: "Installation: ",
        name: "installation", 
    },
    {
        type: "input",
        message: "Usage: ",
        name: "usage",
    },
    {
        type: "input",
        message: "Licence: ",
        name: "licence",
    },
    {
        type: "input",
        message: "Contributing: ",
        name: "contributing",
    },
    {
        type: "input",
        message: "Tests: ",
        name: "tests",
    },
    {
        type: "input",
        message: "Questions: ",
        name: "questions",
    }
];

const promptUser = (questionArray) => {
    inquirer.prompt(questionArray).then((response) => {
        writeToFile('README_output.md', generateMarkdown(response));
    });

};

const generateTOC = (tocArray) => {

}

const generateMarkdown = (response) => {
    let formattedData = `# ${response.title}
## Description: 
${response.description}
## Table of Contents
${response.toc}
## Installation
${response.installation}
## Usage
${response.usage}
## Licence
${response.licence}
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
${response.questions}
`;

    return formattedData;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(fileName + " written successfully."));
};

// TODO: Create a function to initialize app
function init() {
    promptUser(questions);
}

// Function call to initialize app
init();
