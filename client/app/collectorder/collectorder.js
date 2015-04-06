'use strict';

angular.module('goffeeAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('collectorder', {
        url: '/collectorder',
        templateUrl: 'app/collectorder/collectorder.html',
        controller: 'CollectorderCtrl'
      });
  });