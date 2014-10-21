'use strict';

/**
 * @ngdoc function
 * @name angularFirstApplicationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularFirstApplicationApp
 */
angular.module('angularFirstApplicationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
