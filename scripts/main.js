
let myImage = document.querySelector("img");
myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/campus life-1.jpg"){
    myImage.setAttribute("src", "images/campus life-2.jpg");
  } 
  else if (mySrc === "images/campus life-2.jpg"){
    myImage.setAttribute("src", "images/campus life-3.jpg");
  }
  else if (mySrc === "images/campus life-3.jpg"){
    myImage.setAttribute("src", "images/campus life-4.jpg");
  }
  else 
  myImage.setAttribute("src", "images/campus life-1.jpg");
};


/*
let myButton = document.querySelector("button");  
let myHeading = document.querySelector("h1");  

function setUserName() {
    let myName = prompt("Welcome! You can access this website only if you enter your username here: ");
    if (myName){
      myHeading.textContent = "Welcome to the introduction of degree programs of the Joint Institute, " + myName + "!";
    }
    else{
      setUserName();
    }
}

setUserName();

myButton.onclick = function () {
  setUserName();
};
*/

