(function() {
  "use strict";
  angular.module("hospitalApp")
    .config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider){
      $urlMatcherFactoryProvider.caseInsensitive(true);
      $stateProvider
        .state('menu', {
          url: '/menu',
          templateUrl: 'templates/menu.html'
        })
        .state('newcomplaint', {
          url: '/new-complaint',
          templateUrl: 'templates/newcomplaint.html',
          controller: "complaintController as complaintCtrl",
          resolve: {
            categories: function(complaintsFactory) {
              return complaintsFactory.getCategory();
            }
          }
        })
        .state('survey', {
          url: '/survey',
          templateUrl: 'templates/survey.html',
          controller: 'surveyController as surveyCtrl'
        })
      $urlRouterProvider.otherwise('menu');
    });
})();

