const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with 'name', 'id', 'email', 'github' properties set to the 'name', 'id', 'email', 'github' arguments provided when called with the 'new' keyword", () => {
            // Arrange
            const name = "Jane";
            const id = 5;
            const email = "jane@test.edu";
            const github = "jane123";
    
            // Act
            const obj = new Engineer(name, id, email, github);
    
            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        });

        it("should throw an error if provided no arguments or incomplete arguments", () => {
            // Arrange
            const err = new Error("Must provide all 4 arguments");
            
            // Act
            const cb1 = () => new Engineer();    // 0 arguments
            const cb2 = () => new Engineer("Jane", 5, "jane@test.edu");  // 3 arguments
            
            // Assert
            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);
        });
    });

    describe("Methods", () => {
        it("getName(), getId(), getEmail(), getGithub() should return object's 'name', 'id', 'email', 'github' properties respectively", () => {
            // Arrange
            const name = "Jane";
            const id = 5;
            const email = "jane@test.edu";
            const github = "jane123";

            // Act
            const obj = new Engineer(name, id, email, github);

            // Assert
            expect(obj.getName()).toEqual(obj.name);
            expect(obj.getId()).toEqual(obj.id);
            expect(obj.getEmail()).toEqual(obj.email);
            expect(obj.getGithub()).toEqual(obj.github);
        });

        it("getRole() should return a string representation of the type of object", () => {
            // Act
            const obj = new Engineer("Jane", 5, "jane@test.edu", "jane123");

            // Assert
            expect(typeof obj.getRole()).toEqual("string");
            expect(obj.getRole()).toEqual(obj.constructor.name);
        });
    });
});