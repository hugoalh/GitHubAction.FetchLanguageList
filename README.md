# \[GitHub Action\] Fetch Language List

<details>
  <summary><a href="https://github.com/hugoalh/GitHubAction.FetchLanguageList"><code>hugoalh/GitHubAction.FetchLanguageList</code></a></summary>
  <img align="center" alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/hugoalh/GitHubAction.FetchLanguageList?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Top Langauge" src="https://img.shields.io/github/languages/top/hugoalh/GitHubAction.FetchLanguageList?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/hugoalh/GitHubAction.FetchLanguageList?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Code Size" src="https://img.shields.io/github/languages/code-size/hugoalh/GitHubAction.FetchLanguageList?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Watcher" src="https://img.shields.io/github/watchers/hugoalh/GitHubAction.FetchLanguageList?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Star" src="https://img.shields.io/github/stars/hugoalh/GitHubAction.FetchLanguageList?logo=github&logoColor=ffffff&style=flat-square" />
  <img align="center" alt="GitHub Fork" src="https://img.shields.io/github/forks/hugoalh/GitHubAction.FetchLanguageList?logo=github&logoColor=ffffff&style=flat-square" />
</details>

A GitHub action to fetch repository language list.

<table>
  <tr>
    <td><a href="./LICENSE.md"><b>License</b></a></td>
    <td>MIT</td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh/GitHubAction.FetchLanguageList/releases"><b>Release</b></a> <img align="center" src="https://img.shields.io/github/downloads/hugoalh/GitHubAction.FetchLanguageList/total?label=%20&style=flat-square" /></td>
    <td>
      <b>Latest:</b> <img align="center" src="https://img.shields.io/github/release/hugoalh/GitHubAction.FetchLanguageList?sort=semver&label=%20&style=flat-square" /> (<img align="center" src="https://img.shields.io/github/release-date/hugoalh/GitHubAction.FetchLanguageList?label=%20&style=flat-square" />)<br />
      <b>Pre:</b> <img align="center" src="https://img.shields.io/github/release/hugoalh/GitHubAction.FetchLanguageList?include_prereleases&sort=semver&label=%20&style=flat-square" /> (<img align="center" src="https://img.shields.io/github/release-date-pre/hugoalh/GitHubAction.FetchLanguageList?label=%20&style=flat-square" />)
    </td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh/GitHubAction.FetchLanguageList/graphs/contributors"><b>Contributor</b></a> <img align="center" src="https://img.shields.io/github/contributors/hugoalh/GitHubAction.FetchLanguageList?label=%20&style=flat-square" /></td>
    <td><ul>
        <li><a href="https://github.com/hugoalh">hugoalh</a></li>
        <li><a href="https://github.com/hugoalh-studio">hugoalh Studio</a></li>
    </ul></td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh/GitHubAction.FetchLanguageList/issues?q=is%3Aissue"><b>Issue</b></a></td>
    <td><img align="center" src="https://img.shields.io/github/issues-raw/hugoalh/GitHubAction.FetchLanguageList?label=%20&style=flat-square" /> : <img align="center" src="https://img.shields.io/github/issues-closed-raw/hugoalh/GitHubAction.FetchLanguageList?label=%20&style=flat-square" /></td>
  </tr>
  <tr>
    <td><a href="https://github.com/hugoalh/GitHubAction.FetchLanguageList/pulls?q=is%3Apr"><b>Pull Request</b></a></td>
    <td><img align="center" src="https://img.shields.io/github/issues-pr-raw/hugoalh/GitHubAction.FetchLanguageList?label=%20&style=flat-square" /> : <img align="center" src="https://img.shields.io/github/issues-pr-closed-raw/hugoalh/GitHubAction.FetchLanguageList?label=%20&style=flat-square" /></td>
  </tr>
  <tr>
    <td><b>Code Quality</b></td>
    <td>
      <a href="https://www.codefactor.io/repository/github/hugoalh/githubaction.fetchlanguagelist"><img align="center" alt="CodeFactor Grade" src="https://img.shields.io/codefactor/grade/github/hugoalh/GitHubAction.FetchLanguageList?logo=codefactor&logoColor=ffffff&style=flat-square" /></a>
      <a href="https://lgtm.com/projects/g/hugoalh/GitHubAction.FetchLanguageList/alerts"><img align="center" alt="LGTM Alert" src="https://img.shields.io/lgtm/alerts/g/hugoalh/GitHubAction.FetchLanguageList?label=%20&logo=lgtm&logoColor=ffffff&style=flat-square" /></a>
      <a href="https://lgtm.com/projects/g/hugoalh/GitHubAction.FetchLanguageList/context:javascript"><img align="center" alt="LGTM Grade" src="https://img.shields.io/lgtm/grade/javascript/g/hugoalh/GitHubAction.FetchLanguageList?logo=lgtm&logoColor=ffffff&style=flat-square" /></a>
    </td>
  </tr>
</table>

## 📜 Description

### 🌟 Feature

- Simple setup.
- Support all of the languages that detectable with [Linguist](https://github.com/github/linguist).
- Helpful for building language-based dynamic matrix.

## 🛠 Configuration

### 🏗 Environment

#### Operating System

Any

#### Software

- NodeJS (>= v12.13)
- NPM (>= v6.12)

### 📥 Input

#### `token`

**\[Optional\]** `<string.secret = "${{github.token}}">` GitHub personal access token.

#### `repository`

**\[Optional\]** `<string = "${{github.repository}}">` Repository. Default is current repository.

#### `filter`

**\[Optional\]** `<string = "full">` Result filter.
- `"full"`/`"none"` Output all of the language name that detected.
- `"codeql"` Output all of the language name that detected and CodeQL is supported.
- `"ossar"` (>= v1.0.10) Output all of the language name that detected and OSSAR (Open Source Static Analysis Runner) is supported.

#### `lettercase`

**\[Optional\]** `<string = "lower">` Letter case transform.
- `"keep"` No case convert  (e.g.: `C`, `JavaScript`, `Python`).
- `"lower"` Convert to lower case (e.g.: `c`, `javascript`, `python`).
- `"upper"` Convert to upper case (e.g.: `C`, `JAVASCRIPT`, `PYTHON`).

#### `format`

**\[Optional\]** `<string = "json">` Format.
- `"comma"` Output a comma (`,`) separated string (e.g.: `"c,javascript,python"`).
- `"dispatch"` (>= v1.0.10) Output a boolean string (i.e.: `"true"` or `"false"`).
- `"json"` Output a stringify JSON (e.g.: `{"language":["c","javascript","python"]}`).

### 📤 Output

#### `language`

`<(string|object)>` Language list.

### Example

#### Non Matrix Edition

```yml
jobs:
  main:
    name: "Main"
    runs-on: "ubuntu-latest"
    steps:
      - name: "Fetch Language List"
        id: "fetch-language-list"
        uses: "hugoalh/GitHubAction.FetchLanguageList@master"
        with:
          filter: "codeql"
          lettercase: "lower"
          format: "comma"
      - name: "Checkout Repository"
        uses: "actions/checkout@v2.3.4"
        with:
          fetch-depth: 2
      - name: "Checkout Pull Request"
        if: "${{github.event_name == 'pull_request'}}"
        run: "git checkout HEAD^2"
      - name: "Initialize CodeQL"
        uses: "github/codeql-action/init@v1"
        with:
          languages: "${{steps.get-language-list.outputs.language}}"
          queries: "+security-and-quality"
      # - name: "Auto Build"
      #   uses: "github/codeql-action/autobuild@v1"
      # - name: "Build"
      #   run: |
      #     make bootstrap
      #     make release
      - name: "Analyze Repository"
        uses: "github/codeql-action/analyze@v1"
```

#### Matrix Edition

```yml
jobs:
  fetch-language-list:
    name: "Fetch Language List"
    runs-on: "ubuntu-latest"
    outputs:
      matrix: "${{steps.fetch-language-list-main.outputs.language}}"
    steps:
      - id: "fetch-language-list-main"
        uses: "hugoalh/GitHubAction.FetchLanguageList@v1.0.0"
        with:
          filter: "codeql"
          lettercase: "lower"
          format: "json"
  analysis:
    name: "Analysis"
    needs:
      - "fetch-language-list"
    runs-on: "ubuntu-latest"
    strategy:
      fail-fast: false
      matrix: "${{fromJSON(needs.fetch-language-list.outputs.matrix)}}"
    steps:
      - name: "Checkout Repository"
        uses: "actions/checkout@v2.3.3"
        with:
          fetch-depth: 2
      - name: "Checkout Pull Request"
        if: "${{github.event_name == 'pull_request'}}"
        run: "git checkout HEAD^2"
      - name: "Initialize"
        uses: "github/codeql-action/init@v1"
        with:
          languages: "${{matrix.language}}"
          queries: "+security-and-quality"
      # - name: "Auto-Build"
      #   uses: "github/codeql-action/autobuild@v1"
      # - name: "Build"
      #   run: |
      #     make bootstrap
      #     make release
      - name: "Analyze"
        uses: "github/codeql-action/analyze@v1"
```

### 📚 Guide

- [GitHub Actions: Enabling debug logging](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/enabling-debug-logging)
- [GitHub Actions: Encrypted secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets)
