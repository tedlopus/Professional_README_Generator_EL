const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is the url for your LinkedIn profile?',
      name: 'LinkedIN',
    },
    {
      type: 'input',
      message: 'What is the url for your Github page?',
      name: 'GitHub',
    },
  ])