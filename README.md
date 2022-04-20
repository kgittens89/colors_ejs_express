# Full-CRUD-Collab-Lab

![Full Crud](https://mfikri.com/assets/images/564f31b268c76579b93d0deda8be955a.png)

## Overview
This morning/afternoon you will be working with a partner to complete an MVP CRUD Express App. You will be using _'paired programming'_ methods during this lab. 

This Lab is designed to be a practical, hands-on review activity. You will be submitting a pull request at the end of the day (5pm EST, April 20) and your in-progress code will be counted as a 'complete' deliverable. 

### Notes on MVP
MVP stands for _Minimum Viable Product_, or in other words, the smallest, most stripped-down version of the thing you're trying to build that you could possibly make. 

You may want to look at the _Sell-It-Up_ as an example, but your team will define what the MVP for your express app might include.


## What is 'Paired Programming'
> "Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator,[1] reviews each line of code as it is typed in. ***The two programmers switch roles frequently***." -[wiki](https://en.wikipedia.org/wiki/Pair_programming)

### The Why of Paired Programming
Beginning in this unit, our engineers will have the chance to practice this development approach, as we move into partner assignments and group projects so that we better understand what it means to work on development teams and with other engineers.

### The How of Paired Programming
In person, pair programming occurs on the same computer. In remote settings, pair programming can be accomplished by screen sharing and with the help of extensions like Live Share for VS Code, that allow two programmers to work in the same project simultaneously.

### Pair Programming Roles
- Driver - shares the project screen and type out the syntax provided/guided by the navgiator. 
- Navigator - reviews the project notes / notion resources / package documentation to provide guidance on development steps and strategizes next steps. 

### Pair Programming Best Practices
- Always share your screen when "driving"
- As a navigator, ask questions rather than dictating steps
- Listen to your partner and discuss a possible solution, regardless of role.
- If you are navigating, discuss with the driver on the amount of syntax support they will need. 
- Switch roles frequently. 

## Technical Requirements
1. Create a CRUD (Create/Read/Update/Delete) Express app with a partner (either assigned or chosen)
1. Practice pair-programming best practices and share the development loads.
1. Make a regular commits (ie 1 commit per development step)
1. Submit a pull request by the end of day (April 20, 2022) - even if not complete. You are allowed to continue to make commits at the end of the day.

## Setup
1. Fork this repo. Then start to build out your express app within this repo.
1. Setup your expressJS app boilerplate. Note you already have `.gitignore`, but you will need to install your dependencies.
1. Setup your application  
1. Test that your server is running. Commit.

## Your "database" & "model"
1. Discuss with your team member what your own custom data model will server - try to be specific about your resource. 

### Example Resources: 
    - Blog Posts
    - Workouts
    - To-Dos
    - Entrees
    - Deserts 
    - Car Rentals

### Example Blog Post:

```js 
const Posts = [{
    title: "hello world",
    body: "This is start of something beautiful...",
    image: "https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80",
    postDate: new Date("Apr 13 2022")
}]
```
1. Create an array of your CRUDable objects. Commit.

## Read Routes - GET

1. Create an index route that sends all of your data to the client. Commit.
1. Create an index template that displays simple html. Commit.
1. Update your index template to display all of your objects.Commit.
1. Create a show route that renders a template that displays one of your objects and links back to the resource index. Commit.
1. Switch roles (Driver << >> Navigator).

## Create Routes - GET / POST
1. Create a new route that displays a form that can 'create' a new resource. Commit. 
1. Add your body-parser middleware in your entry-point file. Commit.
1. Create a create route that will receive `POST` requests and adds the request body data to your array of CRUDable objects. Commit.
1. Switch roles (Driver << >> Navigator).

## Delete / Destroy Routes - DELETE
1. Make show (or index) template contain a form which will make a DELETE request to the server.  Commit.
1. Create a DELETE route that will remove the specified object from the array and redirect to the index page. Commit.
1. Switch roles (Driver << >> Navigator).

## Edit / Update Routes -  GET / PUT

1. An edit route that shows an edit page (template) containing a form populated with the data from the server for one item. Commit.
1. In your show template link to the edit routes on the index page. Commit.
1. A PUT route that will update the correct element of your objects array, as specified by the index in the URL, to according to the data in `req.body`
    - this page should redirect back to the index route, once this is completed.  you could also redirect to that item's show page 
    - the form on the edit page should make a PUT request to this route
1. Switch roles (Driver << >> Navigator).
    
## Hungry for more? 
### (Choose 1-2 options if you finish early)

1. Style your application using static CSS files
1. Implement EJS partials
1. Implement an express.Router controller
1. Implement a 3rd party CSS Library (Bootstrap, Material UI, Bulma, Tailwind)
1. Create a route that displays consumed from a free, public API
1. Create routes /templates for a second (unrelated) model
