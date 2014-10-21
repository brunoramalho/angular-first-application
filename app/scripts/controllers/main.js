'use strict';

/**
 * @ngdoc function
 * @name angularFirstApplicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFirstApplicationApp
 */
angular.module('angularFirstApplicationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
