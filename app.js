'use strict'

const form = document.forms['order_form'];
const userPhone = form.user_phone;
const submitBtn = form.action;

//const numberPhone = document



async function getDataUser() {
    const response = await fetch('./src/data/userinformation.json')
    const data = await response.json();
    const searchUser =  data.find(el => userPhone.value === el.phone);
    if (searchUser) {
        alert ("Добро пожаловать")
    }
    else {
        (alert("Вам нужно зарегистрироваться"))
    } 

}

//getDataUser()

form.addEventListener('submit', (el) => {
    el.preventDefault()
    getDataUser(form)
    
})