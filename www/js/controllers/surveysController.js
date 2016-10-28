(function () {
  "use strict";

  angular
    .module("hospitalApp")
      .controller("surveysController", function(surveys, customService, $http) {
        var vm = this;
        vm.surveys = surveys;


        vm.val = function(choice) {
          console.log(choice);
        }

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

        vm.starQuestions = [
          {
            "id": 9,
            "question": "Write here question for star based rating.",
            "title": "Please rate this service by choosing below starts.",
            "category": 9,
            "survey": 1,
            "question_type": "range",
            "choices":['1', '2', '3', '4', '5']
          },{
            "id": 9,
            "question": "Write here question for star based rating.",
            "title": "Please rate this service by choosing below starts.",
            "category": 9,
            "survey": 1,
            "question_type": "range",
            "choices":['1', '2', '3', '4', '5']
          },{
            "id": 9,
            "question": "Write here question for star based rating.",
            "title": "Please rate this service by choosing below starts.",
            "category": 9,
            "survey": 1,
            "question_type": "range",
            "choices":['1', '2', '3', '4', '5']
          },{
            "id": 9,
            "question": "Write here question for star based rating.",
            "title": "Please rate this service by choosing below starts.",
            "category": 9,
            "survey": 1,
            "question_type": "range",
            "choices":['1', '2', '3', '4', '5']
          }
        ];

        //console.log(vm.sliderQuestions);
        customService.spinner_off();
      });
})();