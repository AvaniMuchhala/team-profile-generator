const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with 'name', 'id', 'email', 'school' properties set to the 'name', 'id', 'email', 'school' arguments provided when called with the 'new' keyword", () => {
            // Arrange
            const name = "Sam";
            const id = 3;
            const email = "sam@test.edu";
            const school = "UPenn";
    
            // Act
            const obj = new Intern(name, id, email, school);
    
            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        });

        it("should throw an error if provided no arguments or incomplete arguments", () => {
            // Arrange
            const err = new Error("Must provide all 4 arguments");
            
            // Act
            const cb1 = () => new Intern();    // 0 arguments
            const cb2 = () => new Intern("Sam", 3, "sam@test.edu");  // 3 arguments
            
            // Assert
            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);
        });
    });

    describe("Methods", () => {
        it("getName(), getId(), getEmail(), getSchool() should return object's 'name', 'id', 'email', 'school' properties respectively", () => {
            // Arrange
            const name = "Sam";
            const id = 3;
            const email = "sam@test.edu";
            const school = "UPenn";

            // Act
            const obj = new Intern(name, id, email, school);

            // Assert
            expect(obj.getName()).toEqual(obj.name);
            expect(obj.getId()).toEqual(obj.id);
            expect(obj.getEmail()).toEqual(obj.email);
            expect(obj.getSchool()).toEqual(obj.school);
        });

        it("getRole() should return a string representation of the type of object", () => {
            // Act
            const obj = new Intern("Sam", 3, "sam@test.edu", "UPenn");

            // Assert
            expect(typeof obj.getRole()).toEqual("string");
            expect(obj.getRole()).toEqual(obj.constructor.name);
        });
    });
});