import throttle from "lodash.throttle";

const refs ={
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector(".feedback-form textarea")
}

refs.form.addEventListener('input', throttle(onInputChanges, 500 ));

const formData = {
    email: '',
    message: ''
}

function onInputChanges(e){
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
    e.preventDefault();
    e.currentTarget.reset()
    localStorage.removeItem('feedback-form-state')
    console.log(formData);
}

function onFormChange(){
    const saveMsg = localStorage.getItem('feedback-form-state');
    const parseMsg = JSON.parse(saveMsg)
    try {
      if (parseMsg) {
          refs.email.value =  parseMsg.email;
          refs.textarea.value =  parseMsg.message; 
      } 
    }
    catch (error) {
      console.log(error.name); 
      console.log(error.message);
    }  
}

onFormChange()
