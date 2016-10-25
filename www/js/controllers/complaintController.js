(function () {
  "use strict";

  angular.module("hospitalApp")

    .controller("complaintController", function(complaintsFactory, $state, $rootScope, ionicToast, ionicSuperPopup, categories, subCategories, customService) {
      var vm = this;
      vm.categories = categories;
      console.log(vm.categories);
      vm.subCategories = subCategories;

      customService._off();
 
    function showToast(msg, position, stick, disappearDelay){
      ionicToast.show(msg, position, stick, disappearDelay);
    }

      function newComplaint(new_complaint) {
        complaintsFactory.saveComplaint(new_complaint).then(function(response) {
          console.log("the response is: ", response);
          vm.complaintID = response.complaintID;
          vm.complaint = undefined;
          popup3a();
        });
      }

      function ifValidEmail (new_complaint) {
        if (angular.isString(new_complaint.emailId) && new_complaint.emailId) {
          vm.isValid = true;
          return vm.isValid;
        }
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
              title: "Are you sure to submit without email?",
              text: "can't track without email",
               type: "warning",
               showCancelButton: true,
               confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, Just submit!",
               cancelButtonText: "No, I'll give email",
               closeOnConfirm: true,
               closeOnCancel: true },
            function(isConfirm) {
               if (isConfirm) {
                  //ionicSuperPopup.show("You did it!", "You totally just did something!", "success");
                  newComplaint(new_complaint);
                  console.log("you opted not to give email");
               } else {
                  ionicSuperPopup.show("Cancelled", "You opted to give email", "error");
               }
            });
          };

          function popup3a() {
            ionicSuperPopup.show("Success!", "Thank you for writing to us, Kindly note your complaint ID " + vm.complaintID + " for future  reference.", "success");
          };

  });

})();