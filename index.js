//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./lib/renderedHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = [];

// Create an array of questions for user input
function init() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'What is your name?',
			},

			{
				type: 'input',
				name: 'id',
				message: 'What is your employee ID?',
			},

			{
				type: 'input',
				name: 'email',
				message: 'Enter your email address?',
			},
			{
				type: 'input',
				name: 'officeNumber',
				message: 'What is your office number?', //Manager only
			},
		])
		.then((answers) => {
			const newManager = new Manager(
				answers.name,
				answers.id,
				answers.email,
				answers.officeNumber
			);
			employees.push(newManager);
			console.log(employees);
			console.log(employees[0].getRole());
			mainMenu();
		});
}

function mainMenu() {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'choice',
				message: 'Would you like to keep adding more employees?',
				choices: ['Engineer', 'Intern', 'Done'],
			},
		])
		.then((answers) => {
			if (answers.choice == 'Engineer') {
				askEngineer();
			} else if (answers.choice == 'Intern') {
				askIntern();
			} else {
				console.log(employees);
				const template = generateHTML(employees);
				console.log(template);
				fs.writeFile('./dist/output/index.html', template, (err) => {
					if (err) throw err;
				});
			}
		});
}

askEngineer = () => {
	inquirer
		.prompt([
			{ type: 'input', name: 'name', message: 'What is your name?' },

			{
				type: 'input',
				name: 'id',
				message: 'What is your employee ID?',
			},

			{
				type: 'input',
				name: 'email',
				message: 'Enter your email address?',
			},
			{
				type: 'input',
				name: 'github',
				message: 'What is your github username?',
			},
		])
		.then((answers) => {
			const newEngineer = new Engineer(
				answers.name,
				answers.id,
				answers.email,
				answers.github
			);
			employees.push(newEngineer);
			mainMenu();
		});
};
askIntern = () => {
	inquirer
		.prompt([
			{ type: 'input', name: 'name', message: 'What is your name?' },

			{
				type: 'input',
				name: 'id',
				message: 'What is your employee ID?',
			},

			{
				type: 'input',
				name: 'email',
				message: 'Enter your email address?',
			},
			{
				type: 'input',
				name: 'school',
				message: 'What is your school?',
			},
		])
		.then((answers) => {
			const newIntern = new Intern(
				answers.name,
				answers.id,
				answers.email,
				answers.school
			);
			employees.push(newIntern);
			mainMenu();
		});
};

// Function call to initialize app
init();
