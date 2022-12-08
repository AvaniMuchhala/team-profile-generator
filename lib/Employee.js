// Parent class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
        // if (typeof name !== "string" || !name.trim().length) {
        //     throw new Error("Expected required parameter 'name' to be a non-empty string");
        // }
        // if (typeof id !== "number" || isNaN(id)) {
        //     throw new Error("Expected required parameter 'id' to be a number");
        // }
        // if (typeof email !== "string" || !email.trim().length) {
        //     throw new Error("Expected required parameter 'email' to be a non-empty string");
        // }
    }

    // Getter functions
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;