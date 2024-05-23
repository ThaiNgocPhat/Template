const email = document.getElementById("email");
const password = document.getElementById("password");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
//check lỗi email
var checkErrorEmail = false;
function checkEmail() {
    if(email.value === ""){
        errorEmail.innerHTML = "Email cannot be empty";
        errorEmail.style.color = "red";
        errorEmail.style.display = "flex";
        checkErrorEmail = false;
    } else {
        errorEmail.innerHTML = "";
        checkEmail = true;
    }
}
//check lỗi password
var checkErrorPassword = false;
function checkPassword() {
    if(password.value === ""){
        errorPassword.innerHTML = "Password cannot be empty";
        errorPassword.style.color = "red";
        errorPassword.style.display = "flex";
        checkPassword = false;
    } else {
        errorPassword.innerHTML = "";
        checkErrorPassword = true;
    }
}
//submit form
const users =JSON.parse( localStorage.getItem("users"));
function handleSubmit(event) {
    event.preventDefault();
    let isCheckExistEmail = false;
    let isCheckExistPassword = false;
    let indexUser = users.findIndex(user => user.email === email.value);
    if(indexUser !== -1){
        isCheckExistEmail = true;
        if(users[indexUser].password === password.value){
            isCheckExistPassword = true;
        }
    }
    if(checkErrorEmail == true && checkErrorPassword == true){
        if(isCheckExistEmail == true){
            if(isCheckExistPassword == false){
                alert("Password is incorrect");
            }else{
                window.location.href = "../Home/Home.html";
                event.target.reset();
            }
        }else{
            alert("Email is not exist");
        }
    }else{
        alert("Please enter email and password");
    }
}