let numberOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButton; i++)

document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    alert("I got Clicked")

});