import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs ={
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector(".feedback-form textarea")
}

let formData = {
  email: '',
  message: ''
}

const savedMsg = localStorage.getItem(STORAGE_KEY);
const parsedMsg = JSON.parse(savedMsg);

refs.form.addEventListener('input', throttle(onInputChanges, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onInputChanges(e){
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};

function onFormSubmit(e){
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
 
  if (parsedMsg) {
    console.log(parsedMsg);
  }
  else { 
    console.log(formData);
    {formData.email ='', formData.message =''}
  }  
}

onFormChange()

function onFormChange(){
  if (parsedMsg) {
    refs.email.value = parsedMsg.email;
    refs.textarea.value = parsedMsg.message; 
  } 
}