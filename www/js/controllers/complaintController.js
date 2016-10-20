(function () {
  "use strict";

  angular.module("hospitalApp")

    .controller("complaintController", function($http, complaintsFactory, $state, $rootScope ) {
      var vm = this;
      complaintsFactory.getCategory().then(function(response) {
        vm.categories = response;
      });

      complaintsFactory.getSubCategory().then(function(response) {
        vm.subCategories = response;
      });
 
     vm.Confirm = function () {
      vm.x = confirm("Are you sure you")
        console.log(vm.x);
      }

      function newComplaint(new_complaint) {
        complaintsFactory.saveComplaint(new_complaint).then(function(response) {
          vm.complaint = {};
          $state.go("thankyou");
        });
      }

      vm.saveComplaint = function(new_complaint) {
        vm.submitted = true;        
        if (angular.isString(new_complaint.emailId) && new_complaint.emailId) {
          newComplaint(new_complaint);
        } else {
          if (confirm("Are you sure you want to submit without email address, you won't be able to track the complaint status?")) {
            newComplaint(new_complaint);
          }
        }
      }
  });

})();