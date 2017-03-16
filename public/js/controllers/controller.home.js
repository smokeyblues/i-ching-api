angular.module('IChing')
  .controller('homeController', homeController);

  homeController.$inject = ['$scope', '$http', '$location'];

  function homeController($scope, $http, $location) {
    var home = this;
    home.title = 'I Ching Api';

    home.homeButton = function() {
      home.title = 'Click for Home';
    }

    home.stayHere = function() {
      home.title = 'I Ching Api';
    }

    home.aboutFace = function() {
      $location.path('/about').replace();
      home.title = 'About the I Ching Api';
    }
  }
