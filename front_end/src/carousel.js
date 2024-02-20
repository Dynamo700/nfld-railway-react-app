document.getElementById('prevBtn').addEventListener('click', function() {
    moveSlide(-1);
    resetTimer();
  });
  document.getElementById('nextBtn').addEventListener('click', function() {
    moveSlide(1);
    resetTimer();
  });
  
  let slideIndex = 0;
  showSlides(slideIndex);
  
  let slideInterval = setInterval(function() { moveSlide(1) }, 3000); // Change slide every 3 seconds
  
  function moveSlide(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
  }
  
  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(function() { moveSlide(1) }, 3000); // Reset the interval
  }
  