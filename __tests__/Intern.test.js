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