if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

} else {
  $.fn.scrollTo = function( target, options, callback ){
    if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
    var settings = $.extend({
      scrollTarget  : target,
      offsetTop     : 50,
      duration      : 500,
      easing        : 'swing'
    }, options);
    return this.each(function(){
      var scrollPane = $(this);
      var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
      var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
      scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
        if (typeof callback == 'function') { callback.call(this); }
      });
    });
  }

  var bio = false;
  this.previous_active = 0;
  var count = 0;

  // document.onload = function() {
  //   // var page_start = $('.code-section').offset().top + .05 * .9 * $(window).width() - $(window).height();
  //   var page_start = $('.intro').offset().top - .05 * $(window).height();
  //   console.log(page_start);
  //   window.scroll(0, page_start);
  // };

  $(document).ready(function() {
    $('html, body').animate({
      scrollTop: $('.intro').offset().top - .05 * $(window).height()
    }, 0);

    $('.josh-shi-makes').click(function() {
      $('.design').addClass('active');
    });

    $('.dropdown-wrapper').delegate('.dropdown .active', 'mouseover',
    function() {
      if ($(".dropdown .active").length == 4) {

      } else {
        previous_active = this;
      }

      console.log(this);
      showDropdown();
    });

    $('.dropdown .active').click(function() {
      previous_active = this;
      showDropdown();
    });

    $('.dropdown').mouseleave(function() {
      hideDropdown();
      $(previous_active).addClass('active');
    });

    $('.plus-glyph').click(function() {
      if(bio) {
        leaveBio();
      } else {
        enterBio();
      }

      bio = !bio;
    });

    $('.bio').click(function() {
      shiftDropdown(1);
      $(this).addClass('active');
      $('body').scrollTo(0);
    });

    $('.things').click(function() {
      shiftDropdown(2);
      $(this).addClass('active');
    });

    $('.code').click(function() {
      shiftDropdown(3);
      $(this).addClass('active');
      $('body').scrollTo($('.code-section').offset().top -50);
    });

    $('.design').click(function() {
      shiftDropdown(4);
      $(this).addClass('active');
      $('body').scrollTo($('.design-section').offset().top -50);
    });

  });

  function showDropdown() {
    $('.dropdown').children('li').each(function(i){
      var that = this;

      setTimeout(function() {
        $(that).addClass('active');
      }, 80 * i);
    });
  }

  function hideDropdown() {
    $('.dropdown').children('li').each(function(i){
      var that = this;

      if (that != previous_active) {
        setTimeout(function() {
          $(that).removeClass('active');
        }, 80 * i);
      }
    });
  }

  function shiftDropdown(i) {
    topOffset = (i * -57) + "px";
    $('.dropdown-wrapper').animate({
      top: topOffset
    }, 200);

    $('.dropdown').children('li').each(function(j){
      var that = this;

      if (i != j + 1) {
        $(that).removeClass('active');
      } else {
        $(that).addClass('active');
        previous_active = that;
      }
    });
  }

  function enterBio() {
    $('.bio-section').animate({
      left: "0%"
    }, 200);

    $('.plus-glyph').css('color', 'white');
    $('.plus-glyph').css('transform', 'rotate(45deg)');

    $('.bio-section').css('position', 'absolute');
    console.log('enter');
  }

  function leaveBio() {
    $('.bio-section').animate({
      left: "95%"
    }, 200);

    $('.plus-glyph').css('color', '#FFAB40');
    $('.plus-glyph').css('transform', 'rotate(0deg)');

    $('.bio-section').css('position', 'fixed');
    console.log('leave')
  }
}
