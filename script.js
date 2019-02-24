/* Open */
function openNav() {
    document.getElementById("myDropNav").style.height = "100%";
    document.getElementById("dropButton").innerHTML = "";
}

/* Close */
function closeNav() {
    document.getElementById("myDropNav").style.height = "0%";
    document.getElementById("dropButton").innerHTML = "&equiv;";
}

/* Carousel */
// var slideIndex = 0
// cakesCarousel()

// function cakesCarousel() {
//     var i = 0;
//     var slides = document.getElementsByClassName("cakeSlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.diplay = "block";
//     setTimeout(cakesCarousel, 4000);
// }
