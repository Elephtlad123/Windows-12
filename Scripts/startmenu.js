let startMenuButton = document.getElementById("start-menu-button")

let startMenu = document.getElementById("start-menu")

startMenuButton.addEventListener("click", () =>{
    if (startMenu.style.bottom === "5%"){
        startMenu.style.bottom = "-60%"
    } else {
        startMenu.style.bottom = "5%";
    }
})