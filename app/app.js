'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.gantt.dhxgantt',
  'openlabs.angular-tryton',
  'myApp.login',
  'myApp.gantt.gantt_view'
]).
config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider ) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);



