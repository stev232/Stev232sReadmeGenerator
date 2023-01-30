// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
DONE | WHEN I enter my project title
THEN this is displayed as the title of the README
DONE | WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
DONE | WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
DONE | WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

# <Your-Project-Title>



Go the extra mile and write tests for your application. Then provide examples on how to run them here.
*/

// Array of questions for user input
const questions = ['Project title: ', 'Describe your project: ', 'How to install program: ', 'How to use the project: ', 'Contribution guidelines: ', 
    'Test instructions: ', 'Enter your GitHub username: ', 'Enter your email address: '];

// Write README file
function writeToFile(fileName, data) {
    let readmeData = 
`# ${ data.title }
    
## Description

${ data.description }

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

${ data.install }

## Usage

${ data.usage }

## License

## Badges

## How to Contribute

${ data.contribution }  

## Tests
    
${ data.test }`;

    fs.writeFile(fileName, readmeData, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Success');
        }
    })
    console.log(
        `${data.title}\n${data.description}\n${data.install}\n${data.usage}\n${data.contribution}\n${data.test}\n${data.username}\n${data.email}`
    )
}

function writeFail() {
    console.log(`Try again!`);
}

// Initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'install',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contribution',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'test',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'username',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email',
        },
    ])
    .then((response) =>
        writeToFile('README.md', response)
    );
}

// Function call to initialize app
init();
