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

        weather.weatherData1=response.data.list[0].weather[0].icon;
        weather.weatherData2=response.data.list[0].weather[0].main;
        weather.weatherData3=response.data.list[0].weather[0].description;
        weather.weatherData4=response.data.list[0].main.temp;
        weather.weatherData5=response.data.list[0].main.temp_min;
        weather.weatherData6=response.data.list[0].main.temp_max;
        weather.weatherData7=response.data.list[0].main.pressure;
        weather.weatherData8=response.data.list[0].main.humidity;
        weather.weatherData9=response.data.list[0].wind.speed;
        weather.weatherData10=response.data.list[0].wind.deg;
        weather.weatherData11=response.data.list[1].weather[0].icon;
        weather.weatherData12=response.data.list[1].weather[0].main;
        weather.weatherData13=response.data.list[1].weather[0].description;
        weather.weatherData14=response.data.list[1].main.temp;
        weather.weatherData15=response.data.list[1].main.temp_min;
        weather.weatherData16=response.data.list[1].main.temp_max;
        weather.weatherData17=response.data.list[1].main.pressure;
        weather.weatherData18=response.data.list[1].main.humidity;
        weather.weatherData19=response.data.list[1].wind.speed;
        weather.weatherData20=response.data.list[1].wind.deg;
        weather.weatherData21=response.data.list[2].weather[0].icon;
        weather.weatherData22=response.data.list[2].weather[0].main;
        weather.weatherData23=response.data.list[2].weather[0].description;
        weather.weatherData24=response.data.list[2].main.temp;
        weather.weatherData25=response.data.list[2].main.temp_min;
        weather.weatherData26=response.data.list[2].main.temp_max;
        weather.weatherData27=response.data.list[2].main.pressure;
        weather.weatherData28=response.data.list[2].main.humidity;
        weather.weatherData29=response.data.list[2].wind.speed;
        weather.weatherData30=response.data.list[2].wind.deg;
        weather.weatherData31=response.data.list[3].weather[0].icon;
        weather.weatherData32=response.data.list[3].weather[0].main;
        weather.weatherData33=response.data.list[3].weather[0].description;
        weather.weatherData34=response.data.list[3].main.temp;
        weather.weatherData35=response.data.list[3].main.temp_min;
        weather.weatherData36=response.data.list[3].main.temp_max;
        weather.weatherData37=response.data.list[3].main.pressure;
        weather.weatherData38=response.data.list[3].main.humidity;
        weather.weatherData39=response.data.list[3].wind.speed;
        weather.weatherData40=response.data.list[3].wind.deg;
        weather.weatherData41=response.data.list[4].weather[0].icon;
        weather.weatherData42=response.data.list[4].weather[0].main;
        weather.weatherData43=response.data.list[4].weather[0].description;
        weather.weatherData44=response.data.list[4].main.temp;
        weather.weatherData45=response.data.list[4].main.temp_min;
        weather.weatherData46=response.data.list[4].main.temp_max;
        weather.weatherData47=response.data.list[4].main.pressure;
        weather.weatherData48=response.data.list[4].main.humidity;
        weather.weatherData49=response.data.list[4].wind.speed;
        weather.weatherData50=response.data.list[4].wind.deg;
        weather.weatherData51=response.data.city.name;
        weather.weatherData52=response.data.city.country;
      })
    }
  }

  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var service=this;

    service.getWeatherForecastData = function(cityName){

      var weatherData = $http({

        method: "GET",
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + "&units=metric" + "&APPID=af6375acfd45a4a055ab6270948ec459"

      });

      return weatherData;
    };
  }

})();
