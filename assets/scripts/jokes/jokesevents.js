'use strict'

const jokesapi = require('./jokesapi')
const jokesui = require('./jokesui')
const getFormFields = require('../../../lib/get-form-fields')


const onCreateJoke = (event) => {
    event.preventDefault()
    const data = getFormFields(event.target)
    jokesapi.createJoke(data)
      .then(jokesui.onCreateSuccess)
      .catch(jokesui.onCreateFailure)
   }

   const onShowJokes = function (event) {
    event.preventDefault()
    // console.log('onShowJokes ran!')
    jokesapi.showJokes()
      .then(jokesui.showJokesSucess)
      .catch(jokesui.showJokesFailure)
      // bgui.showJokesSucess()
    }
    
    const onUpdateJoke = (event) => {
        event.preventDefault()
        const data = getFormFields(event.target)
        console.log(getFormFields(event.target))
        jokesapi.updateJokes(data)
          .then(jokesui.updateJokesSuccess)
          .catch(jokesui.failure)
      }

     

   const addHandlers = () => {
    $('#create-joke').on('submit', onCreateJoke)
    $('#show').on('click', onShowJokes)
    // $('.delete').on('click', onDeleteGame)
    $('#update-Joke').on('submit', onUpdateJoke)
   }

   module.exports = {
       addHandlers
   }