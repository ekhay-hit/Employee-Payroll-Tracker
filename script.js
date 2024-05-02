// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // Get user input to create and return an array of employee objects
  // array to store employees objects
  const employees = [];

  let i = 0;
  let condition = true;
  // while the condition is true do this
  while (condition) {
    // Retrieve and store employee first name
    const fstName = prompt("Enter first name:");
    //Retrieve and store employee last name
    const lstName = prompt("Enter last name:");
    // store employee first name
    let slry = prompt("Enter salary:");
    // verify that salary is a number if not loop and prompt till a number is entered
    while (Number(slry) % 1 !== 0) {
      slry = prompt("Please Enter a number salary:");
    }
    // store the value in an object called newEmployee
    const newEmployee = {
      firstName: fstName,
      lastName: lstName,
      salary: Number(slry),
    };

    // push the new object to employees array
    employees.push(newEmployee);

    // increase the index
    i++;
    // prompt for the user if wants to add more employees and set it to loop condition
    condition = confirm("Do you want to add anther employe");
  }

  // return the array of objects
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  //  Calculate and display the average
  // declairing sum varaible
  let sum = 0;
  // looping through the array and sum up salaries
  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary;
  }
  // calculate the average
  let average = sum / employeesArray.length;
  // return the result
  // Used toFixed function to roung for 2 decimal place
  return console.log(
    `The average employee salary between our ${
      employeesArray.length
    } employee(s) is ${average.toFixed(2)} `
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // Select and display a random employee
  const random = Math.floor(Math.random() * employeesArray.length);

  // return result
  return console.log(
    `Congratulations to ${employeesArray[random].firstName} ${employeesArray[random].lastName}, our random drawing winner`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
