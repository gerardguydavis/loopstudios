const navmenu = document.getElementById("navmenu");
const hamburger = document.getElementById("hamburger");
const closeButton = document.getElementById("close");

hamburger.addEventListener("click", function () {
    if (navmenu.classList.contains("hide")) {
        navmenu.classList.add("slide-down");
        navmenu.classList.remove("hide");
        setTimeout(function () {
            hamburger.classList.add("toggle-off");
            closeButton.classList.remove("toggle-off");
        }, 0500);
    } else if (navmenu.classList.contains("slide-up")) {
        navmenu.classList.add("slide-down");
        navmenu.classList.remove("slide-up");
        setTimeout(function () {
            hamburger.classList.add("toggle-off");
            closeButton.classList.remove("toggle-off");
        }, 0200);
    }
});

closeButton.addEventListener("click", function () {
    if (navmenu.classList.contains("slide-down")) {
        navmenu.classList.add("slide-up");
        navmenu.classList.remove("slide-down");
        setTimeout(function () {
            closeButton.classList.add("toggle-off");
            hamburger.classList.remove("toggle-off");
        }, 0300);
    }
});