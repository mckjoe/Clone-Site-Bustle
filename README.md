# CloneSite (bustle)

## To view deployed page on a live server, vist http://bustle-clone-1a696.firebaseapp.com/
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

#### By Joseph McKinney on May 4th, 2018 through May 11th, 2018.

## Description
This is a website people can visit and find interesting articles to read.  The articles are displayed as boxes on the screen with an image, a title, a quick description/teaser of what the article is about, and the authors name.  Users should be able to click on an article that interests them and be dynamically routed to view that article.  One thing I would like to change about the way Bustle has their page setup is that it seems like in order to go back to the homepage you have to hit back, and if I can I would like to incorporate a button or box on each article that can be clicked to make the homepage come back with all of the articles again.  

# IMPORTANT
### To be able to build this page and have access to the data you will need to create a firebase account and follow the steps spelled out below under "Firebase Setup Instructions".

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

I still have a lot of work to do.  I feel like I have the basic functionality as far as what people can do on Bustle and what they see, but I know I have a lot of work to do after the second week of angular in class.  The first thing I want to work on going forward is getting the articles to be displayed on their own page, or without the distractions of al of the other articles on the page.  Right now my article display is pretty weak.  I also need to remember how to make the input field larger for the article body because it is always really frustrating to a user when they are trying to type but they cant see what they are typing or what they have already typed.

### Week Two
1.  This weeks work consisted of realizing that most of what I had done last week could have and should have been done in a better way that I didn't yet know about.  I have basically taken my project apart and started it from scratch with last weeks as a reference to what I want to be able to do and what some of the code will look like.  Not to say last weeks project was useless by any means, as a lot of it can be replicated in an easier way after the lessons this week.  
2.  I need to have all of my components hooked up to a router so that I can change from page to page without just hiding and showing divs with JQuery (Don't want to be serving everyone spaghetti).
3. Over the week in my spare time I started working on the project to be ready for friday, so at this moment I have a page that shows articles to a user, they can create new articles, and they can view current articles.  I need to make the page have a bit more functionality still.
4. I want to add the ability for a user to view an article and be able to go back to the homepage where all of the articles are being displayed so they can pick another.
5. I want admins to be able to edit the articles, and remove them if need be.  
4.  I need to have all of my articles along with their details stored in firebase, so that my application shows I know how to hook up firebase and store my imformation there.
5.  I want users to be able to read all of the articles on my page and have them actually look like articles so I will probably do a lot of styling today.  
6.  I want users to be able to hide articles that they don't want to see on the main display.
7.  I need to create a bunch more articles to be stored in firebase.  

## Week two finished
 I was able to get some more functionality into my project by making an option for people to go back to the home screen where all of the articles are.  Ontop of that I was able to make the layout of my project a bit nicer but there is a lot left to do.  I got my project hooked up to firebase just fine, and users can select articles to edit or remove from the database if they would like.  My project is also deployed on firebase, which proved to be a big struggle with my windows operating system until I found the information I needed to realize I just needed to use the command prompt instead of gitbash.  Gitbash wont let you navigate with the arrow keys or make selection in the firebase setup.  

## Week two not finished
I really had wanted to do more styling with my page, but I ran into some problems along the way with my project that ate up a lot more time than i had intended.  At one point I had added hide buttons to the display of all of the articles, but when I clicked it I accidentally deleted all of my data from firebase, and spent a lot longer than I wanted to trying to track down what the problem was.  I still dont know what happened, but I know I was able to get the project up and running again and i'm super grateful for that, there was a period of time where I thought I had ruined everything.  I was able to get my articles to be a bit more atricly with more relevent photos and adding variety to the fake articles and some more length.  Most of the things I set out to finish this morning got accomplished, minus the remove button from each article.  


## Firebase setup Instructions
* First crearte a free firebase account.
* Once you've created an account, you should be taken to a user dashboard area, with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.
* You'll then be taken to an "Overview" area. Where you'll be offered three options: Choose the "Add firebase to your web-app" option.  This will open a prompt with credentials in it.
* Create a file called "api-keys.ts" in the src/app/ directories.  
* rename variable holding credentials to look like this, but use your new credentials instead of the x's:
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
* Once this is done, go to the firebase webpage, and click the three dots on the right of the project display box.  There should be an option to import .json files.  Choose that and then go to the sample-articles.json file and import it.  This will add sample articles to your firebase project so you will be able to serve the project and view it.  

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
