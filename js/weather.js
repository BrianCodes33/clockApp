var Weather = function(container) {};

Weather.prototype.loadWeather = function(callback) {
  console.log('Callback', callback);
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        $.ajax({
          url: 'http://api.openweathermap.org/data/2.5/weather?APPID=7887e0042abdddb52bbab76e23f8a80a&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude,
          success: function(response) {
            this.city = response.name;
            this.weather = response.weather[0].main;

            if (callback) {
              callback(this.city, this.weather);
            }
          }.bind(this)
        });
      }.bind(this), function(error) {
        console.warn(error);
      });
  } else {
      alert("Geolocation is not supported by this browser.");
  }
};

$(document).ready(function() {
  var weather = new Weather(document.getElementById('container'));
  weather.loadWeather(function(city, weather) {
    this.cityElem = document.createElement('div');
    this.cityElem.classList.add('city');
    this.cityElem.id = 'city';
    this.cityElem.innerHTML = city;

    this.weatherElem = document.createElement('div');
    this.weatherElem.classList.add('weather');
    this.weatherElem.id = 'weather';
    // this.weatherElem.innerHTML = weather;

    this.weatherElem.classList.add(weather.toLowerCase());

    container.appendChild(this.cityElem);
    container.appendChild(this.weatherElem);


    console.log(weather);

    //this.cityElem.innerHTML = '<div class="city">'+this.cityElem+'</div';

  });


});
