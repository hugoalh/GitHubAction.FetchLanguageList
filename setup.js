/*==================
[GitHub Action] Language List - Setup
	Language:
		NodeJS/14.8.0
==================*/
import childProcess from "child_process";
import path from "path";
import url from "url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
childProcess.execSync(
	`npm install`,
	{
		cwd: __dirname
	}
);
