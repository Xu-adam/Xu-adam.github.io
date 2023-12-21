alert("Welcome to my test page!")

let myImage = document.querySelector("img");
myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "image-1.webp") {
    myImage.setAttribute("src", "image-2.webp");
  } else {
    myImage.setAttribute("src", "image-1.webp");
  }
};


let myButton = document.querySelector("button");  //button press
let myHeading = document.querySelector("h1");  //welcome heading

setUserName();
function setUserName() {
    let myName = prompt("Please enter your name here");
    myHeading.textContent = "Welcome " + myName; 
}

myButton.onclick = function () {
    setUserName();
};
