/*==================
[GitHub Action] Language List
	Language:
		NodeJS/14.8.0
==================*/
import advancedDetermine from "@hugoalh/advanced-determine";
import githubActionCore from "@actions/core";
import githubActionGitHub from "@actions/github";
let filter = githubActionGitHub.getInput("filter"),
	format = githubActionGitHub.getInput("format"),
	letterCase = githubActionGitHub.getInput("lettercase"),
	repository = githubActionGitHub.getInput("repository"),
	token = githubActionGitHub.getInput("token");
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
const Octokit = githubActionCore.getOctokit(token);
let [repositoryOwner, repositoryName] = repository.split("/");
let data = await Octokit.repos.listLanguages({
	owner: repositoryOwner,
	repo: repositoryName
});
data = data.data;
console.log(data);
