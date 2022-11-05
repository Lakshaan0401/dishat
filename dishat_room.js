var firebaseConfig = {
      apiKey: "AIzaSyBsSDkQfiz1XRA0Wf9Quoj0HBWPcaz1boM",
      authDomain: "dishat-ed2c7.firebaseapp.com",
      databaseURL: "https://dishat-ed2c7-default-rtdb.firebaseio.com",
      projectId: "dishat-ed2c7",
      storageBucket: "dishat-ed2c7.appspot.com",
      messagingSenderId: "115515047999",
      appId: "1:115515047999:web:b7ac40a4a546374cfdb88a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

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