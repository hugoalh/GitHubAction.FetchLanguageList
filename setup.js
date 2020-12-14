/*==================
[GitHub Action] Fetch Language List - Setup
	Language:
		NodeJS/14.15.0
==================*/
const childProcess = require("child_process");
let setupLog = childProcess.execSync(
	`npm install`,
	{
		cwd: __dirname
	}
);
console.log(setupLog.toString("utf8"));
