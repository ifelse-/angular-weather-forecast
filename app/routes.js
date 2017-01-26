// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'app/pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'app/pages/forecast.htm',
        controller: 'forecastController'
    })
	
	.when('/forecast/:days', {
        templateUrl: 'app/pages/forecast.htm',
        controller: 'forecastController'
    })
    
});
