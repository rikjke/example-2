document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
  // $(document).on('ready', function(){
  //   $('.owl-carousel').owlCarousel();
  // });
  $('.owl-carousel').owlCarousel({
    items: 1,
    dots: true
  });
  $(".line-wrapp").click(function() {
	$(this).toggleClass("active");
  $(".menu").fadeToggle();
});
$('a').smoothScroll();
});
