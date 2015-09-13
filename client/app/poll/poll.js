'use strict';

angular.module('fullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/poll/:id/:permalink', {
        templateUrl: 'app/poll/poll.html',
        controller: 'PollCtrl'
      });
  });
