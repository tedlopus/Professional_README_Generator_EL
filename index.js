const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const prompts = () => {
return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter the title of your project.",
      name: "title",
    },
    {
      type: "input",
      message:
        "Please provide a description of what your application does and how it works.",
      name: "description",
    },
    {
      type: "input",
      message: "Please provide a table of contents.",
      name: "contents",
    },
    {
      type: "list",
      message:
        "Please select a license if you used one, otherwise select none.",
      name: "license",
      choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "install",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "test",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "steps",
    },
    {
      type: "input",
      message: "Please provide instructions on how to use your application",
      name: "instructions",
    },
    {
      type: "input",
      message:
        "If you have any collaborators on your project or if you used any third party assets, please enter that here.",
      name: "credits",
    },
  ]);
};

  // Function that creates the README
  const writeFile = data => {
      fs.writeFile('README.md', data, err => {
          if (err) {
              console.log(err);
              return;
          } else {
              console.log("Generating README...")
          }
      })
  };

  prompts()
  .then(answers => {
      return generateMarkdown(answers);
  })
  .then(data => {
      return writeFile(data);
  })
  .catch(err => {
      console.log(err)
  })