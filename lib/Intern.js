const Employee = require("./Employee.js");

// Child class of Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

        // Throw error if missing any argument
        if (!name || !id || !email || !school) {
            throw new Error("Must provide all 4 arguments");
        }
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;