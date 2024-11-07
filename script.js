"use strict"
console.clear();

const buttomImg = document.getElementById("cambiaImg");
console.log(buttomImg);

const firstImg = document.querySelector("img");
console.log(firstImg);

buttomImg.addEventListener('click', accendiSpegni);

function accendiSpegni () {
    if (buttomImg.textContent.includes("Accendi")) {
        firstImg.src = "img/yellow_lamp.png";  
        buttomImg.textContent = "Spegni";  
        console.log("Spegni");  
    } else {
        firstImg.src = "img/white_lamp.png"; 
        buttomImg.textContent = "Accendi"; 
        console.log("Accendi");
    }
}










