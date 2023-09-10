function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="https://www.bing.com/images/search?q=travelllllllll+places+in+the+world&form=HDRSC3&first=1";
}
var x= document.getElementById("myAudio");

function playSound(){
	x.play();
}