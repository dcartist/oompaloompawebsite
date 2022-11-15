console.log("Hello!!")
let SignupInput = document.getElementById('SignupInput').value;
let Modal = document.getElementById('Modal').classList;
let loginButton = document.getElementById('login');
let signUpButton = document.getElementById('signUp');
let closeModal = document.getElementById('close');
let Message = document.getElementById('message')
let modalMessage =document.getElementById('modalMessage')
let modalLogin =document.getElementById('modalLogin')
let modalInput =document.getElementById('modalInput')
let emailValidate = /^[^@]+@\w+(\.\w+)+\w$/

function emailSignUp(e){
    console.log(SignupInput)
}
function validateLogin(info){
let Input = document.getElementById(info).value;
if (info == 'SignupInput'){
    Input.match(emailValidate)? Message.innerText = "Congrats Your email Works" :  Message.innerText = "I'm sorry your email is invalid"
} else {
    Input.match(emailValidate)? modalMessage.innerText = "Congrats Your email Works" :  modalMessage.innerText = "I'm sorry your email is invalid"
}
}

signUpButton.onclick = function(){
    console.log("click")
    validateLogin('SignupInput')
}
loginButton.onclick = function() {
    Modal.add("show")
    Modal.remove("hide")
  }

closeModal.onclick = function(){
    Modal.add("hide")
    Modal.remove("show")
  }
modalLogin.onclick = function(){
     validateLogin('modalInput')
}