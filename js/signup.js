
var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');


var logArr = [];
if (localStorage.getItem('user') != null) {
    logArr = JSON.parse(localStorage.getItem('user'))
}

function signUp() {
    var user = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    }
    
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Please Enter All Input</span>'
    } 

    else if (regxValid() == false ) {
        document.getElementById('exist').innerHTML = "This mail is not valid"
    } else if (checkEmail() == false) {
        document.getElementById('exist').innerHTML = "This mail is exist"
    }  
    else {
        logArr.push(user)
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        clearForm()
    }
    localStorage.setItem('user', JSON.stringify(logArr))
}
function clearForm(){
    
        signupName.value=''
        signupEmail.value=''
        signupPassword.value=''
    
}


function checkEmail() {
    for (var i = 0; i < logArr.length; i++)
        if (logArr[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
}

function regxValid(){
    var pnamRegex =/^[a-zA-z]{1,}(@)(yahoo|gmail|outlook)(.)(c)(o)(m)$/;
    var emailValue= signupEmail.value;
    console.log(emailValue)
    if(pnamRegex.test(emailValue) == true){
    return true;
    }else{
    return false
    }
}