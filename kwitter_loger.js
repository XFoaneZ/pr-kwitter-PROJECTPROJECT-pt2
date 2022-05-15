function addUser(){
    username=document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}
//kwitter_lobby.js, kwitter_lobby.html, kwitter_room.html, kwitter_room.js