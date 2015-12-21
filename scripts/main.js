$(document).ready(function() {
  $('html, body').animate({
    scrollTop: $('.intro').offset().top - .05 * $(window).height()
  }, 0);
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

} else {
  $.fn.scrollTo = function(target, options, callback) {
    if (typeof options == 'function' && arguments.length == 2) {
      callback = options;
      options = target;
    }
    var settings = $.extend({
      scrollTarget: target,
      offsetTop: 50,
      duration: 500,
      easing: 'swing'
    }, options);
    return this.each(function() {
      var scrollPane = $(this);
      var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
      var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
      scrollPane.animate({
        scrollTop: scrollY
      }, parseInt(settings.duration), settings.easing, function() {
        if (typeof callback == 'function') {
          callback.call(this);
        }
      });
    });
  }

  var bio = false;
  this.previous_active = 0;
  var count = 0;

  $(document).ready(function() {
    still_animating = false;

    $('html, body').animate({
      scrollTop: $('.intro').offset().top - .05 * $(window).height()
    }, 0);

    $('.dropdown .active').click(function() {
      previous_active = this;
      showDropdown($("li").index(this));
    });

    $('.dropdown').mouseleave(function() {
      hideDropdown($("li").index(previous_active));
      $(previous_active).addClass('active');
    });

    $('.dropdown-wrapper')
      .delegate('.dropdown .active', 'mouseover',
        function() {
          if ($(".dropdown .active").length > 1 || still_animating) {

          } else {
            previous_active = this;
            showDropdown($("li").index(this));
          }
      })
      .delegate('.bio.active', 'click',
        function() {
          shiftDropdown(1);
          $(this).addClass('active');
          $('body').scrollTo(0);
      })
      .delegate('.things.active', 'click',
        function() {
          shiftDropdown(2);
          $(this).addClass('active');
      })
      .delegate('.code.active', 'click',
        function() {
          shiftDropdown(3);
          $(this).addClass('active');
          $('body').scrollTo($('.code-section').offset().top - 50);
      })
      .delegate('.design.active', 'click',
        function() {
          shiftDropdown(4);
          $(this).addClass('active');
          $('body').scrollTo($('.design-section').offset().top - 50);
      });

  });

  function showDropdown(i) {
    still_animating = true;

    $ ('.dropdown').children('li').each(function(j) {
      var that = this;

      setTimeout(function() {
        $(that).addClass('active');
      }, 80 * Math.abs(i - j));
    });

    setTimeout(function() {
      still_animating = false;
    }, 240)
  }

  function hideDropdown(i) {
    still_animating = true;

    $('.dropdown').children('li').each(function(j) {
      var that = this;

      if (that != previous_active) {
        setTimeout(function() {
          $(that).removeClass('active');
        }, 80 * Math.abs(i - j));
      }
    });

    setTimeout(function() {
      still_animating = false;
    }, 240)
  }

  function shiftDropdown(i) {
    topOffset = (i * -57) + "px";
    $('.dropdown-wrapper').animate({
      top: topOffset
    }, 200);

    $('.dropdown').children('li').each(function(j) {
      var that = this;

      if (i != j + 1) {
        $(that).removeClass('active');
      } else {
        $(that).addClass('active');
        previous_active = that;
      }
    });
  }
}
