var app=angular.module('myapp',['ngRoute']);
// npm i -g http-server
// http-server

app.config(function($routeProvider,$locationProvider){
	console.log('Hello config');
	// $routeProvider.when(string,object)
	// String->Path, Object -> Information(content,controller)
	$routeProvider.when('/home',{
		templateUrl:'views/home.html',
		controller:'homeController'
	});
	$routeProvider.when('/download',{
		templateUrl:'views/downloadnotes.html',
		controller:'downloadnotesController'
	});
	$routeProvider.when('/submit',{
		templateUrl:'views/submitfeedback.html',
		controller:'submitFeedbackController'
	});
	$routeProvider.when('/editfeedback',{
		templateUrl:'views/editFeedback.html',
		controller:'editfeedbackController'
	});
	$routeProvider.when('/viewschedule',{
		templateUrl:'views/viewschedule.html',
		controller:'viewScheduleController'
	});
	$routeProvider.when('/uploadnotes',{
		templateUrl:'views/uploadnotes.html',
		controller:'uploadnotesController'
	});
	$routeProvider.when('/reports',{
		templateUrl:'views/reports.html',
		controller:'reportsController'
	});
	$routeProvider.when('/stats',{
		templateUrl:'views/stats.html',
		controller:'statsController'
	});
	$routeProvider.when('/prepschedule',{
		templateUrl:'views/prepareschedule.html',
		controller:'prepareScheduleController'
	});
	$routeProvider.when('/showschedule',{
		templateUrl:'views/showschedule.html',
		controller:'showScheduleController'
	});
	
	$locationProvider.html5Mode(true);
});


app.controller('homeController',function($scope,$q,$location,$http){
	console.log('Home Controller called!!');
	
});




app.controller('downloadnotesController',function($scope,$q,$http){
	console.log('Download Notes Controller called!!');
	
});
app.controller('submitFeedbackController',function($scope,$q,$http,$routeParams){
	console.log('submit feedback Controller called!');
	$scope.submitForm=function(){
        $http.post('/studentapi/fillfeedback',$scope.formdata).
        then(function(response) {
            console.log("posted successfully");
        }).catch(function(response) {
            console.error("error in posting");
        })
    
}		
	
});
app.controller('editfeedbackController',function($scope,$q,$http){
	console.log('edit feedback Controller called!!');
	$scope.subForm=function(){
		console.log($scope.user);
		$http({
			method:'POST',
			url:'https://zenways-contact.herokuapp.com/api/contact',
			headers:{
			'key':'ZENWAYS01MAYANK'
			},
			data:$scope.user
		}).then(function(response){
			console.log(response);
			console.log(alert("Form submitted successfully!"));
		},function(resposne){
			
		})
	}
	

});
app.controller('viewScheduleController',function($scope,$q,$http){
	console.log('View Schedule Controller called!!');

	

});
app.controller('uploadnotesController',function($scope,$q,$http,$routeParams){
	console.log('uploadnotesController');
		

});

app.controller('reportsController',function($scope,$q,$http,$routeParams){
	console.log('reportsController called!');
$scope.options = {
    chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 55
        },
        x: function(d){ return d.label; },
        y: function(d){ return d.value; },
        showValues: true,
        valueFormat: function(d){
            return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
            axisLabel: 'X Axis'
        },
        yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30
        }
    }
};
$scope.data = [{
    key: "Cumulative Return",
    values: [
        { "label" : "A" , "value" : -29.765957771107 },
        { "label" : "B" , "value" : 0 },
        { "label" : "C" , "value" : 32.807804682612 },
        { "label" : "D" , "value" : 196.45946739256 },
        { "label" : "E" , "value" : 0.19434030906893 },
        { "label" : "F" , "value" : -98.079782601442 },
        { "label" : "G" , "value" : -13.925743130903 },
        { "label" : "H" , "value" : -5.1387322875705 }
    ]
}];

});

app.controller('statsController',function($scope,$q,$http,$routeParams){
	console.log('statsController called!');
		

});

app.controller('prepareScheduleController',function($scope,$q,$http,$routeParams){
	console.log('prepareschedule Controller called!');
		

});

app.controller('showScheduleController',function($scope,$q,$http,$routeParams){
	console.log('showController called!');
		

});
