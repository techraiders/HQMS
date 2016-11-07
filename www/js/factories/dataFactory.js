(function () {

  "use strict";

  angular.module("hospitalApp")

    .factory("dataFactory", function($http, $q) {
      
      var baseUrl = "http://nxtlife.pythonanywhere.com/";

      var getData = function (path) {
        var deferred = $q.defer();
        $http({
          method: "GET",
          contentType: "application/json",
          url: baseUrl + path
        }).success(function (response) {        
          deferred.resolve(response);
        }).error(function (response) {
          console.log("err", response)
          deferred.reject(response);
        });
        return deferred.promise;
      }

      var saveData = function (data, path) {
        var deferred = $q.defer();
        console.log("Client sent: ", data);
        $http({
          method: "POST",
          contentType: "application/json",
          data: data,
          url: baseUrl + path
        }).success(function (response) {
          deferred.resolve(response);
        }).error(function (response) {
          console.log("err", response);
          deferred.reject(response);
        });
        return deferred.promise;
      }

      return {
        getData: getData,
        saveData: saveData
      }

    });
})();