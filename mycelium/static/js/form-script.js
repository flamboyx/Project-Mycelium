const signInBtn = document.querySelector('#signin_btn');
const signUpBtn = document.querySelector('#signup_btn');
const formBox = document.querySelector('.form_box');
const body = document.body;

signUpBtn.addEventListener('click', function () {
    formBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click', function () {
    formBox.classList.remove('active');
    body.classList.remove('active');
});

document.getElementById('form_signin').addEventListener("submit", checkSignInForm);
document.getElementById('form_signup').addEventListener("submit", checkSignUpForm);

/*function checkSignInForm(event) {
    event.preventDefault();
    var el = document.getElementById('form_signin');

    var name = el.nickname.value;
    var pass = el.password.value;

    var fail = "";

    if(name == "" || pass == "")
        fail = "Заполните все поля";
    // сравнение с паролем из БД
    
    if(fail != "")
        document.getElementById('signin_error').innerHTML = fail;
    else {
        // переходим куда надо
    }
}*/
/*
function checkSignUpForm(event) {
    event.preventDefault();
    var el = document.getElementById('form_signup');

    var name = el.nickname.value;
    var pass = el.password.value;
    var repass = el.repass.value;

    var fail = "";

    if(name == "" || pass == "")
        fail = "Заполните все поля";
    else if(pass != repass)
        fail = "Пароли должны совпадать"
    else if(pass.length < 8)
        fail = "Пароль должен состоять хотя бы из 8 символов"
    
    if(fail != "")
        document.getElementById('signup_error').innerHTML = fail;
    else {
        // заносим данные в БД
        // переходим куда надо
    }
}
*/