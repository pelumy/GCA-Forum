// Get DOM Data
const Form = document.querySelector('.inForm');
const username = document.querySelector('#inUsername');
const password = document.querySelector('#inPassword');
const alertMsg = document.querySelector('.alert');
let userData = {};

// Event Handling
Form.addEventListener('submit', e => {
  e.preventDefault();

  // Validation
  if (
    username.value == '' ||
    password.value == ''
  ) {
    alertMsg.innerHTML = 'Please enter all Fields';
    alertMsg.classList.add('alert-danger');

    // Clear Message after 3 seconds
    setTimeout(() => {
      alertMsg.innerHTML = '';
      alertMsg.classList.remove('alert-danger');
    }, 3000);
    } else {
      alertMsg.classList.remove('alert-warning');
      alertMsg.innerHTML = 'Submitted Successfully';
      alertMsg.classList.add('alert-success');

      setTimeout(() => {
        alertMsg.innerHTML = '';
        alertMsg.classList.remove('alert-success');
      }, 3000);

      // Redirect to Another Page
      location.replace('./html.html');
    }
});
