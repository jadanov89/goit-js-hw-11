import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  mailInput: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const formData = {};
const LOCALSTORAGE_KEY = 'feedback-form-state';
savedFormData();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  formData.email = refs.mailInput.value;
  formData.message = refs.mailInput.value;
  console.log(formData);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  evt.currentTarget.reset();
}

function savedFormData() {
  let storageFormData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (storageFormData) {
    storageFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    Object.entries(storageFormData).forEach(([name, value]) => {
      formData[name] = value;
      refs.form.elements[name].value = value;
    });
  }
}