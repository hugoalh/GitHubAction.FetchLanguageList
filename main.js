/*==================
[GitHub Action] Language List
	Language:
		NodeJS/12.13.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine"),
	githubAction = {
		core: require("@actions/core"),
		github: require("@actions/github")
	};
(async () => {
	let filter = githubAction.core.getInput("filter"),
		format = githubAction.core.getInput("format"),
		letterCase = githubAction.core.getInput("lettercase"),
		repository = githubAction.core.getInput("repository"),
		token = githubAction.core.getInput("token");
	if (advancedDetermine.isString(filter) !== true) {
		throw new TypeError(`Argument "filter" must be type of string (non-nullable)! ([GitHub Action] Language List)`);
	};
	if (advancedDetermine.isString(format) !== true) {
		throw new TypeError(`Argument "format" must be type of string (non-nullable)! ([GitHub Action] Language List)`);
	};
	if (advancedDetermine.isString(letterCase) !== true) {
		throw new TypeError(`Argument "lettercase" must be type of string (non-nullable)! ([GitHub Action] Language List)`);
	};
	if (advancedDetermine.isString(repository) !== true) {
		throw new TypeError(`Argument "repository" must be type of string (non-nullable)! ([GitHub Action] Language List)`);
	};
	if (repository.search(/^[\w\d\-._]+\/[\w\d\-._]+$/giu) !== 0) {
		throw new SyntaxError(`Argument "repository"'s value does not match the required pattern! ([GitHub Action] Language List)`);
	};
	if (advancedDetermine.isString(token) !== true) {
		throw new TypeError(`Argument "token" must be type of string (non-nullable)! ([GitHub Action] Language List)`);
	};
	githubAction.core.debug(`Set up GitHub Octokit. ([GitHub Action] Language List)`);
	const octokit = githubAction.github.getOctokit(token);
	let [repositoryOwner, repositoryName] = repository.split("/");
	githubAction.core.debug(`Start to fetch repository language list. ([GitHub Action] Language List)`);
	let data = await octokit.repos.listLanguages({
		owner: repositoryOwner,
		repo: repositoryName
	});
	if (data.status !== 200) {
		githubAction.core.warning(`Receive status code ${data.status}! May cause error in the beyond. ([GitHub Action] Language List)`);
	};
	githubAction.core.debug(`Receive fetch data. ([GitHub Action] Language List)`);
	let listFull = Object.keys(data.data),
		listOutput = [];
	githubAction.core.debug(`Language (Fetch): ${(listFull.length > 0) ? listFull.join(", ") : "N/A"} ([GitHub Action] Language List)`);
	switch (filter.toLowerCase()) {
		case "full":
		case "none":
			listOutput = listFull;
			break;
		case "codeql":
			listFull.forEach((element) => {
				switch (element.toLowerCase()) {
					case "csharp":
					case "cpp":
					case "go":
					case "java":
					case "javascript":
					case "python":
						listOutput.push(element);
						break;
					default:
						break;
				};
			});
			break;
		default:
			throw new RangeError(`Argument "filter"'s value is not in the method list! Read the documentation for more information. ([GitHub Action] Language List`);
	};
	githubAction.core.debug(`Language (Filter): ${(listOutput.length > 0) ? listOutput.join(", ") : "N/A"} ([GitHub Action] Language List)`);
	switch (letterCase.toLowerCase()) {
		case "keep":
			break;
		case "lower":
			listOutput.forEach((element, index) => {
				listOutput[index] = element.toLowerCase();
			});
			break;
		case "upper":
			listOutput.forEach((element, index) => {
				listOutput[index] = element.toUpperCase();
			});
			break;
		default:
			throw new RangeError(`Argument "lettercase"'s value is not in the method list! Read the documentation for more information. ([GitHub Action] Language List`);
	};
	githubAction.core.debug(`Language (Letter Case): ${(listOutput.length > 0) ? listOutput.join(", ") : "N/A"} ([GitHub Action] Language List)`);
	let result;
	switch (format.toLowerCase()) {
		case "comma":
			result = listOutput.join(",");
			break;
		case "json":
			result = JSON.stringify({
				"language": listOutput
			});
			break;
		default:
			throw new RangeError(`Argument "format"'s value is not in the method list! Read the documentation for more information. ([GitHub Action] Language List`);
	};
	githubAction.core.debug(`Output - language: ${result} ([GitHub Action] Language List)`);
	githubAction.core.setOutput("language", result);
})();
