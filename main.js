$(document).ready(function() {
    var $slider = $('#slider');
    var slideWidth = $('.slide').width();
    var slideCount = $('.slide').length;
    var currentIndex = 0;
    var isRunning = true;

    function autoSlide() {
      if (isRunning) {
        currentIndex++;
        $slider.animate({
          'left': -slideWidth * currentIndex
        }, 500, function() {
          if (currentIndex === slideCount - 1) {
            currentIndex = 0;
            $slider.css('left', 0);
          }
        });
      }
    }

    var slideInterval = setInterval(autoSlide, 3000);

    $('#slider-container').hover(function() {
      clearInterval(slideInterval);
    }, function() {
      slideInterval = setInterval(autoSlide, 3000);
    });

    $('#stopButton').click(function() {
      isRunning = !isRunning;
    });
  });

// task2

$(".box img").hover(
    function() {
        $(this).next(".animation").stop().slideDown(2000);
    },
    function() {
        $(this).next(".animation").stop().slideUp(2000);
    }
);