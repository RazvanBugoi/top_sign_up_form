// const form  = document.getElementsByTagName('form')[0];

// const password = document.getElementById('user_password');
// const passwordConfirmation = document.getElementById('user_password_confirmation');
// const passwordError = document.querySelector('#user_password + span.error');


// password.addEventListener('input', function (event) {
//   // Each time the user types something, we check if the
//   // form fields are valid.

//   if (password.validity.valid) {
//     // In case there is an error message visible, if the field
//     // is valid, we remove the error message.
//     passwordError.textContent = ''; // Reset the content of the message
//     passwordError.className = 'error'; // Reset the visual state of the message
//   } else {
//     // If there is still an error, show the correct error
//     showError();
//   }
// });

// form.addEventListener('submit', function (event) {
//   // if the password field is valid, we let the form submit

//   if(!password.validity.valid) {
//     // If it isn't, we display an appropriate error message
//     showError();
//     // Then we prevent the form from being sent by canceling the event
//     event.preventDefault();
//   }
// });

// function showError() {
//   if(password.validity.valueMissing) {
//     // If the field is empty,
//     // display the following error message.
//     passwordError.textContent = 'You need to enter a password.';
//   } else if(password.validity.typeMismatch) {
//     // If the field doesn't contain an password address,
//     // display the following error message.
//     passwordError.textContent = 'Password do not match.';
//   } else if(password.validity.tooShort) {
//     // If the data is too short,
//     // display the following error message.
//     passwordError.textContent = `password should be at least ${ password.minLength } characters; you entered ${ password.value.length }.`;
//   }

//   // Set the styling appropriately
//   passwordError.className = 'error active';
// }


(function() {

  const password = document.getElementById('user_password');
  const passwordConfirmation = document.getElementById('user_password_confirmation');
  const form = document.getElementById('form');
  
  const checkPasswordValidity = function() {
      if (password.value != passwordConfirmation.value) {
          password.setCustomValidity('*Passwords must match.');
          updateErrorMessage();
      } else {
          password.setCustomValidity('');
      }        
  };
  
  const updateErrorMessage = function() {
      form.getElementsByClassName('error')[0].innerHTML = password.validationMessage;
  };
  
  password.addEventListener('change', checkPasswordValidity, false);
  passwordConfirmation.addEventListener('change', checkPasswordValidity, false);
  
  form.addEventListener('submit', function(event) {
      if (form.classList) form.classList.add('submitted');
      checkPasswordValidity();
      if (!this.checkValidity()) {
          event.preventDefault();
          updateErrorMessage();
          password.focus();  
      }
  }, false);
}());
