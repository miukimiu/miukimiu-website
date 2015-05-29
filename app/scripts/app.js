'use strict';

/**
 * @ngdoc overview
 * @name onepagesoundcloudApp
 * @description
 * # onepagesoundcloudApp
 *
 * Main module of the application.
 */
angular
  .module('onepagesoundcloudApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'plangular'
  ])
  .config(function ($routeProvider, plangularConfigProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      plangularConfigProvider.clientId = '7d4f2bbce5b7ca506cda8515dc002f71';
  });
  