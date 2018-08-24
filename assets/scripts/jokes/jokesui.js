'use strict'
const store = require ('../store.js')
const jokeTemplate = require ('../templates/alljokes.handlebars')
const jokesapi = require ('./jokesapi.js')


const onCreateSuccess = function (data) {
  $('#message').text('Joke successfully created')
  $('#message').css('font-family', 'Shadows Into Light')
  $('#message').css('font-size', '50px')
  $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
  $('#message').css('text-align', 'center')
  $('#message').removeClass('hidden')
  $('#create-joke-modal').modal('hide')
  $('#create-joke')[0].reset()

  store.joke = data.joke
//   console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
    $('#message').text('Error on creating Joke')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    $('#create-game')[0].reset()
    // console.error('onCreateFailure ran. Error is :', error)
  }

  const showJokesSucess = function (data) {
    //   console.log(data)
      let htmltemplate = jokeTemplate({jokes: data.jokes})
      $('#show-jokes-list').html(htmltemplate)
      $('.delete').on('click', onDeleteJoke)
    //   $('#message').addClass('hidden')
  }

  const onDeleteJokeSucess = function () {
    $('#message').html('Joke has been Deleted')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    $('#message').css('text-align', 'center')
    $('#message').removeClass('hidden')
    $('#show-joke-modal').modal('hide')
   
  }

  const onDeleteFailure = function () {
    $('#message').text('This is NOT your joke!  Stop that!')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    $('#message').css('text-align', 'center')
    $('#message').removeClass('hidden') 
    $('#show-joke-modal').modal('hide')
  }

  const onDeleteJoke = (event) => {
    event.preventDefault()
    const jokeId = $(event.target).closest('ul').attr('data-id')
    // console.log("delete: " + jokeId)
    jokesapi.deleteJoke(jokeId)
      .then(onDeleteJokeSucess)
      .catch(onDeleteFailure)
  }
  
  const showJokesFailure = function (error) {
    $('#message').text('Error on getting jokes')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    // console.error('onShowFailure ran. Error is :', error)
  }

  

  const failure = (error) => {
    $('#message').text('This is NOT your joke!')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    $('#update-modal').modal('hide')
    $('#message').removeClass('hidden')
    $('#update-joke')[0].reset()
    // console.error(error)
  }

  const updateJokeSuccess = function (data) {
    $('#message').text('Joke Has Been Updated!')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    $('#message').css('text-align', 'center')
    $('#message').removeClass('hidden')
    $('#update-modal').modal('hide')
    $('#update-joke')[0].reset()
    store.jokess = data.jokess
    // console.log('onUpdateSuccess ran. Data is :', data)
   }

module.exports = {
    onCreateSuccess,
    onCreateFailure,
    showJokesSucess,
    onDeleteJoke,
    onDeleteFailure,
    showJokesFailure,
    failure,
    updateJokeSuccess,
    onDeleteJokeSucess
}