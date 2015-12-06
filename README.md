# tunely lab

Full CRUD SPA with mongoose and express.

## Overview

This lab begins with a basic front-end to display a list of music albums.  As we progress through we'll:
* serve the album data from our server's `/api/` routes.
* get the data from the server using ajax and display it on the page with jQuery
* retrieve the data from the database
* add functionality to create a new album
* add functionality to remove/delete an album
* add the ability to edit/update an album
* support storing song information (with full CRUD) (mongoose embedded)
* add a second major route for artist information  (mongoose reference)


### Project Planning

It's important to do a good amount of planning and whiteboarding before you start coding.  That'll save you costly mistakes and help you to refine the eventual user experience before you've invested hours in the project.

We're going to use **"outside-in development"** practices.  This means we'll start by designing our UI (the outside).
Then we'll move more inside by connecting it to a backend serving hard-coded data.  Next, we'll retrieve that data from a database.

We will also be breaking our work into short **sprints** with specific design goals.  In each sprint we'll try to work outside-in.  

Let's start with a basic wireframe.  

![Image Alt](docs/assets/images/tunely_wireframe-1.png)

Typically when you work on a project you'll start with a basic idea and do your initial development on paper or whiteboard.  You can develop and "virtually" test your app with wireframes.  There are also a number of software packages that will help you build wireframes.

In the above you can see we're building a site that displays a list of musical albums.  It also has a jumbotron to introduce users to the page.  This is our starting point only; you'll be responsible for evolving it over time.


## Getting Started

* fork and clone this lab repo
* read this doc then proceed to sprint 1


## Sprints

### Module A: Create and Read with Mongo and embedded model relationships.

#### Sprint 1

[Sprint 1: serve & display hard-coded data on the page, then connect to database](/docs/sprint1.md)

#### Sprint 2

[Sprint 2: add form and support creation of new data](/docs/sprint2.md)

#### Sprint 3

[Sprint 3: add mongo embedded song data](/docs/sprint3.md)


### Module B: Update and Delete with Mongo and embedded model relationships.
### Module C: Full CRUD with Mongo and reference relationships.
