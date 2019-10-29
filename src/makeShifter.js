var MakeShifter = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="shifter"></span>');
  this.setPosition(top,left);
  this.currentPosition = 10;
};

MakeShifter.prototype = Object.create(MakeDancer.prototype);
MakeShifter.prototype.constructor = MakeShifter;
MakeShifter.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  if(this.currentPosition <= 10){
    this.$node.animate({"left":"+=65px"},"slow");
    this.currentPosition++;
  } else {
    this.$node.animate({"left":"-=65px"},"slow");
    this.currentPosition--;
  }
};

MakeShifter.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};