$(document).ready(function() {
  var container = document.getElementById('container');
  var theClock = new Clock(container);
  var theWeather = new Weather(container);

  

  var tick = function(){
      theClock.update();
      window.requestAnimationFrame(tick);
  };

  window.requestAnimationFrame(tick);

});
