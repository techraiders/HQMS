(function () {
  "use strict";
     angular.module("hospitalApp")
     .factory("customService", function($ionicLoading) {
      var _on = function () {
           $ionicLoading.show({
               content: 'android',
               // template: '<ion-spinner icon="android"></ion-spinner>',
               animation: 'fade-in',
               showBackdrop: true,
               maxWidth: 200,
               showDelay: 0
           });
       }
       var _off = function () {
           $ionicLoading.hide();
       }
      return {
        _on:_on,
        _off:_off
      }

    });
})();