const Employee = require("./Employee.js");

// Child class of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        // if (typeof officeNumber !== "number" || isNaN(officeNumber)) {
        //     throw new Error("Expected required parameter 'officeNumber' to be a number");
        // }
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;