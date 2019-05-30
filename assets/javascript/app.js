var firebaseConfig = {
  apiKey: "AIzaSyBk5s_9naYWIzHwcJgRXUCCTd_8qlc2N8o",
  authDomain: "rock-paper-scissors-for-2.firebaseapp.com",
  databaseURL: "https://rock-paper-scissors-for-2.firebaseio.com",
  projectId: "rock-paper-scissors-for-2",
  storageBucket: "rock-paper-scissors-for-2.appspot.com",
  messagingSenderId: "724067654127",
  appId: "1:724067654127:web:2da4d242e2502f72"
}; //end config

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  database.ref().on("value", function(snapshot) {

    // If Firebase has a Player1 and Player2 stored, update our client-side variables
    if (snapshot.child("playerOne").exists() && snapshot.child("playerTwo").exists()) {
      // Set the variables for Player1 and 2
      playerOne = snapshot.val().playerOne;
      playerTwo = snapshot.val().playerTwo;;
    } //end if
  }); //end FB call