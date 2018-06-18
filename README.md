Live project can be found at https://tivix-jerry.herokuapp.com/

Below is some of the documentation in what I built and how to use this project.

# Tivix Front End Challenge

## Table of Contents

*   [Installation](#installation)
*   [Project](#project)
*   [Redux](#redux)
*   [React](#react)
*   [Design](#design)

## Installation

To Install this project in your local environment, please clone this directory. 'NPM Install' or 'Yarn Install' the dependencies and then once everything is ready please 'NPM Start' the project. By default, this project should be found on localhost:3000.

## Project

I've broken up the following sections for the project into Redux (to focus on the actions and reducers of the app), React (the user's interactivity with the app), and the design (how the final front end looks like).

## Redux

State Management is done through Redux for this app. I built out the store and actiontypes first. Then once I figured out my base actiontypes I built out the actions and the reducers for the app. Initially I built out three reducers and three actions for Users, Posts, and Todos.

The Load Users and Get Users actions fire immediately when localhost is loaded. Once a user selects one of the available users, they navigate to that user's dashboard. The Fetch Posts and Fetch todos are fired at this view and added to the state.

Along with the fetching all of the todos and posts of the user, the action also analyzes all of the current todos and posts and sets the longest and shortest titles and bodies into the state to check later.

I made postPost and postTodo actions later on which would take the associated object and run it through the state to check if it is the biggest/smallest title or body before being posted into the JSONServer and the current state.

Other actions I had to incorporate include switching the todo status (between done and not done) and deleting a todo.

The reducers were all combined and shipped to the store which was then accessed at the App level of my react app.

## React

My state was accessed by React through the Connect function. I imported the getUsers, FetchPosts, and FetchTodo actions into my containers. Which would fire with specific interactions in that container.

The containers would load FetchUsers, FetchPosts, and FetchTodos when their associated containers were accessed within the component did mount phase.

The postsList container would also fire the addPost action whenever the user posts a new message.

The todosList container also had an addTodo action, but also a changeStatus, and deleteTodo function. These would all interact with the Redux side of my app to manage the state and fire back into React via Connect --> mapStateToProps.

Also there is a React Specific function that uses the present state to render the shortest or longest function. I fired an Array Filter to figure out what posts fulfill that state. I chose Filter over Find because there might be edge cases where two posts were the same length-- or identical.

Also, to close this portion along with the redux section-- i believe there were multiple edge cases I wasn't able to check for while I worked on this. I didn't build an action to find the shortest title with longest body function or anything related to that sort of behavior. If I had more time, I'd figure out a better solution to those situations.

### Design

I used Styled Components for all of my styling in this project. I know how to use SASS and CSS but I prefer styled components for the Javascript-yness of it. I made conditionals within the styled components sheet to check if a todo is completed, if it is-- then the props would be rendered differently-- all through one line instead of separate entities in SASS/CSS.

I worked a lot more on the actual logic of react and redux over the styling, which I assume you can see. I only built out the styling based on normal use of these sort of services. I maintained some sort of responsive design, but this can also fall apart at edge cases. I played around with the window between my 22 inch monitor and my macbook screen (haha)... it looks fine so far, I can fix any issues quickly.

### Overall

This project was a doozy at times. My most frustrated part was trying to set up the props for when an entry was deemed shortest or longest. I finally figured I would just wire it all react with a filter array command-- but I could see if there was a more clever way of solving this.

I did have fun though. I got to really build out a Scaled project in React/Redux. I think I always struggled in thinking about potential projects and tend to seek others' ideas to build out new projects (so yes this will be in my portfolio!)
