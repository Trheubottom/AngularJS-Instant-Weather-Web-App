(function(){
  'use strict';

  angular.module('MyWeatherApp',[])
  .controller('WeatherController',WeatherController)
  .service('WeatherService',WeatherService);

  WeatherController.$inject = ['WeatherService','$filter'];
  function WeatherController(WeatherService,$filter){
    var weather=this;

    weather.cityName="";
    weather.flag=false;
    weather.getWeather = function(){
      weather.cityName=$filter('uppercase')(weather.cityName);
      weather.flag=true;
      var promise=WeatherService.getWeatherForecastData(weather.cityName);
      promise.then(function(response){
        weather.weatherData1=response.data.weather[0].icon;
        weather.weatherData2=response.data.weather[0].main;
        weather.weatherData3=response.data.weather[0].description;
        weather.weatherData4=response.data.main.temp;
        weather.weatherData5=response.data.main.temp_min;
        weather.weatherData6=response.data.main.temp_max;
        weather.weatherData7=response.data.main.pressure;
        weather.weatherData8=response.data.main.humidity;
        weather.weatherData9=response.data.wind.speed;
        weather.weatherData10=response.data.wind.deg;
        weather.weatherData11=response.data.name;
        weather.weatherData12=response.data.sys.country;
      })
    }
  }


  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var service=this;

    service.getWeatherForecastData = function(cityName){

      var weatherData = $http({

        method: "GET",
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&units=metric" + "&APPID=af6375acfd45a4a055ab6270948ec459"

      });

      return weatherData;
    };
  }

})();
