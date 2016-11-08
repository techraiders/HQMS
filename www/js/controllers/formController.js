(function () {
  "use strict";

  angular.module("hospitalApp")

    .controller("FormController", function($scope, dataFactory, $rootScope, ionicSuperPopup, categories,
      subCategories, customService, setPageVariables) {

      $scope.categories = categories;
      $scope.subCategories = subCategories;

      customService.spinner_off();

      /* SETTING PAGE VARIABLES USING setPageVariables provider made in app.state resolve property */
      $scope.pageTitle = setPageVariables.pageTitle;
      $scope.textAreaPlaceholder = setPageVariables.textAreaPlaceholder;
      $scope.path = setPageVariables.path;
 
      function newComplaint(new_complaint) {
        dataFactory.saveData(new_complaint, $scope.path).then(function(response) {
          console.log("Server Responded: ", response);
          $scope.complaintID = response.complaintID;
          $scope.complaint = undefined;
          popup3a();
        });
      }

      function hasEmail (new_complaint) {
        if (angular.isString(new_complaint.emailId) && new_complaint.emailId) {
          return true;
        }
      }

      $scope.saveData = function(new_complaint) {
        if (hasEmail(new_complaint)) {
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
            text: "You won't be able to track your complaint if you don't provide your email.",
             type: "warning",
             xyz: "abc",
             showCancelButton: true,
             confirmButtonColor: "#DD6B55",
             confirmButtonText: "Yes, Just submit!",
             cancelButtonText: "No, I'll give email",
             closeOnConfirm: true,
             closeOnCancel: true },
          function(isConfirm) {
             if (isConfirm) {
                //ionicSuperPopup.show("You did it!", "You totally just did something!", "success");
                newComplaint(new_complaint);
                console.log("you opted not to give email");
             } else {
                //ionicSuperPopup.show("Cancelled", "You opted to give email", "error");
                $scope.x = 'ng-invalid ng-touched';
                document.getElementById("emailId").focus();
             }
          });
        };

        function acknowledge() {
          if ($scope.complaintID) {
            return  "Thank you for writing to us. Kindly note your complaint ID " + $scope.complaintID + " for future  reference.";
          } else {
            return "Thank you for writing to us.";
          }
        }

        function popup3a() {
          ionicSuperPopup.show("Success!", acknowledge());
        }
  });

})();