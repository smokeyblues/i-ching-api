angular.module('IChing')
  .factory('HexFactory', HexFactory);

  HexFactory.$inject = ['$http'];

  function HexFactory ($http) {
    

    function getHexagram(hexID) {
      return $http({
        method  : 'GET',
        url     : 'api/hexagrams' + (hexID ? '/' + hexID : '')
      })
    }
  }
