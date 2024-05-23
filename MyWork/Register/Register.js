const username = document.getElementById("username");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const errorUsername = document.getElementById("errorUsername");
const errorPassword = document.getElementById("errorPassword");
const errorRepassword = document.getElementById("errorRepassword");
const errorEmail = document.getElementById("errorEmail");
const errorPhone = document.getElementById("errorPhone");
//check lỗi username
var checkName = false;

function handleInput() {
    if (username.value === "") {
        errorUsername.innerHTML = "Username can not empty"
        errorUsername.style.color = "red"
        checkName = false;
    } else if (username.value.length < 8) {
        errorUsername.innerHTML = "Username must have at least 8 characters"
        errorUsername.style.color = "red"
        checkName = false;
    } else if (username.value === username.value.toLowerCase()) {
        errorUsername.innerHTML = "Username must have at least one uppercase character"
        errorUsername.style.color = "red"
        checkName = false;
    } else {
        errorUsername.innerHTML = ""
        checkName = true;
    }
}
//check lỗi password
var checkPass = false;

function handleInputPassword() {
    if (password.value === "") {
        errorPassword.innerHTML = "Password can not empty"
        errorPassword.style.color = "red"
        checkPass = false;
    } else if (password.value.length < 8) {
        errorPassword.innerHTML = "Password must have at least 8 characters"
        errorPassword.style.color = "red"
        checkPass = false;
    } else if (password.value === password.value.toLowerCase()) {
        errorPassword.innerHTML = "Password must have at least one uppercase character"
        errorPassword.style.color = "red"
        checkPass = false;
    } else {
        errorPassword.innerHTML = " "
        checkPass = true;
    }
}
//check lỗi repassword
var checkRepass = false;

function handleInputRepassword() {
    if (repassword.value === "") {
        errorRepassword.innerHTML = "Repassword can not empty"
        errorRepassword.style.color = "red"
        checkRepass = false;
    } else if (repassword.value !== password.value) {
        errorRepassword.innerHTML = "Repassword must match password"
        errorRepassword.style.color = "red"
        checkRepass = false;
    } else {
        errorRepassword.innerHTML = " "
        checkRepass = true;
    }
}
//check lỗi email
var checkEmail = false;

function handleInputEmail() {
    if (email.value === "") {
        errorEmail.innerHTML = "Email can not empty"
        errorEmail.style.color = "red"
        checkEmail = false;
    } else if (email.value.indexOf("@") === -1) {
        errorEmail.innerHTML = "Email must have @"
        errorEmail.style.color = "red"
        checkEmail = false;
    } else {
        errorEmail.innerHTML = " "
        checkEmail = true;
    }
}
//check lỗi phone
var checkPhone = false;

function handleInputPhone() {
    if (phone.value === "") {
        errorPhone.innerHTML = "Phone can not empty"
        errorPhone.style.color = "red"
        checkPhone = false;
    } else if (phone.value.length < 10 || phone.value.length > 11) {
        errorPhone.innerHTML = "Phone must have 10 or 11 numbers"
        errorPhone.style.color = "red"
        checkPhone = false;
    } else if (isNaN(phone.value)) {
        errorPhone.innerHTML = "Phone must be a number"
        errorPhone.style.color = "red"
        checkPhone = false;
    } else {
        errorPhone.innerHTML = " "
        checkPhone = true;
    }
}
const users = []

function handleSubmit(event) {
    event.preventDefault();
    if (checkName && checkPass && checkRepass && checkEmail && checkPhone) {
        const newUser = {
            username: username.value,
            password: password.value,
            email: email.value,
            phone: phone.value
        }
        users.push(newUser)
        console.log(newUser, "New User")
        console.log(users, "All Users")
    } else {
        event.preventDefault();
        alert("Please fill in the form correctly")
    }
}