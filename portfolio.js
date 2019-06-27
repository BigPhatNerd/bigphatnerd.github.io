//Adds read more button to mobile
document.getElementById("read_more").addEventListener('click', changeClass);

function changeClass() {
    var content = document.getElementById("extra_content");
    var btn = document.getElementById("read_more");
    content.classList.toggle('show');

    if (content.classList.contains("show")) {
        btn.innerHTML = "Show Less";
    } else {
        btn.innerHTML = "Show More";
    }
}

//Javascript for sticky tool bar
// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}