(function() {
  "use strict";
  angular.module("hospitalApp")
    .config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider){
      $urlMatcherFactoryProvider.caseInsensitive(true);
      $stateProvider
        .state('menu', {
          url: '/menu',
          templateUrl: 'templates/menu.html',
          controller: 'menuController as menuCtrl'
        })
        .state('newcomplaint', {
          url: '/new-complaint',
          templateUrl: 'templates/newcomplaint.html',
          controller: "complaintController as complaintCtrl",
          resolve: {
            categories: function(complaintsFactory, customService) {
              customService._on();
              return complaintsFactory.getCategory();
            },
            subCategories: function(complaintsFactory) {
              return complaintsFactory.getSubCategory();
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

