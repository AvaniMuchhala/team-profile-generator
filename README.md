# Team Profile Generator

## Description

This is a Node.js command-line application that uses user input to generate a webpage that displays basic information about employees (i.e. manager, engineers, and interns) on a company's software engineering team. This was built to help others keep track of members on their team and their emails, GitHub profiles, office numbers, schools, etc. This application provides quick and easy access to information about each team member. This project helped me practice object-oriented programming and test driven development as well as continue exploring Node.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

Download Node.js for your platform. After cloning this repository and navigating to this repo in the terminal, run the following command to install the Inquirer package (used for collecting user input) and the Jest package (used for running unit tests).
```
npm install
```

## Usage

Run the following command in the terminal to use this application:
```
node index.js
```

Enter the information that each prompt requests regarding your team members. The app will alert you if you provide an invalid input. You will start by providing information about the manager. Then, you will be asked whether you want to add an engineer, add an intern, or finish building the team roster. You may add as many engineers and interns as you want. When you are done building your team roster, select "Finish" from the menu. This will end the application and generate an "index.html" within the "dist" folder that displays a nicely formatted team roster from your input.

Here is a [walkthrough video](https://drive.google.com/file/d/1YO7XgZRWlTYcMcs3VIFVRPvAWd0opVqg/view?usp=sharing) demonstrating the functionality of the application and how to run the unit tests (also displayed below):
![team profile generator demo gif](./assets/team-profile-generator-gif.gif)

## License

MIT License. Please refer to the LICENSE in the repo.

## How to Contribute

If you would like to contribute to this project, please email me at: avani.muchhala@case.edu.

## Tests
The repo includes unit tests inside the "\_\_tests\_\_" folder. There are tests for each of the classes in the "lib" folder.

To run the unit tests, run the following command:
```
npm run test
```