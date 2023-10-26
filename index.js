const questions = document.querySelectorAll('.form__question-box');
const next_button = document.querySelector('#next');
const back_button = document.querySelector('#back');
const submit_button = document.querySelector('#submit');
const footer_text = document.querySelector('.footer__copyright');

let current_question = 0;
let number_of_questions = questions.length - 1;

// hide the back button at the beginning
back_button.classList.add('hidden');
submit_button.classList.add('hidden');

const show_current_question = () => {
  questions.forEach((question, index) => {
    if (index !== current_question) {
      question.classList.add('hidden');
    }

    if (index == current_question) {
      question.classList.remove('hidden');
    }
  });
};

// show the default current question
show_current_question();

next_button.addEventListener('click', () => {
  current_question += 1;

  show_current_question();

  if (current_question == number_of_questions) {
    next_button.classList.add('hidden');
    submit_button.classList.remove('hidden');
  }

  if (current_question > 0) {
    back_button.classList.remove('hidden');
  }
});

back_button.addEventListener('click', () => {
  current_question -= 1;

  show_current_question();

  if (current_question == 0) {
    back_button.classList.add('hidden');
  }

  if (current_question < questions) {
    submit_button.classList.add('hidden');
  }
});
