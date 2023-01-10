const utils = require("./utils")
const valetTask = require("./tasks/valet")
const phpTask = require("./tasks/composer")
const envTask = require("./tasks/env")
const seedTask = require("./tasks/seed")
const templatesTask = require("./tasks/templates")
const nitroAddTask = require("./tasks/nitro")

const ask = require("inquirer")
const ui = new ask.ui.BottomBar()

const description = `Hello developer!👋
You are about to setup this project for the first time. This script will help you with the following tasks.
- set up ddev
- install php dependencies
- setup the template folder for the project based on the css type
- generate .env from .env.example if it's missing
- seed the database if chosen
Let's get started!

`
console.clear()
ui.updateBottomBar(description)

const prompts = [
	{
		type: "confirm",
		name: "isNitro",
		message: `By default this will assume you use Valet but Nitro has been detected in your system, do you wish to use Nitro instead?`,
		when: () => {
			return utils.isNitroAvailable()
		},
		default: true,
	},
	{
		type: "input",
		name: "name",
		message: `What will be the domain of this project locally. For example, "new-project" will be available at https://new-project.test (lower case)`,
		validate(input) {
			return /^[a-zA-Z]+/gi.test(input)
				? true
				: "Please ensure the project name only starts with letters"
		},
		when: (answers) => {
			return !answers.isNitro
		},
	},
	{
		type: "list",
		name: "cssType",
		message: `Tailwindcss or Sass?`,
		choices: [
			{ name: "Tailwindcss", value: "tailwindcss" },
			{ name: "Sass", value: "sass" },
		],
		when: (answers) => {
			return !utils.isCssTypeDecided()
		},
	},
	{
		type: "confirm",
		name: "seedDb",
		message: `Do you wish to seed the database with the lightbreeze.sql?`,
		default: true,
	},
	{
		type: `confirm`,
		name: `shouldCreateDb`,
		message: `Do you want me to create the database in your local valet DB?`,
		default: true,
		when: (answers) =>
			!answers.isNitro && !utils.isEnvPresented() && answers.seedDb,
	},
	{
		type: `input`,
		name: `dbName`,
		message: `What is the database name in your local valet DB?`,
		default: (answers) => answers.name,
		when: (answers) => !answers.isNitro && !utils.isEnvPresented(),
	},
	{
		type: `input`,
		name: `dbPassword`,
		message: `What is the database password for your local valet DB?`,
		default: "",
		when: (answers) => !answers.isNitro && !utils.isEnvPresented(),
	},
]

ask.prompt(prompts)
	.then((answers) => {
		const { name, cssType, isNitro } = answers
		let task = new Promise((r) => r())
		if (!utils.isCssTypeDecided()) {
			task = templatesTask.run(cssType, ui)
		}
		task.then(() => {
			const setupTask = isNitro
				? nitroAddTask.run(ui)
				: valetTask.run(name, ui)
			setupTask.then(() => {
				phpTask.run(ui).then(() => {
					let task = new Promise((r) => r())
					if (!utils.isEnvPresented()) {
						task = envTask.run(
							name,
							answers.dbName,
							answers.dbPassword,
							ui
						)
					}
					task.then(() => {
						let task = new Promise((r) => r())
						if (answers.seedDb) {
							task = seedTask.run(
								answers.shouldCreateDb,
								isNitro,
								ui
							)
						}
						task.then(() => {
							console.clear()
							ui.updateBottomBar(`🎉🎉🎉 All done. Happy coding! 🎉🎉🎉
👉 https://${name}.test 👈`)
						})
					})
				})
			})
		})
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
			console.log(
				"We are not able to load the question, please check your environment"
			)
		} else {
			// Something else went wrong
			console.error(error)
		}
	})
