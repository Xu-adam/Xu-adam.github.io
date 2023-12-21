alert("Welcome to my test page!")

let myImage = document.querySelector("img");
myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image-1.webp") {
    myImage.setAttribute("src", "images/image-2.webp");
  } else {
    myImage.setAttribute("src", "images/image-1.webp");
  }
};


let myButton = document.querySelector("button");  //button press
let myHeading = document.querySelector("h1");  //welcome heading

function setUserName() {
    let myName = prompt("Please enter your name here");
    if (myName){
      myHeading.textContent = "Welcome " + myName;
    }
    else{
      setUserName();
    }
}

setUserName();



myButton.onclick = function () {
    setUserName();
};
