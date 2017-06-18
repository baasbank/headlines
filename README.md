# Articools

[![Build Status](https://travis-ci.org/baasbank/headlines.svg?branch=cleanup)](https://travis-ci.org/baasbank/headlines)[![Coverage Status](https://coveralls.io/repos/github/baasbank/headlines/badge.svg?branch=testing)](https://coveralls.io/github/baasbank/headlines?branch=testing)

## Introduction

Articools is a web application that enables one view news from over 59 media houses(e.g. Business Insider, CNN, Buzzfeed, Ars Technica, and many more). Articools makes sure you are up to date on all things news, with a simple and intuitive user interface.

## Features of Articools

* Login with Google+.
* A wide range of sources to view news from.
* Search for a particular sources. 
* Choose how you want to sort your news (e.g. by Top or Latest).
* Links to news on the source's site.

## Usage
Click [here](https://articools.herokuapp.com) to access the application.
Or download or clone this repository and run it on your machine.

## For local installation:

* Clone this repository by running 
 * `git clone https://github.com/baasbank/headlines.git` on your terminal.
* Make sure you have NodeJS installed.
* Install all project dependencies by running `npm install`.
* Run `node server.js` to start the application.

## Technologies

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

* Fork this repository.
* Clone it.
* Create your feature branch on your local machine.
* Push your changes to your remote branch.
* Open a pull request to the master branch.


## Limitations

* Users can only sign in with their google accounts.
* Articles open only on their source website.
