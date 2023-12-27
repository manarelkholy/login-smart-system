var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var link = document.querySelector('#welcome');
var demo = document.getElementById("demo")
var welcomeUserLog = document.getElementById("welcomeUserLog")



function checkAll() {
    var logInCheck = {
        passwordLog: signinPassword.value,
        emailLog: signinEmail.value,
    }

    for (var i = 0; i < logArr.length; i++) {
        if (logArr[i].password.toLowerCase() == logInCheck.passwordLog.toLowerCase() && logArr[i].email.toLowerCase() == logInCheck.emailLog.toLowerCase()) {
            return true
        }
    }
}



function logIn() {
    if (isEmpty() == true) {
        document.getElementById('incorrect').innerHTML = "All inputs is required"
    } else if (incorrectInput() == true) {
        document.getElementById('incorrect').innerHTML = "incorrect email or password"
    } else if (checkAll() == true) {
        link.href = 'home.html';
        
    
        
    } else {
        document.getElementById('incorrect').innerHTML = "incorrect"
    }

}




function isEmpty() {
    if (signinEmail.value == ('') || signinPassword.value == (''))
        return true
}

function incorrectInput() {
    for (var i = 0; i < logArr.length; i++) {
        if (logArr[i].email.toLowerCase() != signinEmail.value.toLowerCase() && logArr[i].password.toLowerCase() != signinPassword.value.toLowerCase())
            return true
    }
}
function logout() {
    localStorage.removeItem('sessionUsername')
}