const Employee = require("./Employee.js");

// Child class of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        // Throw error if missing any argument
        if (!name || !id || !email || !officeNumber) {
            throw new Error("Must provide all 4 arguments");
        }
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;