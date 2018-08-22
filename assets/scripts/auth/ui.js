'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('font-size', '50px')
  $('#message').css('text-align', 'center')
  $('#message').css('font-family', 'Shadows Into Light')
  $('#sign-up-modal').modal('hide')
  $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
  $('#sign-up')[0].reset()
//   console.log('signUpSuccess ran. Data is :', data)
  
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('text-align', 'center')
  $('#message').css('font-family', 'Shadows Into Light')
  $('#message').css('font-size', '50px')
  $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
  $('#sign-up-modal').modal('hide')
  $('#sign-up')[0].reset()
//   console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {

  $('#signout').removeClass('hidden')
  $('#changepassword').removeClass('hidden')
  $('#signin').addClass('hidden')
  $('#signup').addClass('hidden')
//   $('#create').removeClass('hidden')
//   $('#show').removeClass('hidden')
  $('#message').addClass('hidden')
//   $('#update').removeClass('hidden')
  $('#sign-in-modal').modal('hide')
  $('#sign-in')[0].reset()
//   console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('text-align', 'center')
  $('#message').css('font-family', 'Shadows Into Light')
  $('#message').css('font-size', '50px')
  $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
  $('#sign-in-modal').modal('hide')
  $('#sign-in')[0].reset()
//   console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('text-align', 'center')
  $('#message').css('font-family', 'Shadows Into Light')
  $('#message').css('font-size', '50px')
  $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
  $('#signup').removeClass('hidden')
  $('#signin').removeClass('hidden')
  $('#changepassword').addClass('hidden')
  $('#signout').addClass('hidden')
  $('#message').removeClass('hidden')
//   $('#create').addClass('hidden')
//   $('#show').addClass('hidden')
//   $('#update').addClass('hidden')
  $('#sign-out-modal').modal('hide')
  $("#message").delay(3200).fadeOut(300);

//   console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass('hidden')
  $('#message').css('text-align', 'center')
  $('#message').css('font-family', 'Shadows Into Light')
  $('#message').css('font-size', '50px')
  $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
//   console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
    $('#message').text('Changed password successfully')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    $('#message').css('text-align', 'center')
    $('#message').removeClass('hidden')
    $('#change-password-modal').modal('hide')
    $('#change-password')[0].reset()
//   console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
    $('#message').text('Error on change password')
    $('#message').removeClass('hidden')
    $('#message').css('font-family', 'Shadows Into Light')
    $('#message').css('font-size', '50px')
    $('#message').css('text-shadow', '-1px -1px 0 #000', '1px -1px 0 #000', '-1px 1px 0 #000', '1px 1px 0 #000')
    $('#message').css('text-align', 'center')
    $('#change-password-modal').modal('hide')

// console.error('changePasswordFailure ran. Error is :', error)
    $('#change-password')[0].reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
