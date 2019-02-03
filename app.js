!function() {

// Requirements
const express = require('express');
const projects = require('./data.json');

// Declaration of app with the Express Function.
const app = express();

// Set up the static path for the staticly served files from the Public folder.
app.use('/static', express.static('public'));

// Set view engine to use PUG.
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res, next) => {
  res.render('index', projects);
});

// About Route
app.get('/about', (req, res, next) => {
  res.render('about');
});

// Projects Route. This route uses a dynamic id to render the correct project from
// the data.json file on the project.pug template.
app.get('/projects/:id', (req, res, next) => {
  let condition;
    for (let i = 0; i < projects.projects.length; i += 1) {
      if (req.params.id === i.toString()) {
        condition = true;
        break
      } else {
        condition = false;
      }
    }
  if (condition) {
    const projectData = projects.projects[req.params.id];
    res.render('project', projectData);
  } else {
    const err = new Error('Not Found');
    err.status = 404;
    return next(err);
  }
});

// If no route is found, this route will create a 404 Error to send to the error
// handler.
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error Handler. This will pass the error to the error.pug template which will render
// a message with the error message, status, and stack. If the error is a 404 error,
// a more friendly message will appear on the template and in the console.
app.use((err, req, res, next) => {
  res.locals.error = err;
  if (err.status === 404) {
    console.log(`There was an error when attempting to reach this URL.\nError Code: ${err.status}\n${err.message}`);
  }
  res.render('error');
});

const port = process.env.PORT || 3000;

// Starts the server on port 3000 and logs a message to the console.
app.listen(port, () => {
  console.log('This app is listening on port 3000.');
});

}();
