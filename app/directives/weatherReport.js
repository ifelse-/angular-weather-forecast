//DIRECTIVES
weatherApp.directive('weatherReport', function(){
	return {
		  restrict: 'E',
		  templateUrl: 'app/directives/weatherReport.html',
		  replace: true,
		  scope: {
			  weatherDay: "=", //Object
			  convertToStandard: "&", //Function 
			  convertToDate: "&", //Function 
			  dateFormat: "@" //String
			}
		}
});