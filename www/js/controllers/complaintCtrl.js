(function () {
  "use strict";

  angular.module("hospitalApp")

    .controller("complaintCtrl", function($scope, $http, complaintsFactory) {

      complaintsFactory.getCategory().then(function(response) {
        $scope.categories = response;
      });

/*      complaintsFactory.getSubCategory().then(function(response) {
        $scope.subCategories = response;
      });*/


      $scope.saveComplaint = function (new_complaint) {
        if (new_complaint) {
          complaintsFactory.saveComplaint(new_complaint).then(function(response) {
          })
          alert("Complaint submitted");
          console.log("Complaint submitted");
        }
      }

  });

})();