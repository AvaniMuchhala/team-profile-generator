const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const managerQs = [
    {
        type: "input",
        message: "Enter name of team manager:",
        name: "managerName"
    },
    {
        type: "input",
        message: "Enter manager's ID:",
        name: "ID"
    },
    {
        type: "input",
        message: "Enter manager's email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter manager's office number:",
        name: "officeNum"
    }
];

const menuQ = [
    {
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add engineer", "Add intern", "Finish"],
        name: "next"
    }
];

const engineerQs = [
    {
        type: "input",
        message: "Enter engineer's name:",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Enter engineer's ID:",
        name: "ID"
    },
    {
        type: "input",
        message: "Enter engineer's email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter engineer's GitHub username:",
        name: "github"
    }
]

const internQs = [
    {
        type: "input",
        message: "Enter intern's name:",
        name: "internName"
    },
    {
        type: "input",
        message: "Enter intern's ID:",
        name: "ID"
    },
    {
        type: "input",
        message: "Enter intern's email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter intern's school:",
        name: "school"
    }
]