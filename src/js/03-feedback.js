import throttle from 'lodash.throttle';

//help
const log = console.log;

//DOM
const form = document.querySelector('.feedback-form');
//Destrukturyzacja obiektu
const {
  elements: { email, message },
} = form;

//callback-functions
const writingFeed = () => {

  let feedbackForm = {
    email: `${email.value}`,
    message: `${message.value}`,
  };
  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
  } catch (error) {
    log('Shit went south with writing to local storage:', error.message);
  }
};

const formStorageCheck = () => {
  if (localStorage.getItem('feedback-form-state') === null) {
    return;
  } else {
    try {
      const storedFeedback = localStorage.getItem('feedback-form-state');
      storedFeedback === null
        ? undefined
        : JSON.parse(storedFeedback);
      email.value = JSON.parse(storedFeedback).email;
      message.value = JSON.parse(storedFeedback).message;
    } catch (error) {
      log('Shit went south with form check:', error.message);
    }
  }
};

formStorageCheck();

//EVENT
form.addEventListener('input', throttle(writingFeed, 500));
form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  let feedbackForm = {
    email: `${email.value}`,
    message: `${message.value}`,
  };
  log(feedbackForm);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
