var firebaseConfig = {
    apiKey: "...",
    authDomain: "project-26bad.firebaseapp.com",
    databaseURL: "https://project-26bad-default-rtdb.firebaseio.com",
    projectId: "project-26bad",
    storageBucket: "project-26bad.appspot.com",
    messagingSenderId: "960032715206",
    appId: "1:960032715206:web:11c74d18bee97902ce42c7"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){

    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Rooms"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "buzz_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log(room_name);
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)'> # " + room_name + "</div><hr>";
      document.getElementById("output").innerHTML = row;
});});}
getData();

function redirectToRoomName(){

  console.log(room_name);
  localStorage.setItem("room_name",room_name);
  window.location = "buzz_page.html";

}

function logOut(){

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "login.html";

}
