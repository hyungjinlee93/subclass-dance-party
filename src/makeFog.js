var MakeFog = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fog"></span>');
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

MakeFog.prototype = Object.create(MakeDancer.prototype);
MakeFog.prototype.constructor = MakeFog;
MakeFog.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  if (this.currentDirection === 'right') {
    this.$node.animate({ "left": "+=65px" }, "slow");
    this.currentPosition += 65;
    if (this.currentPosition > $(window).width()) {
      let randomNeg = Math.random() < 0.5 ? -1 : 1;
      let randomFromTop = Math.random() * 70 * randomNeg;
      this.currentDirection = 'left';
      this.$node.animate({ "top": "+="+randomFromTop+"px" }, "fast");
    }
  } else {
    this.$node.animate({ "left": "-=65px" }, "slow");
    this.currentPosition -= 65;
    if (this.currentPosition < -300) {
      let randomNeg = Math.random() < 0.5 ? -1 : 1;
      let randomFromTop = Math.random() * 70 * randomNeg;
      this.currentDirection = 'right';
      this.$node.animate({ "top": "+="+randomFromTop+"px" }, "fast");
    }
  }
};

MakeFog.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};