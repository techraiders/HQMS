(function () {

  "use strict";

  angular.module("hospitalApp")

    .factory("complaintsFactory", function($http, $q) {
      
      var baseUrl = "http://nxtlife.pythonanywhere.com";

      var getCategory = function () {

        var deferred = $q.defer();

        $http({
          method: "GET",
          contentType: "application/json",
          url: baseUrl + "/category"
        }).success(function (response) {
          deferred.resolve(response);
        }).error(function (response) {
          console.log(response)
          deferred.reject(response);
        });

        return deferred.promise;
      }

      /*var subCategory = function () {

        var deferred = $q.defer();

        $http({
          method: "GET",
          contentType: "application/json",
          url: baseUrl + "/subcategory/"
        }).success(function (response) {
          deferred.resolve(response);
        }).error(function (response) {
          console.log(response)
          deferred.reject(response);
        });

        return deferred.promise;
      }*/

      var saveComplaint = function (data) {

        var deferred = $q.defer();

        $http({
          method: "POST",
          contentType: "application/json",
          data: data,
          url: baseUrl + "/complaints/"
        }).success(function (response) {
          deferred.resolve(response);
        }).error(function (response) {
          console.log(response)
          deferred.reject(response);
        });

        return deferred.promise;
      }



      return {
        getCategory: getCategory,
        saveComplaint: saveComplaint
      }

    });
})();