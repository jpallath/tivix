# Tivix -- Jerry Pallath's Challenge Report

Greetings Tivix!  Thanks for getting me to this step of the job opportunity.  I had a lot of fun building a Front End Todo List / Blog Project for you guys.  I really pushed my understanding of Javascript and React/Redux a tad bit further.  

Forgive me on my MarkDown syntax.  I actually haven't worked with MarkDown for quite some time so my styling and use of it will be far from desired. 

## Project

So in the following sections, I'll explain my use of React/Redux throughout the project, the design, and the overall project.

### Front End / React-Redux

I needed axios, react-router-dom, redux, redux-thunk, and styled components to build out my project.  In this section I'll talk about the use of all of these except Styled Components which will be talked about in detail in the Design portion of the project.

Now I built out my actiontypes first, thus I can keep my action files and reducers consistent.  I tried to keep all api calls within the redux process of my project.  So, I built a services folder with an api file (that could have been broken up based on specific cases).  I built the basic fetchPost and addPost first.  Then I matched the action type to the reducer and wired it all up to the react front end to check if my debuggers were firing.  

After some time staring at the project requests, I figured I had to "thunk" my action functions since there were some situations where I had to track the size of the body of the element and match with the redux state.  I think I solved the action/dispatch situation to the minuimum viable possibility (in my two day limit!), my if statements are the obvious cases and not the edge possibilities (like shortest title and longest body, or longest title and longest body), none of my if statements were compound just so I can save a few more brain cells in converting them correctly into plain objects that my containers could manipulate.

#### Process

So when the user loads the frontpage (at "/"), React fires a loadUsers function that sets off the users get request api which loads the first 10 users in the fake json placeholder page.  A user can then click any of the users names and my new two containers-- the todolist and postlist containers fire their redux actions that fire their separate api requests to fill out the todos and posts of that specific user.  

With the initial get request for the todos and posts, I make a redux action to figure out the longest and shortest title for the posts and todos and the longest and shortest body for the posts.  These are all kept in the Redux state and pulled whenever a new post or todo is made.

### Design
I used Styled Components for all of my styling in this project.  I know how to use SASS and CSS but I prefer styled components for the Javascript-yness of it.  I made conditionals within the styled components sheet to check if a todo is completed, if it is-- then the props would be rendered differently-- all through one line instead of separate entities in SASS/CSS.

I worked a lot more on the actual logic of react and redux over the styling, which I assume you can see.  I only built out the styling based on normal use of these sort of services.  I maintained some sort of responsive design, but this can also fall apart at edge cases. I played around with the window between my 22 inch monitor and my macbook screen (haha)... it looks fine so far, I can fix any issues quickly.

### Overall
This project was a doozy at times.  My most frustrated part was trying to set up the props for when an entry was deemed shortest or longest.  I finally figured I would just wire it all react with a filter array command-- but I could see if there was a more clever way of solving this.

I did have fun though.  I got to really build out a Scaled project in React/Redux. I think I always struggled in thinking about potential projects and tend to seek others' ideas to build out new projects (so yes this will be in my portfolio!)
