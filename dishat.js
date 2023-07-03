function login(){
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    localStorage.setItem("user_name",user_name);
    localStorage.setItem("password",password);
    let showPasswordBtn = document.querySelector('.show-password');
let passwordInp = document.querySelector('.password-input');

showPasswordBtn.addEventListener('click', () => {

    showPasswordBtn.classList.toggle('fa-eye'); 
    showPasswordBtn.classList.toggle('fa-eye-slash');
    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';

})
    window.location = "dishat_room.html";
}

function signup(){
    window.location = "signup.html";
}
