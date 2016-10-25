(function () {
  "use strict";

  angular
    .module("hospitalApp")
      .controller("surveysController", function(surveys, customService) {
        var vm = this;
        vm.surveys = surveys;
        var rating = "Excellent, Very Good, Good, Average, Poor";
        vm.rating = rating.split(',');
        console.log("Retrieved surveys", vm.surveys);
        angular.forEach(vm.surveys, function(value) {
        	console.log(value);
        	value.rating = vm.rating;
        	//console.log(index);
        });
        customService._off();
      });
})();