// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkDown');
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
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
