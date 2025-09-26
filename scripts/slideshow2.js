var slideIndex_2 = 1;
var t_2;
showSlides_2(slideIndex_2);

// Next/previous controls
function plusSlides_2(n){
  slideIndex_2 = slideIndex_2 + n;
  clearTimeout(t_2);
  showSlides_2(slideIndex_2);
  console.log(slideIndex_2);
}

// Thumbnail image controls
function currentSlide_2(n){
  showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n){
  let i;
  let slides = document.getElementsByClassName("slideshow_2");
  let dots = document.getElementsByClassName("dot_2");

  if(n == undefined){
    n = ++slideIndex_2;
  }
  if(n > slides.length){
    slideIndex_2 = 1;
  }
  if(n < 1){
    slideIndex_2 = slides.length;
  }

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_2-1].style.display = "block";
  dots[slideIndex_2-1].className += " active";

  // Change image every 5000 ms
  t_2 = setTimeout(showSlides_2, 5000);
}


