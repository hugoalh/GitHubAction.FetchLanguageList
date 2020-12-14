/*==================
[GitHub Action] Fetch Language List
	Language:
		NodeJS/14.15.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine"),
	githubAction = {
		core: require("@actions/core"),
		github: require("@actions/github")
	};
(async () => {
	githubAction.core.info(`Import workflow argument (stage 1). ([GitHub Action] Fetch Language List)`);
	let filterInput = githubAction.core.getInput("filter"),
		format = githubAction.core.getInput("format"),
		letterCase = githubAction.core.getInput("lettercase");
	githubAction.core.info(`Analysis workflow argument (stage 1). ([GitHub Action] Fetch Language List)`);
	if (advancedDetermine.isString(filterInput) !== true) {
		throw new TypeError(`Argument "filter" must be type of string (non-nullable)! ([GitHub Action] Fetch Language List)`);
	};
	let filterHandle = [];
	filterInput.replace(/\r\n/gu, "\n").replace(/\r/gu, "\n").split(/[,\n]/gu).forEach((element) => {
		element = element.trim().toLowerCase();
		switch (element) {
			case "":
				break;
			case "none":
			case "no":
				if (filterHandle.includes("none") === false) {
					filterHandle.push("none");
				};
				break;
			case "codeql":
			case "ossar":
				if (filterHandle.includes(element) === false) {
					filterHandle.push(element);
				};
				break;
			default:
				throw new RangeError(`Argument "filter"'s value is not in the method list! ([GitHub Action] Fetch Language List)`);
		};
	});
	if (filterHandle.length === 0) {
		throw new Error(`Missing filter! ([GitHub Action] Fetch Language List)`);
	};
	if (advancedDetermine.isStringSingleLine(format) !== true) {
		throw new TypeError(`Argument "format" must be type of string (non-nullable)! ([GitHub Action] Fetch Language List)`);
	};
	format = format.toLowerCase();
	switch (format) {
		case "comma":
		case "json":
			break;
		default:
			throw new RangeError(`Argument "format"'s value is not in the method list! ([GitHub Action] Fetch Language List)`);
	};
	if (advancedDetermine.isStringSingleLine(letterCase) !== true) {
		throw new TypeError(`Argument "lettercase" must be type of string (non-nullable)! ([GitHub Action] Fetch Language List)`);
	};
	letterCase = letterCase.toLowerCase();
	switch (letterCase) {
		case "keep":
		case "lower":
		case "upper":
			break;
		default:
			throw new RangeError(`Argument "lettercase"'s value is not in the method list! ([GitHub Action] Fetch Language List)`);
	};
	githubAction.core.info(`Import workflow argument (stage 2). ([GitHub Action] Fetch Language List)`);
	let languageListInput = githubAction.core.getInput("languagelist"),
		languageListHandle = [];
	githubAction.core.info(`Analysis workflow argument (stage 2). ([GitHub Action] Fetch Language List)`);
	switch (advancedDetermine.isString(languageListInput)) {
		case null:
			githubAction.core.info(`Import workflow argument (stage 3). ([GitHub Action] Fetch Language List)`);
			let repository = githubAction.core.getInput("repository"),
				token = githubAction.core.getInput("token");
			githubAction.core.info(`Analysis workflow argument (stage 3). ([GitHub Action] Fetch Language List)`);
			if (advancedDetermine.isStringSingleLine(repository) !== true) {
				throw new TypeError(`Argument "repository" must be type of string (non-nullable)! ([GitHub Action] Fetch Language List)`);
			};
			if (repository.search(/^[\d\w\-._]+\/[\d\w\-._]+$/giu) !== 0) {
				throw new SyntaxError(`Argument "repository"'s value is not match the require pattern! ([GitHub Action] Fetch Language List)`);
			};
			if (advancedDetermine.isStringSingleLine(token) !== true) {
				throw new TypeError(`Argument "token" must be type of string (non-nullable)! ([GitHub Action] Fetch Language List)`);
			};
			githubAction.core.info(`Send network request to GitHub. ([GitHub Action] Fetch Language List)`);
			const octokit = githubAction.github.getOctokit(token);
			let [repositoryOwner, repositoryName] = repository.split("/");
			let data = await octokit.repos.listLanguages({
				owner: repositoryOwner,
				repo: repositoryName
			});
			githubAction.core.info(`Receive network response from GitHub. ([GitHub Action] Fetch Language List)`);
			if (data.status !== 200) {
				githubAction.core.warning(`Receive status code ${data.status}! May cause error in the beyond. ([GitHub Action] Fetch Language List)`);
			};
			githubAction.core.info(`Analysis network response from GitHub. ([GitHub Action] Fetch Language List)`);
			languageListHandle = Object.keys(data.data);
			githubAction.core.debug(`Language List - Fetch: ${(languageListHandle.length > 0) ? languageListHandle.join(", ") : "N/A"} ([GitHub Action] Fetch Language List)`);
			break;
		case true:
			if (advancedDetermine.isStringifyJSON(languageListInput) === true) {
				languageListHandle = JSON.parse(languageListInput).language;
			} else {
				languageListHandle = languageListInput.split(",");
			};
			break;
		case false:
		default:
			throw new Error();
	};
	githubAction.core.info(`Filter language list. ([GitHub Action] Fetch Language List)`);
	let languageListOutput = [];
	filterHandle.forEach((elementFilter) => {
		switch (elementFilter) {
			case "none":
				languageListHandle.forEach((elementLanguage) => {
					if (languageListOutput.includes(elementLanguage) === false) {
						languageListOutput.push(elementLanguage);
					};
				});
				break;
			case "codeql":
				languageListHandle.forEach((elementLanguage) => {
					switch (elementLanguage.toLowerCase()) {
						case "csharp":
						case "cpp":
						case "go":
						case "java":
						case "javascript":
						case "python":
							if (languageListOutput.includes(elementLanguage) === false) {
								languageListOutput.push(elementLanguage);
							};
							break;
						default:
							break;
					};
				});
				break;
			case "ossar":
				languageListHandle.forEach((elementLanguage) => {
					switch (elementLanguage.toLowerCase()) {
						case "javascript":
						case "python":
							if (languageListOutput.includes(elementLanguage) === false) {
								languageListOutput.push(elementLanguage);
							};
							break;
						default:
							break;
					};
				});
				break;
			default:
				throw new Error();
		};
	});
	githubAction.core.debug(`Language List - Filter: ${(languageListOutput.length > 0) ? languageListOutput.join(", ") : "N/A"} ([GitHub Action] Fetch Language List)`);
	githubAction.core.info(`Letter case language list. ([GitHub Action] Fetch Language List)`);
	switch (letterCase.toLowerCase()) {
		case "keep":
			break;
		case "lower":
			languageListOutput.forEach((element, index) => {
				languageListOutput[index] = element.toLowerCase();
			});
			break;
		case "upper":
			languageListOutput.forEach((element, index) => {
				languageListOutput[index] = element.toUpperCase();
			});
			break;
		default:
			throw new Error();
	};
	githubAction.core.debug(`Language List - Letter Case: ${(languageListOutput.length > 0) ? languageListOutput.join(", ") : "N/A"} ([GitHub Action] Fetch Language List)`);
	githubAction.core.info(`Format language list. ([GitHub Action] Fetch Language List)`);
	let result;
	switch (format.toLowerCase()) {
		case "comma":
			result = languageListOutput.join(",");
			break;
		case "json":
			result = JSON.stringify({
				"language": languageListOutput
			});
			break;
		default:
			throw new Error();
	};
	githubAction.core.debug(`Language List - Format: ${result} ([GitHub Action] Fetch Language List)`);
	githubAction.core.info(`Export workflow argument. ([GitHub Action] Fetch Language List)`);
	githubAction.core.setOutput("dispatch", (languageListOutput.length > 0) ? "true" : "false");
	githubAction.core.setOutput("language", result);
})().catch((error) => {
	githubAction.core.error(error);
	process.exit(1);
});
