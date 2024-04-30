// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generateMarkdown = require('./generateMarkDown');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

const data = {
    title: '',
    description: '',
    installation: '',
    usage: '',
    license: '',
    contributions: '',
    test: '',
    github: '',
    email: ''
}
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the name of your project ?',
    name: 'title'
},
{
    type: 'input',
    message: 'Provide a short description of your project',
    name: 'description'
},
{
    type: 'input',
    message: 'Provide steps for installation',
    name: 'installation'
},
{
    type: 'input',
    message: 'What is the intended usage of your project ?',
    name: 'usage'
},
{
    type: 'list',
    message: 'Enter the project license',
    choices: ['MIT', 'APACHE', 'GPL', 'BSD'],
    name: 'license'
},
{
    type: 'input',
    message: 'Provide instructions for other developers contributions',
    name: 'contributions'
},
{
    type: 'input',
    message: 'Provide testing instructions',
    name: 'tests'
},
{
    type: 'input',
    message: 'Submit your GitHub username',
    name: 'github'
},
{
    type: 'email',
    message: 'Submit your email address',
    name: 'email'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions)

    data.title = answers.title;
    data.description = answers.description;
    data.installation = answers.installation;
    data.usage = answers.usage;
    data.license = answers.license;
    data.contributions = answers.contributions;
    data.test = answers.tests;
    data.github = answers.github;
    data.email = answers.email

    const markdownData = generateMarkdown(data);
    writeToFile('README.md', markdownData)
    console.log(markdownData)
}

// Function call to initialize app
init();
