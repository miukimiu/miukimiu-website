"use strict";angular.module("onepagesoundcloudApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","plangular"]).config(["$routeProvider","plangularConfigProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/music",{templateUrl:"views/music.html",controller:"MusicCtrl"}).otherwise({redirectTo:"/"}),b.clientId="7d4f2bbce5b7ca506cda8515dc002f71"}]),angular.module("onepagesoundcloudApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("onepagesoundcloudApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("onepagesoundcloudApp").controller("MusicCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);