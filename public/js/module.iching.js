angular.module('IChing', ['ngRoute'])
  .config(Router);

Router.$inject = [ '$routeProvider', '$locationProvider'];

function Router ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl   : '/html/partials/home.html',
      controller    : 'homeController',
      controllerAs  : 'home'
    })
    .when('/about', {
      templateUrl   : '/html/partials/about.html',
    })
}
