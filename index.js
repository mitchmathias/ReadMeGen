inquirer = require('inquirer');
fs = require('fs')

var readMeTitle
var readMeDescription
var readMeInstallation
var readMeUsage


var questions = [
    // {
    //   type: 'confirm',
    //   name: 'toBeDelivered',
    //   message: 'Is this for delivery?',
    //   default: false,
    // },
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
        type: 'input',
        name: 'description',
        message: "What's your project description?",
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
        message: "What's your project installation?",
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
        message: "What's your project usage?",
        validate: function (value) {
          if (value.trim() == '') {
              return 'Please enter a valid usage';
          }
          else {
              return true
          }
        }
      },
    // {
    //   type: 'list',
    //   name: 'size',
    //   message: 'What size do you need?',
    //   choices: ['Large', 'Medium', 'Small'],
    //   filter: function (val) {
    //     return val.toLowerCase();
    //   },
    // },
    // {
    //   type: 'input',
    //   name: 'quantity',
    //   message: 'How many do you need?',
    //   validate: function (value) {
    //     var valid = !isNaN(parseFloat(value));
    //     return valid || 'Please enter a number';
    //   },
    //   filter: Number,
    // },
    // {
    //   type: 'expand',
    //   name: 'toppings',
    //   message: 'What about the toppings?',
    //   choices: [
    //     {
    //       key: 'p',
    //       name: 'Pepperoni and cheese',
    //       value: 'PepperoniCheese',
    //     },
    //     {
    //       key: 'a',
    //       name: 'All dressed',
    //       value: 'alldressed',
    //     },
    //     {
    //       key: 'w',
    //       name: 'Hawaiian',
    //       value: 'hawaiian',
    //     },
    //   ],
    // },
    // {
    //   type: 'rawlist',
    //   name: 'beverage',
    //   message: 'You also get a free 2L beverage',
    //   choices: ['Pepsi', '7up', 'Coke'],
    // },
    // {
    //   type: 'input',
    //   name: 'comments',
    //   message: 'Any comments on your purchase experience?',
    //   default: 'Nope, all good!',
    // },
    // {
    //   type: 'list',
    //   name: 'prize',
    //   message: 'For leaving a comment, you get a freebie',
    //   choices: ['cake', 'fries'],
    //   when: function (answers) {
    //     return answers.comments !== 'Nope, all good!';
    //   },
    // },
  ];

inquirer
  .prompt(questions)
  .then(answers => {
    // read answers into our global variables
    readMeTitle = answers.title
    readMeDescription = answers.description
    readMeInstallation = answers.installation
    readMeUsage = answers.usage

    console.log(readMeTitle)
    console.log(readMeDescription)
    console.log(readMeInstallation)
    console.log(readMeUsage)

    fs.writeFile("testreadme.md", "# " + readMeTitle, function(err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("File created")
        }
    })

  })
  .catch(error => {
    console.log(error)
  });
