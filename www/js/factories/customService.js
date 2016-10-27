(function () {
  "use strict";
     angular.module("hospitalApp")
     .factory("customService", function($ionicLoading) {
      var spinner_on = function () {
           $ionicLoading.show({
               content: 'android',
               // template: '<ion-spinner icon="android"></ion-spinner>',
               animation: 'fade-in',
               showBackdrop: true,
               maxWidth: 200,
               showDelay: 0
           });
       }
       var spinner_off = function () {
           $ionicLoading.hide();
       }
      return {
        spinner_on : spinner_on,
        spinner_off : spinner_off
      }

    });
})();