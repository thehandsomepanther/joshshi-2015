$(document).ready(function() {

  $('.things').mouseover(function() {
    dropDown();
  });

  $('.things').click(function() {
    dropDown();
  });

  $('.dropdown').mouseleave(function() {
    dropUp();
  });

});

function dropDown() {
  $('.dropdown').children('li').each(function(i){
    var that = this;

    setTimeout(function() {
      $(that).addClass('active');
    }, 80 * i);
  });
}

function dropUp() {
  $('.dropdown').children('li').each(function(i){
    var that = this;

    setTimeout(function() {
      $(that).removeClass('active');
    }, 80 * i);

  });
}
