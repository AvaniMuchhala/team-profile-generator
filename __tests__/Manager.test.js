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

        // it("should throw an error if provided no arguments or incomplete arguments", () => {
        //     // Arrange
        //     const errName = new Error("Expected required parameter 'name' to be a non-empty string");
        //     const errID = new Error("Expected required parameter 'id' to be a number");
        //     const errEmail = new Error("Expected required parameter 'email' to be a non-empty string");
        //     const errOfficeNum = new Error("Expected required parameter 'officeNumber' to be a number");

        //     const cb1 = () => new Manager();    // 0 arguments
        //     const cb2 = () => new Manager("Nick");  // 1 argument
        //     const cb3 = () => new Manager("Nick", 1);   // 2 arguments
        //     const cb4 = () => new Manager("Nick", 1, "nick@test.edu"); // 3 arguments
        //     const cb5 = () => new Manager("Nick", 1, "nick@test.edu", 100); // all 4 arguments
            
        //     // Assert
        //     expect(cb1).toThrowError(errName);
        //     expect(cb2).toThrowError(errID);
        //     expect(cb3).toThrowError(errEmail);
        //     expect(cb4).toThrowError(errOfficeNum);
        //     expect(cb5).not.toThrow();  // cb5 should NOT throw any error
        // });
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