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

    $scope.subCategories = [
        {id: 1, name: "subc1"},
        {id: 2, name: "subc3"},
        {id: 3, name: "subc3"}
      ];
    
      $scope.saveComplaint = function (new_complaint) {
        if (new_complaint) {
          complaintsFactory.saveComplaint(new_complaint).then(function(response) {
          alert("Complaint submitted");
          console.log("Complaint submitted");
          })
        }
      }

  });

})();