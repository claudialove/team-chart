const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// This file will generate the final HTML. You don't need to touch this at all!
const render = require("./lib/htmlRenderer");
// This will be an array of all team member objects created
const teamMembers = [];
// This will be an array of the id values created for each object so there are no duplicates
const idArray = [];

// start()
// Do you want to add a team member? If so, choose a type:
// Manager, Engineer, Intern, I'm Done
function start() {
  inquirer.prompt([
    {
      type: "list",
      message: "Choose an employee type:",
      name: "type",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Finished",
      ]
    }
  ]).then(response => {
    if (response.type === "manager") {
      createManager("manager");
    } else if (response.type === "engineer") {
      createEnigneer("engineer");
    } else if (response.type === "intern") {
      createIntern("intern");
    } else {
      console.info("no more team members to add")
    }
  }
  )

  // createManager()
  // ask all the manager questions, when done, go back to start()  
  function createManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name:",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      },
      {
        type: "input",
        name: "empId",
        message: "Enter employee ID: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      },
      {
        type: "input",
        name: "office",
        message: "Enter office number: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      }
    ]).then(response => {
      const managerObj = new Manager(response.name, response.empId, response.email, response.office);
      teamMembers.push(managerObj);
      createManager();
    });
  }

   // createEngineer()
  // ask all the engineer questions, when done, go back to start()  
  function createEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name:",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      },
      {
        type: "input",
        name: "empId",
        message: "Enter employee ID: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      },
      {
        type: "input",
        name: "github",
        message: "Enter Github username: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      }
    ]).then(response => {
      const engineerObj = new Engineer(response.name, response.empId, response.email, response.github);
      teamMembers.push(engineerObj);
      createEngineer();
    });
  }

   // createIntern()
  // ask all the  intern questions, when done, go back to start()  
  function createIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name:",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      },
      {
        type: "input",
        name: "empId",
        message: "Enter employee ID: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      },
      {
        type: "input",
        name: "school",
        message: "Enter school name: "
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      }
    ]).then(response => {
      const InternObj = new Intern(response.name, response.empId, response.email, response.school);
      teamMembers.push(internObj);
      createIntern();
    });
  }
}
start();








