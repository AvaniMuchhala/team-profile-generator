// Require Node packages
const inquirer = require("inquirer");
const fs = require("fs");

// Require all Employee child classes
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateHTML = require("./src/generateHTML.js");

// Questions about team manager
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

// Menu options about next step
const menuQ = [
    {
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add engineer", "Add intern", "Finish"],
        name: "next"
    }
];

// Questions about engineer
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

// Questions about intern
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

// Array of all Employee objects
let teamRoster = [];
// Array of only engineers and array of only interns
const engineers = [];
const interns = [];

// remove console logs
// Prompt user for engineer information
function addEngineer() {
    inquirer
        .prompt(engineerQs)
        .then(engineerData => {
            console.log(engineerData);
            // Create new Engineer object with user input and push to engineers array
            engineers.push(new Engineer(engineerData.engineerName, engineerData.ID, engineerData.email, engineerData.github));
            showMenu();
        });
}

// Prompt user for intern information
function addIntern() {
    inquirer
        .prompt(internQs)
        .then(internData => {
            console.log(internData);
            // Create new Intern object with user input and push to interns array
            interns.push(new Intern(internData.internName, internData.ID, internData.email, internData.school));
            showMenu();
        });
}

// Display menu options for next step
function showMenu() {
    inquirer
        .prompt(menuQ)
        .then(menuA => {
            if (menuA.next === "Add engineer") {
                addEngineer();
            } else if (menuA.next === "Add intern") {
                addIntern();
            } else {
                // Append engineers and interns array to teamRoster array
                teamRoster = teamRoster.concat(engineers).concat(interns);
                console.log(teamRoster);
                fs.writeFile("roster.html", generateHTML(teamRoster), err =>
                    err ? console.error(err) : console.log("Team roster generated!")
                );                
            }
            return;
        });
}

// Start application with this function and prompt user to enter manager info
function init(){
    console.log("Welcome to the Team Generator!");
    console.log("Please build your team roster.");

    inquirer
        .prompt(managerQs)
        .then(managerData => {
            console.log(managerData);
            // Create new Manager object with user input and push to teamRoster array
            teamRoster.push(new Manager(managerData.managerName, managerData.ID, managerData.email, managerData.officeNum));
            showMenu();
        });
}

init();