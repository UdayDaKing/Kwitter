
 var firebaseConfig = {
      apiKey: "AIzaSyBJWx-t0VqSItnbSjYak8tkmXcQK9docu4",
      authDomain: "kwitter-fbb13.firebaseapp.com",
      databaseURL: "https://kwitter-fbb13-default-rtdb.firebaseio.com",
      projectId: "kwitter-fbb13",
      storageBucket: "kwitter-fbb13.appspot.com",
      messagingSenderId: "888938997541",
      appId: "1:888938997541:web:47ea73da0b60f33a961ccc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
