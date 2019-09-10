// js

//timer
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("Oct 17, 2019 00:00:00").getTime(),
  x = setInterval(function() {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));

    //   when timer is reached
    if (distance < 0) {
      clearInterval(x);
      ("BVEST IS HERE");
    }
  }, second);

//TIMER END

//images- animation
// var tween = TweenMax.to(".image", 2, { rotationX: 360 });
// TweenMax.from(".image", 2, { rotationX: 180 });

var tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });

tl.to(".image-1", 1.2, { rotationY: 180 });
tl.to(".image-3", 1.2, { rotationY: 180 });
tl.to(".image-6", 1.2, { rotationY: 180 });
tl.to(".image-10", 1.2, { rotationY: 180 });

tl.to(".image-1", 1.2, { rotationY: 360 });

tl.to(".image-11", 1.2, { rotationY: 180 });

tl.to(".image-7", 1.2, { rotationY: 180 });

tl.to(".image-9", 1.2, { rotationY: 180 });

tl.to(".image-6", 1.2, { rotationY: 360 });

tl.to(".image-11", 1.2, { rotationY: 360 });

tl.to(".image-12", 1.2, { rotationY: 180 });

tl.to(".image-2", 1.2, { rotationY: 180 });

tl.to(".image-3", 1.2, { rotationY: 360 });

tl.to(".image-10", 1.2, { rotationY: 360 });

tl.to(".image-12", 1.2, { rotationY: 360 });

tl.to(".image-8", 1.2, { rotationY: 180 });

tl.to(".image-5", 1.2, { rotationY: 180 });
tl.to(".image-9", 1.2, { rotationY: 360 });

tl.to(".image-7", 1.2, { rotationY: 360 });

tl.to(".image-4", 1.2, { rotationY: 180 });

tl.to(".image-2", 1.2, { rotationY: 360 });
tl.to(".image-8", 1.2, { rotationY: 360 });
tl.to(".image-5", 1.2, { rotationY: 360 });
tl.to(".image-4", 1.2, { rotationY: 360 });

//FAQ

$(document).ready(function() {
  $(".inteai-Faquestion h2").on("click", function() {
    $(this)
      .next()
      .slideToggle();
  });
});
