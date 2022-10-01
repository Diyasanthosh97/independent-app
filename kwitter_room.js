var firebaseConfig = {
      apiKey: "AIzaSyAm2qJyENNM_SmTHVMxi4j2Q3lH3Q6xT-c",
      authDomain: "kwitter-4c4ad.firebaseapp.com",
      databaseURL: "https://kwitter-4c4ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-4c4ad",
      storageBucket: "kwitter-4c4ad.appspot.com",
      messagingSenderId: "65234163808",
      appId: "1:65234163808:web:f9a47b6492ade17ac94b05"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Hi "+user_name+" !";
 function addroom(){
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"add room"
       });
       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html";
 }
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       console.log("Room name-"+Room_names);
       row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +=row;
       
       });});}
 getData();
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html";
 }
 
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";      
}