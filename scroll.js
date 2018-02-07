$('body').attr('data-spy', 'scroll');
  $('body').attr('data-target', '#navbar-collapse-scroll');
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 10px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0 }, 100);              // Scroll to top of body   
});

/* Copyright Year   */
let date = new Date().getFullYear();
document.getElementById('currentyear').innerHTML = date;

/* Character Length */
var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  $('#chars').text(length);
});
