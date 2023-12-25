// var userNameInput = document.getElementById('userName');
// var userMailInput = document.getElementById('userMail');
// var userPasswordInput = document.getElementById('userPassword');
// var showMassagee = document.getElementById('showMassage');
// var users = [];

// function validEmail() {
//     for (var i = 0; i < users.length; i++) {
//         if (users[i].email == userMailInput.value) {
// console.log("rerorrrrrrrrr")
//             return false;

//         }
//         else {
//             return true
//         }

//     }
// }
// function empty() {
//     if (userNameInput.value == '' || userMailInput.value == '' || userPasswordInput == '') {
//         return false;


//     }
//     else {
//         return true;

//     }
// }


// function addUser() {
//     if (empty() == false) {
//         showMassagee.classList.remove('d-none');
//         showMassagee.classList.add('text-danger');

//         return false;

//     }

//     var user = {
//         userName: userNameInput.value,
//         userEmail: userMailInput.value,
//         userPass: userPasswordInput.value
//     };
//     if (users.length == 0) {
//         users.push(user)
//         localStorage.setItem('users', JSON.stringify(users))
//         document.getElementById('showMassage').innerHTML = '<span class="text-success m-3">Success</span>'
//         return true
//     }


//     // users.push(user);
//     // localStorage.setItem("usersStore",JSON.stringify(users));
//     // console.log(localStorage.getItem("usersStore"));
//     if (validEmail() == false) {
//         console.log("errror")
//         showMassagee.innerHTML = "duplicated mail"
//         showMassagee.classList.remove('d-none');
//         showMassagee.classList.add('text-danger');
//         console.log("duplicated mail")

//     }
//     else {

//         users.push(user);
//         localStorage.setItem("usersStore", JSON.stringify(users));
//         showMassagee.innerHTML = "success";
//         showMassagee.classList.remove('d-none');
//         showMassagee.classList.add('text-success');



//     }




// }





// document.getElementById('signUp').addEventListener('click', function () {
//     addUser();
// })



































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