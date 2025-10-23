var firebaseConfig = {
    apiKey: "AIzaSyDjsvxH9lHt2rjofwOcApdxuQLdZju8R1M",
    authDomain: "project-26bad.firebaseapp.com",
    databaseURL: "https://project-26bad-default-rtdb.firebaseio.com",
    projectId: "project-26bad",
    storageBucket: "project-26bad.appspot.com",
    messagingSenderId: "960032715206",
    appId: "1:960032715206:web:11c74d18bee97902ce42c7"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){

    msg = document.getElementById("msg").value;
    firebase.database().ref("room_name").push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";

}