// TODO: Write code to define and export the Employee class
//CLAUDIA: this is a class employee, all objects are employees even if they are constructed from different functions based on role
class Employee{
    constructor(name, role, id, email) {
      if (!name) {
        throw new Error("You are missing employee name.");
      }
      if (!role) {
        throw new Error("You are missing employee role.");
      }
      if (!id) {
        throw new Error("You are missing employee id.");
      }
      if (!email) {
        throw new Error("You are missing email address.");
      }
      this.name = name;
      this.role = role;
      this.id = id;
      this.email = email;
    }
}


module.exports = Employee;



