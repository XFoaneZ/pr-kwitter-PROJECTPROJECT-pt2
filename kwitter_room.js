var firebaseConfig = {
    apiKey: "AIzaSyCLfSKhIguGART9pbTVzwGbouz2MlkvdFc",
    authDomain: "c94forkwitter.firebaseapp.com",
    databaseURL: "https://c94forkwitter-default-rtdb.firebaseio.com",
    projectId: "c94forkwitter",
    storageBucket: "c94forkwitter.appspot.com",
    messagingSenderId: "1001428118586",
    appId: "1:1001428118586:web:58338ac0f9b540424c9903"
    };                     
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start
console.log("Room name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redireectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End
});});}
getData();

function addroom(){
roomname=document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
    purpose: "adding room name"
});
localStorage.setItem("roomname",roomname);
window.location="kwitter_loged.html";
}
function redireectToRoomName(name){
console.log(name);
localStorage.setItem("roomname", name);
window.location="kwitter_loged.html";
}
function logout(){
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location="index.html";
}