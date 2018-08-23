'use strict'

const config = require('../config')
const store = require('../store')

const createJoke = function (data) {
    return $.ajax({
      url: config.apiUrl + '/jokes/',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
   
    })
   }

   const showJokes = function () {
    return $.ajax({
      url: config.apiUrl + '/jokes/',
      method: 'GET',
      headers: {
        // Authorization: 'Token token=' + store.user.token
      }
    })
  }

  const deleteJoke = (jokeId) => {
    return $.ajax({
      url: config.apiUrl + '/jokes/' + jokeId,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    })
  }

  const updateJoke = function (data) { 
    return $.ajax({
      url: config.apiUrl + '/jokes/' + data.joke.id, 
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data
    })
  }

   module.exports = {
       createJoke,
       showJokes,
       deleteJoke,
       updateJoke
   }