inquirer = require('inquirer');
fs = require('fs')

const questions = [

  {
    type: 'input',
    name: 'title',
    message: "What's your project title?",
    validate: function (value) {
      if (value.trim() == '') {
        return 'Please enter a valid title';
      }
      else {
        return true
      }
    }
  },
  {
    type: 'confirm',
    name: 'mitBadge',
    message: "Would you like to add an MIT badge",
  },
  {
    type: 'confirm',
    name: 'github',
    message: "Would you like to add your GitHub Profile",
  },
  {
    type: 'input',
    name: 'description',
    message: "What's your project's description?",
    validate: function (value) {
      if (value.trim() == '') {
        return 'Please enter a valid description';
      }
      else {
        return true
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: "What's your project's installation instructions?",
    validate: function (value) {
      if (value.trim() == '') {
        return 'Please enter a valid installation';
      }
      else {
        return true
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: "What's your project's usage information?",
    validate: function (value) {
      if (value.trim() == '') {
        return 'Please enter a valid usage';
      }
      else {
        return true
      }
    },
    
  },
  {
    type: 'input',
    name: 'contributions',
    message: "Who contributed to the project?",
    validate: function (value) {
      if (value.trim() == '') {
        return 'Please enter a valid usage';
      }
      else {
        return true
      }
    },
    
  },
  {
    type: 'input',
    name: 'test',
    message: "What information is needed to test this project?",
    validate: function (value) {
      if (value.trim() == '') {
        return 'Please enter a valid usage';
      }
      else {
        return true
      }
    },
    
  },
  {
    type: 'confirm',
    name: 'questions',
    message: "Would you like to add your email?",
  },
];

inquirer
  .prompt(questions)
  .then(answers => {
    // read answers into our global variables
    badge = '![badge](https://img.shields.io/badge/license-${response.license}-blue)'
    github = "https://github.com/mitchmathias"
    email = 'Mitch.Mathias@gmail.com'
    readMeTitle = answers.title;
    addBadge = answers.mitBadge
    readMeDescription = answers.description;
    readMeInstallation = answers.installation;
    readMeUsage = answers.usage;
    readMeContributions = answers.contributions;
    readMeTest = answers.test;


    fs.writeFileSync("testreadme.md", "# " + readMeTitle + " " + badge + "\n\n")

    fs.appendFileSync("testreadme.md", "## Description \n\n" + readMeDescription + "\n\n")

    fs.appendFileSync("testreadme.md", "## Installation \n\n" + readMeInstallation + "\n\n")

    fs.appendFileSync("testreadme.md", "## Usage \n\n" + readMeUsage + "\n\n")

    fs.appendFileSync("testreadme.md", "## Contributions \n\n" + readMeContributions + "\n\n")

    fs.appendFileSync("testreadme.md", "## Test \n\n" + readMeTest + "\n\n")

    fs.appendFileSync("testreadme.md", "## Questions \n\n" + "Email: " + email + '\n' + "GitHub: " + github + "\n\n")

  })
  .catch(error => {
    console.log(error)
  });
