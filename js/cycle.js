var slideIndex = 0;

function cycle() {
    var index;
    var slide = document.getElementsByClassName("slide");

    for (index = 0; index < slide.length; index++) {
        slide[index].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    slide[slideIndex-1].style.display = "block";
    setTimeout(cycle, 30000);
}