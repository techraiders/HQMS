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
            surveys: function(dataFactory, customService) {
              customService.spinner_on();
              return dataFactory.getData('questions');
            }
          }
        })
        .state('slider', {
          url: '/slider',
          templateUrl: 'templates/slider.html',
          controller: 'surveysController as surveysCtrl',
          resolve: {
            surveys: function(dataFactory, customService) {
              customService.spinner_on();
              return dataFactory.getData('questions');
            }
          }
        })
        .state('star', {
          url: '/star',
          templateUrl: 'templates/star.html',
          controller: 'surveysController as surveysCtrl',
          resolve: {
            surveys: function(dataFactory, customService) {
              customService.spinner_on();
              return dataFactory.getData('questions');
            }
          }
        })
        .state('newcomplaint', {
          url: '/new-complaint',
          templateUrl: 'templates/form.html',
          controller: "FormController",
          resolve: {
            setPageVariables: function() {
              return {
                "pageTitle" : "New Complaint",
                "textAreaPlaceholder" : 'Your complaint',
                "path" : "complaints"
              }
            },
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
          controller: "FormController",
          resolve: {
            setPageVariables: function() {
              return {
                "pageTitle" : "New Suggestion",
                "textAreaPlaceholder" : "Your suggestion",
                "path" : "suggestions"
              }
            },
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
          controller: "FormController",
          resolve: {
            setPageVariables: function() {
              return {
                "pageTitle" : "New Appreciation",
                "textAreaPlaceholder" : 'Your appreciation',
                "path" : "appreciations"
              }
            },
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

