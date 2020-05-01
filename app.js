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
    if (response.type === "Manager") {
      createManager("Manager");
    } else if (response.type === "Engineer") {
      createEngineer("Engineer");
    } else if (response.type === "Intern") {
      createIntern("Intern");
    } else {
      console.info("no more team members to add")
      finish();
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
        name: "id",
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
        name: "officeNumber",
        message: "Enter office number: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      },
    ]).then(response => {
      const managerObj = new Manager(response.name, response.id, response.email, response.officeNumber);
      teamMembers.push(managerObj);
      console.log(teamMembers);
      start();
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
        name: "id",
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
        name: "gitUsername",
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
      const engineerObj = new Engineer(response.name, response.id, response.email, response.gitUsername);
      teamMembers.push(engineerObj);
     start();
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
        name: "id",
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
        message: "Enter school name: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          } else {
            return "Please enter at least one character.";
          }
        }
      }
    ]).then(response => {
      const internObj = new Intern(response.name, response.id, response.email, response.school);
      teamMembers.push(internObj);
      console.log(teamMembers);
      start();
    });
  }
}



function finish(){
  const html = render(teamMembers);
  fs.writeFile("index.html", html, error => {
    if (error) {
      return console.log(Error)
    } else {
      return console.log("Success!")
    }
  } )
};

start();


//put the html mess here








