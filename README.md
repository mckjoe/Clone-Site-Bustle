# CloneSite (bustle)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

#### By Joseph McKinney on May 4th, 2018 through May 11th, 2018.

## Description
This is a website people can visit and find interesting articles to read.  The articles are displayed as boxes on the screen with an image, a title, a quick description/teaser of what the article is about, and the authors name.  Users should be able to click on an article that interests them and be dynamically routed to view that article.  One thing I would like to change about the way Bustle has their page setup is that it seems like in order to go back to the homepage you have to hit back, and if I can I would like to incorporate a button or box on each article that can be clicked to make the homepage come back with all of the articles again.  

# IMPORTANT
### To be able to view this page and have access to the data you will need to create a firebase account and follow the steps spelled out below under "Firebase Setup Instructions".

## Setup and Installation Requirements
### To clone the project to your computer:
* Clone the path from Github,
* With command line, change directories into Desktop,
* Enter "git clone + path",
Change directories into newly added project directory (clone-site),
* With command line, enter "npm install"

## To view source code on your computer:
* From the project root directory in command line, change to project home directory,
*  From command line, enter "atom .",
* Stand back as the project opens in atom as it can be exciting

## Plain English Specs
Behavior | Input | Output
---------|-------|-------
Create articles as objects | article name, article teaser, article author, article image | Input will be used to display articles on homepage
display articles on main page | User enters site | articles are displayed with an image, title, teaser, and author.
User clicks article display and is routed to view article | "click" | Rout to view article.
Convert to firebase for gathering data | new article | article shown in firebase data.


## To view in a live development server:
* Follow instructions located below under "Development Server".  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
