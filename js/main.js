//typewriter
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// const projectEvent = document.querySelector('.projects');
const cardOne = document.querySelector('.card1');
const cardTwo = document.querySelector('.card2');
const cardThree = document.querySelector('.card3');
const cardFour = document.querySelector('.card4');
const cardFive = document.querySelector('.card5');

function scrollEvent() {
  if (window.pageYOffset > 400) {
    //card3
    cardThree.classList.add('animated', 'slideInRight', 'delay-2s', 'slower');
    cardThree.classList.remove('hide');
    // card5
    cardFive.classList.add('animated', 'slideInLeft', 'delay-5s', 'slower');
    cardFive.classList.remove('hide');

    setTimeout(function () {
      // card2
      cardTwo.classList.add('animated', 'slideInLeft', 'delay-2s', 'slower');
      cardTwo.classList.remove('hide');
    }, 1000);

    setTimeout(function () {
      // card1
      cardOne.classList.add('animated', 'slideInLeft', 'delay-5s', 'slower');
      cardOne.classList.remove('hide');
      //card4
      cardFour.classList.add('animated', 'slideInRight', 'delay-5s', 'slower');
      cardFour.classList.remove('hide');

    }, 2000);

  }
}

window.onscroll = scrollEvent;