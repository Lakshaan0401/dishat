var firebaseConfig = {
      apiKey: "AIzaSyAC17VVkgaVyU4lmBSNaMlpD55Nr3UBb2c",
      authDomain: "dishat-6745c.firebaseapp.com",
      databaseURL: "https://dishat-6745c-default-rtdb.firebaseio.com",
      projectId: "dishat-6745c",
      storageBucket: "dishat-6745c.appspot.com",
      messagingSenderId: "410690938193",
      appId: "1:410690938193:web:d995003a7ea7ee4b33df70",
      measurementId: "G-9J741HFRZ7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
password = localStorage.getItem("password");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

if (user_name == "Lakshaan" && password == "lucky0401"){
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"(Owner) !"
}

if (user_name == "Ishrath" && password == "sassygirl@23"){
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"(Admin) !"
}


function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
            });
      localStorage.setItem("room_name",room_name);
      window.location = "dishat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name-"+Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
     //End code
     });});}
getData();

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location = "dishat_page.html";
}

function logout()
{
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html";
}
