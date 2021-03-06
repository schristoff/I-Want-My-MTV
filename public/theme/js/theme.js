    var themeApp = angular.module('themeApp', ['ngRoute']);

    // configure our routes
    themeApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'theme/pages/home.html',
                controller  : 'mainController'
            })

            // route for the profile page
            .when('/profile', {
                templateUrl : 'theme/pages/profile.html',
                controller  : 'profileController'
            })

            // route for the genre page
            .when('/genres', {
                templateUrl : 'theme/pages/genres.html',
                controller  : 'genreController'
            });
    });

    // create the controller and inject Angular's $scope
    themeApp.controller('mainController', function($scope) {
      $scope.message = 'Welcome Home';
        // create a message to display in our view
    });

    themeApp.controller('profileController', function($scope) {
    });

    themeApp.controller('genreController', function($scope) {
    });
