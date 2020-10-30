'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const {
  handleAllClients,
  handleGetClientById,
  handleCreateNewClient,
  handleDeleteClient,
} = require ('./handlers/clientHandlers');

const {
  handleViewWord,
  handleRandomWord,
  handleGuessedLetter,
} = require ('./handlers/hangmanHandlers')

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  //---Exercise 2 endpoints---
  //Access a list of all clients
  .get('/clients', handleAllClients)

  //Access one client based on ID
  .get('/clients/:id', handleGetClientById)

  //Add new client
  .post('/new-clients', handleCreateNewClient)

  //Delete current client
  .delete('/delete-clients/:id', handleDeleteClient)

  //---Exercise 3 endpoints---
  //Returning the word as an object
  .get('/hangman/word/:id', handleViewWord)

  //Random word
  .get('/hangman/word', handleRandomWord)

  //Guessed letter
  .get('/hangman/guess/:id/:letter', handleGuessedLetter)

  .listen(8000, () => console.log(`Listening on port 8000`));