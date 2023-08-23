const connection = require('../config/connection');
const { User, Thought } = require('../models');

// Checks for error
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

});
