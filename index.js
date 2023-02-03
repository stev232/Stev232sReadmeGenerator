const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = ['Project title: ', 'Describe your project: ', 'How to install program: ', 'How to use the project: ', 
    'Contribution guidelines: ', 'Test instructions: ', 'Which license does your project use(Apache, Creative Commons, IBM, MIT, Mozilla, Unlicense, WTFPL): ', 
    'Enter your GitHub username: ', 'Enter your email address: '];
const links = {
    Apache: ` [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    CreativeCommons: `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`,
    IBM: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    Mozilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    Unlicense: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
    WTFPL: `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`,
}

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
- [Tests](#tests)
- [Questions](#questions)

## Installation

${ data.install }

## Usage

${ data.usage }

## License

${ data.license }

## Badges

${ licenseLink(data.license) }

## How to Contribute

${ data.contribution }  

## Tests
    
${ data.test }

## Questions

Github profile: https://github.com/${ data.username }<br>
If you have any additional questions you can email me at [${ data.email }](mailto:${ data.email })`;

    fs.writeFile(fileName, readmeData, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Success');
        }
    })
}

function licenseLink(license) {
    if(license.toUpperCase() === "CREATIVE COMMONS") {
        license = 'cc'
    }
    
    switch(license.toUpperCase()) {
        case 'APACHE':
            return links.Apache;
        case 'CC':
            return links.CreativeCommons;
        case 'IBM':
            return links.IBM;
        case 'MIT':
            return links.MIT;
        case 'MOZILLA':
            return links.Mozilla;
        case 'UNLICENSE':
            return links.Unlicense;
        case 'WTFPL':
            return links.WTFPL;
        default:
            return '';
    }
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
            name: 'license',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'username',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',
        },
    ])
    .then((response) =>
        writeToFile('README.md', response)
    );
}

// Function call to initialize app
init();
