var slideIndex_1 = 1;
var t_1;
showSlides_1(slideIndex_1);

// Next/previous controls
function plusSlides_1(n){
  slideIndex_1 = slideIndex_1 + n;
  clearTimeout(t_1);
  showSlides_1(slideIndex_1);
  console.log(slideIndex_1);
}

// Thumbnail image controls
function currentSlide_1(n){
  showSlides_1(slideIndex_1 = n);
}

function showSlides_1(n){
  let i;
  let slides = document.getElementsByClassName("slideshow_1");
  let dots = document.getElementsByClassName("dot_1");

  if(n == undefined){
    n = ++slideIndex_1;
  }
  if(n > slides.length){
    slideIndex_1 = 1;
  }
  if(n < 1){
    slideIndex_1 = slides.length;
  }

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_1-1].style.display = "block";
  dots[slideIndex_1-1].className += " active";

  // Change image every 5000 ms
  t_1 = setTimeout(showSlides_1, 5000);
}


