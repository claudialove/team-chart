// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// If you inherit from a class, make sure you REQUIRE that class


// Basic class structure:

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitUsername) {
    super(name, id, email);
    this.gitUsername = gitUsername;

  }
  getRole() {
    return "Engineer"
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getGithub() {
    return this.gitUsername;
  }
  


    
  
}

module.exports = Engineer;