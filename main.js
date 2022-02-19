var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var words = ["Are Brackets", "Design", "Create", "Maintain"];
var textPosition = 0; 
var speed = 100; 
var wordIndex = 0; 

typeWriter = () => {

  document.querySelector("#typeWriter").innerHTML = words[wordIndex].substring(0, textPosition) + "<span>|</span>";

  if(textPosition++ != words[wordIndex].length){
      setTimeout(typeWriter, speed);
    } else {
      textPosition = 0; 
      wordIndex++;
      setTimeout(typeWriter, speed + 800);
    } 
}

window.addEventListener("load", typeWriter);
