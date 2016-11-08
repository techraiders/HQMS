(function () {
  "use strict";

  angular
    .module("hospitalApp")
      .controller("surveysController", function(surveys, customService, $http, dataFactory) {
        var vm = this;
        vm.starQuestions = vm.sliderQuestions = vm.surveys = surveys;
        var path = "answer";

        //console.log(vm.surveys);

        vm.val = function(choice) {
          console.log(choice);
        }

        /*vm.sliderQuestions = [
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
        ]; */

        vm.ratingsObject = {
          iconOn : 'ion-ios-star',
          iconOff : 'ion-ios-star-outline',
          iconOnColor: 'rgb(200, 210, 0)',
          iconOffColor:  'rgb(200, 100, 100)',
          rating:  2,
          minRating:1,
          callback: function(rating) {
            vm.ratingsCallback(rating);
          }
        };

        vm.ratingsCallback = function(rating) {
          //console.log('Selected rating is : ', rating);
          var obj = {"question": 11, "answer": rating};

          dataFactory.saveData(obj, path).then(function(response) {
            console.log("Server Responded: ", response);
          });
        };

        customService.spinner_off();
      });
})();