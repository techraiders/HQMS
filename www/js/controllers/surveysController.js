(function () {
  "use strict";

  angular
    .module("hospitalApp")
      .controller("surveysController", function(surveys, customService) {
        var vm = this;
        vm.surveys = surveys;
        var rating = " Excellent, Very Good, Good, Average, Poor";
        vm.rating = rating.split(',');
        console.log("Retrieved surveys", vm.surveys);
        angular.forEach(vm.surveys, function(value) {
        	console.log(value);
        	value.rating = vm.rating;
        	//console.log(index);
        });
        vm.sliderQuestions = [
          {
            "id": 9,
            "question": "How much is your budget?",
            "title": "Plese drag below to answer",
            "category": 9,
            "survey": 1,
            "question_type": "range",
          },
          {
            "id": 10,
            "question": "How much is your budget?",
            "title": "Plese drag below to answer",
            "category": 9,
            "survey": 1,
            "question_type": "range",
          },
          {
            "id": 10,
            "question": "How much is your budget?",
            "title": "Plese drag below to answer",
            "category": 9,
            "survey": 1,
            "question_type": "range",
          }
        ];
        console.log(vm.sliderQuestions);
        customService.spinner_off();
      });
})();