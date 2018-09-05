/********************
    images
********************/

// Add a profile pic of yourself that you would feel comfortable sharing with
// potential employers. It should present well at 550px by 350px.
// Take screenshots of your projects. You will need at least two screenshots for
// each project.
// A main shot for the landing page which should be a square image that can
// display well at 550px by 550px.
// Between one and three additional images that can be any dimensions you want,
// but work well in this project as landscape images that present well at 1200px
// by 550px.

/********************
  Set up Server Routes & Middleware
********************/

// Add variables to require the necessary dependencies. You'll need to require:
// Express
// Your data.json file
// Optionally - the path module which can be used when setting the absolute path
// in the express.static function.

// Set up your middleware:
// set your “view engine” to “pug”
// use a static route and the express.static method to serve the static files
// located in the public folder

// Set your routes. You'll need:
// An "index" route (/) to render the "Home" page with the locals set to
// data.projects
// An "about" route (/about) to render the "About" page
// Dynamic "project" routes (/project or /projects) based on the id of the
// project that render a customized version of the Pug project template to show
// off each project. Which means adding data, or "locals", as an object that
// contains data to be passed to the Pug template.
// Finally, start your server. Your app should listen on port 3000, and log a
// string to the console that says which port the app is listening to.

/*********************
    Handle Errors
*********************/

// If a user navigates to a non-existent route, or if a request for a resource
// fails for whatever reason, your app should handle the error in a user
// friendly way.
// Add an error handler to app.js that sets the error message to a user friendly
// message, and sets the status code.
// Log out a user friendly message to the console when the app is pointed at a
// URL that doesn't exist as a route in the app, such as /error/error.
// Refer to the video on Error handling Middleware, which is linked in the
// project resources list.

/*********************
    Complete Pug files
*********************/

// Go through each of the four Pug templates to inject your data. The Pug files
// contain comments that detail each change you will need to make. You can and
// should delete these comments when you are finished with this step. But you
// should wait to do so until everything is working as it should, in case you
// need to refer to these notes during development.
// Leave the example HTML files in your project so your reviewer can reference
// them.

/**********************
    Layout, CSS & Styles
**********************/

// The layout of the finished project should match the provided mockups.
// To really make this project your own, you should customize the CSS following
// the suggestions in the Extra Credit section at the bottom of this page.

/***********************
    Other
***********************/

// Add good code comments
// Check for cross-browser consistency

/************************
    Extra Credit
************************/

// Customize the package.json file
// Set up your package.json file so that running npm start will run the app.

// Use error handling middleware to render a Pug template
// Create a new Pug template in the views folder and name it error.pug. This Pug
// file should extend the layout, be set to block content, and display the
// error.message, error.status, and error.stack properties.

// When the request URL is for a non-existent route, the error.pug template
// should be displayed in the browser along with the following properties:
// error.message
// error.status
// error.stack

// Customize the style
// Change or add at least three of the following to make this project your own:
// color
// background color
// font
// box or text shadows
// transitions or animations
// add a logo

// Your can either add your changes to the end of the CSS file or add your own
// and link it in the head of the layout.pug file, below the other CSS links.
// Document your style changes in your README.md file and the project submission
// notes.
// Do not alter the layout or position of the important elements on the page.
