function addUser(){
    user_name=document.getElementById("input_user").value;
    localStorage.setItem("User_name", user_name);
    window.location.replace("kwitter_room.html");
}