
//===============ROTATE WORDS================//


$('#nav-hamburger').on('click', function () {
  $('#responsive-menu').removeClass('hide');
  $('#nav-hamburger').addClass('hide');
});

$('#close-responsive').on('click', function () {
  $('#responsive-menu').addClass('hide');
  $('#nav-hamburger').removeClass('hide');
});

$('.nav-item').on('click', function () {
  $('#responsive-menu').addClass('hide');
  $('#nav-hamburger').removeClass('hide');
});



//============Easy Scroll=============//




$('a[href*=#]:not([href=#])').click(function() {

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 25
      }, 1000);
      return false;
    }
  }
});



//==============CAROUSEL=============//



$('#next').on('click', function () {
  $('#carousel-example-generic').carousel('next');
});

$('#prev').on('click', function () {
  $('#carousel-example-generic').carousel('prev');
});



//=============MODALS==================//



var openModal = function(e) {
  $('#modal-sample-' + e.data.index).modal('show');
};

for (var i = 1; i <= 10; i++) {
  $('#modal-' + i).click({ index: i }, openModal);
}

