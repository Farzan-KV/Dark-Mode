let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let logoImg = document.getElementById("logoImg");



btn.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "images/moon.png";
        btnText.innerHTML = "Dark";
        logoImg.src = "images/logo-white.png";
     }else{
         btnIcon.src = "images/sun.png";
         btnText.innerHTML = "Light";
         logoImg.src = "images/logo.png";
     }

}