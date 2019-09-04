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

//images-references
var image1 = document.querySelector(".image-1");
var image2 = document.querySelector(".image-2");
var image3 = document.querySelector(".image-3");
var image4 = document.querySelector(".image-4");
var image5 = document.querySelector(".image-5");
var image6 = document.querySelector(".image-6");
var image7 = document.querySelector(".image-7");
var image8 = document.querySelector(".image-8");

//images- animation
// var tween = TweenMax.to(".image", 2, { rotationX: 360 });
// TweenMax.from(".image", 2, { rotationX: 180 });

var tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });

//MOUSE ENTER
tl.to(".image-1", 2, { rotationX: 360 });
tl.to(".image-3", 3, { rotationY: 360 });
tl.to(".image-6", 2, { rotationX: 360 });
tl.to(".image-7", 3, { rotationY: 360 });
tl.to(".image-4", 2, { rotationX: 360 });
tl.to(".image-2", 3, { rotationY: 360 });
tl.to(".image-8", 2, { rotationX: 360 });
tl.to(".image-5", 3, { rotationY: 360 });

// image1.onmouseover = function() {
//   TweenMax.to(".image-1", 2, { rotationX: 360 });
// };

// image4.onmouseover = function() {
//   TweenMax.to(".image-4", 2, { rotationX: 360 });
// };

// image6.onmouseover = function() {
//   TweenMax.to(".image-6", 2, { rotationX: 360 });
// };

// image8.onmouseover = function() {
//   TweenMax.to(".image-8", 2, { rotationX: 360 });
// };

// image2.onmouseover = function() {
//   TweenMax.to(".image-2", 2, { rotationY: 360 });
// };

// image3.onmouseover = function() {
//   TweenMax.to(".image-3", 2, { rotationY: 360 });
// };
// image5.onmouseover = function() {
//   TweenMax.to(".image-5", 2, { rotationY: 360 });
// };
// image7.onmouseover = function() {
//   TweenMax.to(".image-7", 2, { rotationY: 360 });
// };

//MOUSE LEAVE

// image1.onmouseleave = function() {
//   TweenMax.to(".image-1", 2, { rotationX: 360 });
// };
// image4.onmouseleave = function() {
//   TweenMax.to(".image-4", 2, { rotationX: 0 });
// };
// image6.onmouseleave = function() {
//   TweenMax.to(".image-6", 2, { rotationX: 0 });
// };
// image8.onmouseleave = function() {
//   TweenMax.to(".image-8", 2, { rotationX: 0 });
// };

// image2.onmouseleave = function() {
//   TweenMax.to(".image-2", 2, { rotationY: 0 });
// };
// image3.onmouseleave = function() {
//   TweenMax.to(".image-3", 2, { rotationY: 0 });
// };
// image5.onmouseleave = function() {
//   TweenMax.to(".image-5", 2, { rotationY: 0 });
// };
// image7.onmouseleave = function() {
//   TweenMax.to(".image-7", 2, { rotationY: 0 });
// };
