// TODO: Write code to define and export the Employee class
//CLAUDIA: this is a class employee, all objects are employees even if they are constructed from different functions based on role
class Employee{
    constructor(name, id, email) {
      if (!name) {
        throw new Error("You are missing employee name.");
      }
      if (!id) {
        throw new Error("You are missing employee id.");
      }
      if (!email) {
        throw new Error("You are missing email address.");
      }
      this.name = name;
      this.id = id;
      this.email = email;
      }

      getRole(name, id, email) {
        return "Employee"
        }
 
}




module.exports = Employee;



