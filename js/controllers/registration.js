myApp.controller('RegistrationController',
  ['$scope', 'Authentication',
    function ($scope, Authentication) {



  $scope.login = function () {
    Authentication.login($scope.user)

  } ;

  $scope.logout = function () {
    Authentication.logout($scope.user)
  } ;

  $scope.register = function () {
    Authentication.register($scope.user)
  };//register


}]);//controller








// myApp.controller('appController', ['$scope', function ($scope) {
//
//
// }])

// $scope.message = "Welcome to my App";