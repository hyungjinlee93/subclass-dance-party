var MakeFish = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fish"></span>');
  let randomDir = Math.random() < 0.5 ? -1 : 1;
  if(randomDir < 0){
    this.currentDirection = 'left';
    this.currentPosition = $(window).width();
    this.setPosition(top, $(window).width());
  } else {
    this.currentDirection = 'right';
    this.currentPosition = 0;
    this.setPosition(top, 0);
  }
};

MakeFish.prototype = Object.create(MakeDancer.prototype);
MakeFish.prototype.constructor = MakeFish;
MakeFish.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  if (this.currentDirection === 'right') {
    this.$node.animate({ "left": "+=65px" }, "slow");
    this.currentPosition += 65;
    if (this.currentPosition > $(window).width()) {
      let randomNeg = Math.random() < 0.5 ? -1 : 1;
      let randomFromTop = Math.random() * 70 * randomNeg;
      this.currentDirection = 'left';
      this.$node.animate({ "top": "+="+randomFromTop+"px" }, "fast");
      // this.$node.css('-moz-transform', 'scaleX(1)');
      // this.$node.css('-webkit-transform', 'scaleX(1)');
    }
  } else {
    this.$node.animate({ "left": "-=65px" }, "slow");
    this.currentPosition -= 65;
    if (this.currentPosition < -300) {
      let randomNeg = Math.random() < 0.5 ? -1 : 1;
      let randomFromTop = Math.random() * 70 * randomNeg;
      this.currentDirection = 'right';
      this.$node.animate({ "top": "+="+randomFromTop+"px" }, "fast");
      // this.$node.css('-moz-transform', 'scaleX(-1)');
      // this.$node.css('-webkit-transform', 'scaleX(-1)');
    }
  }
};

MakeFish.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};