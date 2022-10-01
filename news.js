user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function logout2(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="news.js";
}
