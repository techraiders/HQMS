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
          console.log("err", response)
          deferred.reject(response);
        });
        return deferred.promise;
      }

      var getSubCategory = function () {
        var deferred = $q.defer();
        $http({
          method: "GET",
          contentType: "application/json",
          url: baseUrl + "/subcategory"
        }).success(function (response) {
          deferred.resolve(response);
        }).error(function (response) {
          console.log("err", response)
          deferred.reject(response);
        });
        return deferred.promise;
      }

      var saveComplaint = function (data) {
        var deferred = $q.defer();
        console.log("Data being posted is: ", data);
        $http({
          method: "POST",
          contentType: "application/json",
          data: data,
          url: baseUrl + "/complaints"
        }).success(function (response) {
          console.log("Data was posted: ", response);
          console.log(response.complaintID);
          deferred.resolve(response);
        }).error(function (response) {
          console.log("err", response);
          deferred.reject(response);
        });
        return deferred.promise;
      }

      return {
        getCategory: getCategory,
        getSubCategory: getSubCategory,
        saveComplaint: saveComplaint
      }

    });
})();