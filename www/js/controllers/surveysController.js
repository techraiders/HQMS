(function () {
  "use strict";

  angular
    .module("hospitalApp")
      .controller("surveysController", function(surveys, customService, $http) {
        var vm = this;
        vm.surveys = surveys;

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
            "question": "How much is your expense?",
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
        //console.log(vm.sliderQuestions);
        customService.spinner_off();
      });
})();