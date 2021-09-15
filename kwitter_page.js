//YOUR FIREBASE LINKS

const app = initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyAkJoatVCFmCdPhXpS5eUwiM2Ev3ZhR0G0",
  authDomain: "kwitter-b149a.firebaseapp.com",
  databaseURL: "https://kwitter-b149a-default-rtdb.firebaseio.com",
  projectId: "kwitter-b149a",
  storageBucket: "kwitter-b149a.appspot.com",
  messagingSenderId: "611980912134",
  appId: "1:611980912134:web:d446e6eca16142e107c587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
  msg= document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="";
}

