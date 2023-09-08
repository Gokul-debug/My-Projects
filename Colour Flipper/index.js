let spanText = document.getElementById("code");
let btn = document.getElementById("click")
let wrap = document.getElementById("wrap")
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn .addEventListener("click" , function(){
    let hexColur = "#"
    for(i=1;i<=6;i++){
        hexColur+= randomHex()
    }
    wrap.style.backgroundColor= hexColur;
    spanText.innerHTML= hexColur;
})




function randomHex (){
    let randomElement = Math.floor(Math.random()*16)
    return hex[randomElement]
}