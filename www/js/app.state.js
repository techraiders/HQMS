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
        .state('survey', {
          url: '/survey',
          templateUrl: 'templates/survey.html',
          controller: 'surveysController as surveysCtrl',
          resolve: {
            surveys: function(surveysFactory, customService) {
              customService.spinner_on();
              return surveysFactory.getQuestions();
            }
          }
        })
        .state('slider', {
          url: '/slider',
          templateUrl: 'templates/slider.html',
          controller: 'surveysController as surveysCtrl',
          resolve: {
            surveys: function(surveysFactory, customService) {
              customService.spinner_on();
              return surveysFactory.getQuestions();
            }
          }
        })
        .state('newcomplaint', {
          url: '/new-complaint',
          templateUrl: 'templates/form.html',
          controller: "complaintController as complaintCtrl",
          resolve: {
            categories: function(dataFactory, customService) {
              customService.spinner_on();
              return dataFactory.getData('category');
            },
            subCategories: function(dataFactory,  customService) {
              customService.spinner_on();
              return dataFactory.getData('subcategory');
            }
          }
        })
        .state('newsuggestion', {
          url: '/new-suggestion',
          templateUrl: 'templates/form.html',
          controller: "suggestionController as suggestionCtrl",
          resolve: {
            categories: function(dataFactory, customService) {
              customService.spinner_on();
              return dataFactory.getData('category');
            },
            subCategories: function(dataFactory,  customService) {
              customService.spinner_on();
              return dataFactory.getData('subcategory');
            }
          }
        })
        .state('newappreciation', {
          url: '/new-appreciation',
          templateUrl: 'templates/form.html',
          controller: "appreciationController as appreciationCtrl",
          resolve: {
            categories: function(dataFactory, customService) {
              customService.spinner_on();
              return dataFactory.getData('category');
            },
            subCategories: function(dataFactory,  customService) {
              customService.spinner_on();
              return dataFactory.getData('subcategory');
            }
          }
        })
      $urlRouterProvider.otherwise('menu');
    });
})();

