const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Properties", () => {
        it("should create an object with 'name', 'id', and 'email' properties set to the 'name', 'id', 'email' arguments provided when called with the 'new' keyword", () => {
            // Arrange
            const name = "Sarah";
            const id = 1;
            const email = "sarah@test.edu";
    
            // Act
            const obj = new Employee(name, id, email);
    
            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });

    describe("Methods", () => {
        it("getName(), getId(), and getEmail() should return object's 'name', 'id', and 'email' properties respectively", () => {
            // Arrange
            const name = "Sarah";
            const id = 1;
            const email = "sarah@test.edu";

            // Act
            const obj = new Employee(name, id, email);

            // Assert
            expect(obj.getName()).toEqual(obj.name);
            expect(obj.getId()).toEqual(obj.id);
            expect(obj.getEmail()).toEqual(obj.email);
        });

        it("getRole() should return a string representation of the type of object", () => {
            // Act
            const obj = new Employee("Sarah", 1, "sarah@test.edu");

            // Assert
            expect(typeof obj.getRole()).toEqual("string");
            expect(obj.getRole()).toEqual(obj.constructor.name);
        });
    });    
});