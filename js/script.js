$(document).ready(function() {
  //Lightbox Options
    lightbox.option({
      'wrapAround': true
    })
    //Gallery anim
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 350){
        $('.gallery').addClass('change');
      } else {
        $('.gallery').removeClass('change');
      }
    })
})




































