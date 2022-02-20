# Intro

Project was made using Typescript, React, Styled-Components and Jest/React-Testing-Library

## Installation

Make sure you have [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed.
Fork and Clone this repository.
Open the project's folder in your editor/terminal of choice and install the dependencies by running:

```
npm install
```

## Approach

Form is mounted with a boolean hasError default of true, disabling the submit button, which makes it so the user can't submit the form.
Using a custom hook, the fields are validated through individual blur events, making the user experience better.
While submitting the fields are disabled, preventing errors like double submissions.

## Testing

Some test suites were made, which can be seen by running the command:

```
npm test
```
