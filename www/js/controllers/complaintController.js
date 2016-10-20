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
          vm.complaint = undefined;
          showToast("Your complaint was successfully posted", "top", false, 3000);
          $state.go("thankyou");
        });
      }

      function ifValidEmail (new_complaint) {
        if (angular.isString(new_complaint.emailId) && new_complaint.emailId) {
          vm.isEmail = true;
          return vm.isEmail;
        }
      }

      vm.print = function(new_complaint) {
        console.log(ifValidEmail(new_complaint));
      }

      vm.saveComplaint = function(new_complaint) {
        if (ifValidEmail(new_complaint)) {
          newComplaint(new_complaint);
        }
        else {
          if (popup5(new_complaint)) {
            //newComplaint(new_complaint);
          }
        }
      };


        function popup5(new_complaint) {
            ionicSuperPopup.show({
              title: "Are you sure?",
              text: "This will do something again!",
               type: "warning",
               showCancelButton: true,
               confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, do that thing!",
               cancelButtonText: "No, don't!",
               closeOnConfirm: true,
               closeOnCancel: false },
            function(isConfirm) {
               if (isConfirm) {
                  //ionicSuperPopup.show("You did it!", "You totally just did something!", "success");
                  newComplaint(new_complaint);
                  console.log("you opted not to give email");
               } else {
                  ionicSuperPopup.show("Cancelled", "Pew, you totally didn't do anything!", "error");
               }
            });
          };

  });

})();