const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Db connection
const { mongoose } = require('../database/database');

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users',require('./routes/user.routes'));
app.use('/api/tutors',require('./routes/tutors.routes'));

// Static Files
app.use(express.static(path.join(__dirname, '/client/public/')));;

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });
