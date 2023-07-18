import throttle from "lodash.throttle";

const formElem = document.querySelector('.feedback-form')
const inputEmailElem = formElem.querySelector('input');
const inputMessageElem = formElem.querySelector('textarea');
//const submitBtn = formElem.querySelector('submit');

let formStorageData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

formElem.addEventListener('input', throttle(onFormIpnut, 500))
formElem.addEventListener('submit', onSubmitBtnClick)
savedUserFormInput();

function onFormIpnut(event) {
    formStorageData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formStorageData));
}
function onSubmitBtnClick(event) {
    event.preventDefault();
    
    if (event.target.email.value === '' || event.target.message.value === '') {
        return alert('Необхідно заповнити усі поля');
    }
    console.log(formStorageData)
    
    localStorage.removeItem("feedback-form-state");
    formElem.reset();
    formStorageData = {};
}

function savedUserFormInput() {
    const savedUsersInput = JSON.parse(localStorage.getItem("feedback-form-state"))
    if (savedUsersInput) {
        if (savedUsersInput.email) {
            inputEmailElem.value = savedUsersInput.email || '';
            formStorageData.email = savedUsersInput.email || '';
        } 
        if (savedUsersInput.message) {
            inputMessageElem.value = savedUsersInput.message || '';
            formStorageData.message = savedUsersInput.message || '';
        }
    }
}
