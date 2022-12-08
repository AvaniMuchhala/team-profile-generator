const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with 'name', 'id', 'email', 'officeNumber' properties set to the 'name', 'id', 'email', 'officeNumber' arguments provided when called with the 'new' keyword", () => {
            // Arrange
            const name = "Nick";
            const id = 1;
            const email = "nick@test.edu";
            const officeNumber = 100;
    
            // Act
            const obj = new Manager(name, id, email, officeNumber);
    
            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
        });

        it("should throw an error if provided no arguments or incomplete arguments", () => {
            // Arrange
            const err = new Error("Must provide all 4 arguments");
            
            // Act
            const cb1 = () => new Manager();    // 0 arguments
            const cb2 = () => new Manager("Nick", 1, "nick@test.edu");  // 3 arguments
            
            // Assert
            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);
        });
    });


    describe("Methods", () => {
        it("getName(), getId(), getEmail(), getOfficeNumber() should return object's 'name', 'id', 'email', 'officeNumber' properties respectively", () => {
            // Arrange
            const name = "Nick";
            const id = 1;
            const email = "nick@test.edu";
            const officeNumber = 100;

            // Act
            const obj = new Manager(name, id, email, officeNumber);

            // Assert
            expect(obj.getName()).toEqual(obj.name);
            expect(obj.getId()).toEqual(obj.id);
            expect(obj.getEmail()).toEqual(obj.email);
            expect(obj.getOfficeNumber()).toEqual(obj.officeNumber);
        });

        it("getRole() should return a string representation of the type of object", () => {
            // Act
            const obj = new Manager("Nick", 1, "nick@test.edu", 100);

            // Assert
            expect(typeof obj.getRole()).toEqual("string");
            expect(obj.getRole()).toEqual(obj.constructor.name);
        });
    });
});