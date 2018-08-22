'use strict'
const store = require ('../store.js')
const jokeTemplate = require ('../alljokes.handlebars')
const jokesapi = require ('./jokesapi.js')


const onCreateSuccess = function (data) {
  $('#message').text('Joke successfully created')
  $('#message').css('font-family', 'Shadows Into Light')
  $('#message').css('font-size', '50px')
  $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
  $('#message').css('text-align', 'center')
//   $('#message').removeClass('hidden')
  $('#create-joke-modal').modal('hide')
  $('#create-joke')[0].reset()

  store.joke = data.joke
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
    $('#message').text('Error on creating Joke')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    $('#create-game')[0].reset()
    console.error('onCreateFailure ran. Error is :', error)
  }

  const showJokesSucess = function (data) {
      console.log(data)
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
    // $('#message').removeClass('hidden')
    $('#show-game-modal').modal('hide')
   
  }

  const onDeleteJoke = (event) => {
    event.preventDefault()
    const jokeId = $(event.target).closest('ul').attr('data-id')
    console.log("delete: " + jokeId)
    jokesapi.deleteJoke(jokeId)
      .then(onDeleteJokeSucess)
  }
  
  const showJokesFailure = function (error) {
    $('#message').text('Error on getting jokes')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    console.error('onShowFailure ran. Error is :', error)
  }

  

  const failure = (error) => {
    console.error(error)
  }

  const updateJokeSuccess = function (data) {
    $('#message').text('Joke Has Been Updated!')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    $('#message').css('text-align', 'center')
    // $('#message').removeClass('hidden')
    $('#update-modal').modal('hide')
    $('#update-game')[0].reset()
    store.jokess = data.jokess
    console.log('onUpdateSuccess ran. Data is :', data)
   }

module.exports = {
    onCreateSuccess,
    onCreateFailure,
    showJokesSucess,
    onDeleteJoke,
    showJokesFailure,
    failure,
    updateJokeSuccess,
    onDeleteJokeSucess
}