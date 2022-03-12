const password = document.getElementById('user_password');
const passwordConfirmation = document.getElementById('user_password_confirmation');
const form = document.getElementById('form');

(function() {
  const checkPasswordValidity = function() {
      if (password.value != passwordConfirmation.value) {
          password.setCustomValidity('*Passwords must match.');
          password.style.outline = "#f22 solid 3px";
          passwordConfirmation.style.outline = "#f22 solid 3px";
          updateErrorMessage();
      } else {
          password.setCustomValidity('');
          password.style.outline = "";
          passwordConfirmation.style.outline = "";
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
