/*==================
[GitHub Action] Language List
	Language:
		NodeJS/12.0.0
==================*/
(async () => {
	const advancedDetermine = require("@hugoalh/advanced-determine"),
		githubAction = {
			core: require("@actions/core"),
			github: require("@actions/github")
		};
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
	if (advancedDetermine.isString(token) !== true) {
		throw new TypeError(`Argument "token" must be type of string (non-nullable)! ([GitHub Action] Language List)`);
	};
	const Octokit = githubAction.github.getOctokit(token);
	let [repositoryOwner, repositoryName] = repository.split("/");
	let data = await Octokit.repos.listLanguages({
		owner: repositoryOwner,
		repo: repositoryName
	});
	data = data.data;
	console.log(data);
})();
