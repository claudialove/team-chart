// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email, school);
      this.school = school;
    }

    getRole() {
      return "Intern"
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

  getSchool() {
    return this.school;
  }



  }
  
  module.exports = Intern;