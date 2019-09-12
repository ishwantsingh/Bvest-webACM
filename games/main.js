$(document).ready(function () {
    $('.inteai-Faquestion h2').on("click", function () {
        $(this)
            .next()
            .slideToggle();
    });
});


// Smooth Scrolling

$('.nav-link').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top 
        },
        800
      );
    }
  });