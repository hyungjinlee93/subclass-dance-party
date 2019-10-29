var MakeSpinner = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinner"></span>');
  this.setPosition(top,left);
  this.currentPosition = 90;
};

MakeSpinner.prototype = Object.create(MakeDancer.prototype);
MakeSpinner.prototype.constructor = MakeSpinner;
MakeSpinner.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.$node.css('-moz-transform','rotate('+this.currentPosition+'deg)');
  this.$node.css('-webkit-transform','rotate('+this.currentPosition+'deg)');
  this.currentPosition += 90;
};

MakeSpinner.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};