(function () {
  "use strict";

  angular.module("hospitalApp")

    .controller("complaintController", function($http, complaintsFactory, $state ) {
      var vm = this;
      complaintsFactory.getCategory().then(function(response) {
        vm.categories = response;
      });

      complaintsFactory.getSubCategory().then(function(response) {
        vm.subCategories = response;
      });
    
      vm.saveComplaint = function(new_complaint) {
        vm.submitted = true;
        if (new_complaint) {
          complaintsFactory.saveComplaint(new_complaint).then(function(response) {
          alert("Complaint submitted");
          vm.complaint = {};
          $state.go("menu");
          })
        }
      }
  });

})();