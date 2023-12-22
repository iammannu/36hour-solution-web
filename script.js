function toggleMenu() {
    var nav = document.getElementById("main-nav");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}
