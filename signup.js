function signup() {
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("password", password);
    window.location = "dishat_room.html";
}

let showPasswordBtn = document.querySelector('.show-password');
let passwordInp = document.querySelector('.password-input');

showPasswordBtn.addEventListener('click', () => {
    showPasswordBtn.classList.toggle('fa-eye');
    showPasswordBtn.classList.toggle('fa-eye-slash');
    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';

})

let passwordChecklist = document.querySelectorAll('.list-item');

let validationRegex = [
    { regex: /.{8,}/ },
    { regex: /[0-9]/ },
    { regex: /[a-z]/ },
    { regex: /[A-Z]/ },
    { regex: /[^A-Za-z0-9]/ }
]

passwordInp.addEventListener('keyup', () => {
    validationRegex.forEach((item, i) => {

        let isValid = item.regex.test(passwordInp.value);

        if (isValid) {
            passwordChecklist[i].classList.add('checked');
        } else {
            passwordChecklist[i].classList.remove('checked');
        }

    })
})

function login() {
    window.location = "index.html";
}

