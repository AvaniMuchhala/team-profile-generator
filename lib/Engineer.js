const Employee = require("./Employee.js");

// Child class of Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

        // Throw error if missing any argument
        if (!name || !id || !email || !github) {
            throw new Error("Must provide all 4 arguments");
        }
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;