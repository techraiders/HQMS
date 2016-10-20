(function () {
  "use strict";

  angular.module("hospitalApp")

    .controller("complaintController", function($http, complaintsFactory, $state, $rootScope, ionicToast, ionicSuperPopup) {
      var vm = this;
      complaintsFactory.getCategory().then(function(response) {
        vm.categories = response;
      });

      complaintsFactory.getSubCategory().then(function(response) {
        vm.subCategories = response;
      });
 
    function showToast(x, position, stick, disappearDelay){
      ionicToast.show(msg, position, stick, disappearDelay);
    }

      function newComplaint(new_complaint) {
        complaintsFactory.saveComplaint(new_complaint).then(function(response) {
          vm.complaint = {};
          showToast("Your complaint was successfully posted", "top", false, 3000);
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
      };


        vm.popup5 = function () {
            ionicSuperPopup.show({
              title: "Are you sure?",
              text: "This will do something again!",
               type: "warning",
               showCancelButton: true,
               confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, do that thing!",
               cancelButtonText: "No, don't!",
               closeOnConfirm: false,
               closeOnCancel: false },
            function(isConfirm) {
               if (isConfirm) {
                  ionicSuperPopup.show("You did it!", "You totally just did something!", "success");
               } else {
                  ionicSuperPopup.show("Cancelled", "Pew, you totally didn't do anything!", "error");
               }
            });
          };

  });

})();