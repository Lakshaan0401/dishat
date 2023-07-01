function signup(){
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    localStorage.setItem("email",email);
    localStorage.setItem("user_name",user_name);
    localStorage.setItem("password",password);
    window.location = "dishat_room.html";
}

function login(){
    window.location = "index.html";
}