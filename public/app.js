var app = angular.module('movieApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'HomeController'
  })
  .when('/show/:id', {
    templateUrl: 'partials/show.html',
    controller: 'ShowController'
  });
  $locationProvider.html5Mode(true);
}]);

app.controller('HomeController', ['$scope', '$http', '$location', function($scope) {
  $scope.message="Welcome Home";
  $scope.movie = {};
  $scope.search = function(movie) {
    $http.get('http://www.omdbapi.com/?s=' + movie.title).then(function(data) {
      $scope.movies = data.data.Search;
    });
  };

}]);
app.controller('ShowController', []
