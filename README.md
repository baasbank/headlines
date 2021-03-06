# Articools

[![Build Status](https://travis-ci.org/baasbank/headlines.svg?branch=master)](https://travis-ci.org/baasbank/headlines)[![Coverage Status](https://coveralls.io/repos/github/baasbank/headlines/badge.svg?branch=master)](https://coveralls.io/github/baasbank/headlines?branch=master)[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)

## Introduction

Articools is a web application that enables one view news from over 59 media houses(e.g. Business Insider, CNN, Buzzfeed, Ars Technica, and many more). Articools makes sure you are up to date on all things news, with a simple and intuitive user interface.

## Features of Articools

* Login with Google+.
* A wide range of sources to view news from.
* Search for a particular source. 
* Choose how you want to sort your news (e.g. by Top or Latest).
* Links to news on the source's site.

## Usage
Click [here](https://articools.herokuapp.com) to access the application.
Or download or clone this repository and run it on your machine.

## For local installation & testing:

* Clone this repository by running 
 * `git clone https://github.com/baasbank/headlines.git` on your terminal.
* If you don't have NodeJS already installed go [here](https://nodejs.org/en/) and install it.
* Navigate into the cloned project directory.
 * For example, if you cloned the project into the desktop directory, then run `cd desktop` which takes you into the desktop, then `cd headlines` to enter the project directory.
* Once in the project directory, install all project dependencies by running `npm install`.
* Run the command `npm start` to start the application.
* To run tests, run the command `npm test`.

## Technologies

* [NodeJS:](https://nodejs.org/en/) is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.

* [es6(ECMAScript 2015):](https://en.wikipedia.org/wiki/ECMAScript) es6 is the sixth major release of the javascript language specification. It enables features like constants, arrow functions, template literals, etc.

* [React:](https://facebook.github.io/react/tutorial/tutorial.html) Facebook open source, efficient, javascript library for building user interfaces. 

* [ReactDOM:](https://facebook.github.io/react/docs/react-dom.html) ReactDOM is used to mount JSX elements on the DOM. It is the glue between React and the DOM.  

* [Babel:](https://babeljs.io/) Babel is used to transpile es6 down to es5. 

* [Webpack:](https://webpack.github.io/docs/what-is-webpack.html) Webpack is used to bundle modules with dependencies and run mundane tasks.  

* [Axios:](https://www.npmjs.com/package/axios) Axios is an http client library used in making API calls.  

* [Jest:](https://facebook.github.io/jest/) Jest is used to run tests.  

## Resources

* [NewsAPI:](https://newsapi.org/) NewsAPI is an API that returns JSON metadata for published articles on a range of news sources and blogs. NewsAPI provides the sources and the articles used.

## Contributing

* Fork this repository by clicking the `Fork` menu item in the top right corner of this repository.
* Go to your github account, and under your repository list, you should find this project listed.
* Open the project, click on the `clone or download` button, then copy the url that pops up.
* Open your terminal and run the command `git clone url` where `url` is the url from the previous step.
* Navigate into the cloned project directory.
 * For example, if you cloned the project into the desktop directory, then run `cd desktop` which takes you into the desktop, then `cd headlines` to enter the project directory.
* Once in the project directory, install all project dependencies by running `npm install`.
* Create your feature branch on your local machine by running `git checkout -b branchName`, where `branchName` is the name of your feature branch.
* Make your changes.
* Add your changes by running `git add filePath`, where `filePath` is path of the file(s) in which the 
change(s) were made.
* Commit your changes by running `git commit -m "commit message"`, where `commit message` is your commit message.
* Push your changes to your remote branch by running `git push origin branchName`.
* Open a pull request to the master branch.


## Limitations

* Users can only sign in with their google accounts.
* Articles open only on their source website.

## License

* This project is authored by Baasbank Akinmuleya, and is licensed for use, distribution and modification under the ISC license.

