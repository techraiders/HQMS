(function () {
  "use strict";

  angular.module("hospitalApp")

    .controller("complaintController", function($scope, dataFactory, $rootScope, ionicSuperPopup, categories, subCategories, customService) {
      $scope.categories = categories;
      $scope.subCategories = subCategories;
      $scope.pageTitle = 'New Complaint';
      $scope.textAreaPlaceholder = 'Your complaint';
      var path = "complaints";

      customService.spinner_off();
 
      function newComplaint(new_complaint) {
        dataFactory.saveData(new_complaint, path).then(function(response) {
          console.log("the response is: ", response);
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
          ionicSuperPopup.show("Success!", "Thank you for writing to us, Kindly note your complaint ID " + $scope.complaintID + " for future  reference.", "success");
        };
  })
  .controller("suggestionController", function($scope, categories, subCategories, customService, dataFactory) {
    $scope.categories = categories;
    $scope.subCategories = subCategories;
    $scope.pageTitle = 'New Suggestion';
    $scope.textAreaPlaceholder = 'Your suggestion';
    customService.spinner_off();

    
  })
  .controller("appreciationController", function($scope, categories, subCategories, customService) {
    $scope.categories = categories;
    $scope.subCategories = subCategories;
    $scope.pageTitle = 'New Appreciation';
    $scope.textAreaPlaceholder = 'Your appreciation';
    customService.spinner_off();
  });

})();