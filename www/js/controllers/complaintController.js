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
 
      $rootScope.$on("$stateChangeStart", function(event, toState, fromState) {
        if (!confirm("Are you sure you to navigate away")) {
          event.preventDefault();
        }
      })

      vm.saveComplaint = function(new_complaint) {
        vm.submitted = true;
        if (new_complaint) {
          complaintsFactory.saveComplaint(new_complaint).then(function(response) {
          vm.complaint = {};
          $state.go("thankyou");
          })
        }
      }
  });

})();