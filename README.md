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
User can create a new article from admin page | User inputs all needed information | Page will display new article on screen and it will be reflected in firebase.
Admin can edit or update articles | New information | firebase and the webpage will reflect the changed information
Keep track of number of views | user clicks on article | views + 1

## Process
### week 1
1. Create one object in root component out of hard coded Articles.  
2.  Display that article on a page.  I want to display an image with my article, the way they do on Bustle, so I will look into how to do that.  If I cant figure it out fairly quickly I will come back to that later.  The hard part I think will be getting the page to generate a random image to go with the article.  
3. Next I will add more articles to the root component that also get displayed on the screen to the user.
4. I want Users to be able to click on a display and be able to see the article they clicked on pop up for reading.  Right now I just want them to pop up on the same screen as where all of the articles are displayed because I don't yet know how to rout to other pages to be displayed.
5. I want users to be able to go back to the homepage from the article they are reading without having to click the back arrow in the browser.
6. I also want users to be able to add their own articles that will display with the other articles that are available to be viewed.
7.  I want to keep track of how many times an article has been viewed.

## Finished/Not Finished week 1
### Finished

I was able to get most of my specs done today.  I was able to get the webpage to display a series of articles that were hard coded into my approot component.  When the article is clicked it will display the entire article to the user, and the user can click a button to return to the main page of listed articles.  Users that want to are able to add a new article of their own, and if they need the page will use lorempixle to add a random image that has a set size to their article.

### Not Finished

I still have a lot of work to do.  I feel like I have the basic functionality as far as what people can do on Bustle and what they see, but I know I have a lot of work to do after the second week of angular in class.  The first thing I want to work on going forward is getting the articles to be displayed on their own page, or without the distractions of al of the other articles on the page.  Right now my article display is pretty weak.  I also need to remember how to make the input field larger for the article body because it is always really frusturating to a user when they are trying to type but they cant see what they are typing or what they have already typed.






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
