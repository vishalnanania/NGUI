/* use strict */
var app = angular.module('NGUI', ['ui.bootstrap']);
	app.controller('mainController', function ($scope){
		$scope.user={};
		$scope.tabs = [{ title:'Step:1', content:'content-one'}, 
					   { title:'Step:2', content:'content-two', disabled: true },
					   { title:'Step:3', content:'content-three', disabled: true }];
		$scope.data = {
    					availableOptions: [
					      {id:'1', name: 'Boston'},
					      {id:'2', name: 'New York'},
					      {id:'3', name: 'Chicago'},
					      {id:'4', name: 'San Francisco'}	
					    ]
    	};			
    	$scope.user.location = {id:'2', name: 'New York'};   
		$scope.change = function(i){
			$scope.tabs[i].active = true;
			$scope.tabs[i].disabled = false;
		};	
		$scope.done = function(form){
			$scope.user = {};
			$scope.tabs[1].disabled = true;
			$scope.tabs[2].disabled = true;
			$scope.tabs[0].active = true;
		};

		$scope.today = function() {
    		$scope.dt = new Date(); 
  		};
  		$scope.today();
  		$scope.clear = function () {
    		$scope.dt = null;
  		};
  		$scope.toggleMin = function() {
    		$scope.minDate1 = $scope.minDate1 ? null : new Date();
    		var nextDate = new Date();
    		if($scope.user.depart)
    			$scope.minDate2 = $scope.minDate2 ? null : nextDate.setDate($scope.user.depart.getDate() + 1);
    		else	
    			$scope.minDate2 = $scope.minDate2 ? null : nextDate.setDate(nextDate.getDate() + 1);
  		};
  		$scope.toggleMin();
  		$scope.open1 = function($event) {
    		$scope.status1.opened = true;
    		$scope.user.return = null;
  		};
  		$scope.open2 = function($event) {
    		$scope.status2.opened = true;
    		var nextDate = new Date();
    		$scope.minDate2 = nextDate.setDate($scope.user.depart.getDate() + 1);
  		};
  		$scope.dateOptions = {
    		formatYear: 'yy',
    		startingDay: 1
  		};
  		$scope.formats = ['dd-MM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  		$scope.format = $scope.formats[0];
  		$scope.status1 = {
    		opened: false
  		};
  		$scope.status2 = {
    		opened: false
  		};
  		var tomorrow = new Date();
  		tomorrow.setDate(tomorrow.getDate() + 1);
  		var afterTomorrow = new Date();
  		afterTomorrow.setDate(tomorrow.getDate() + 2);
  		$scope.events =
    	[
	      {
	        date: tomorrow,
	        status: 'full'
	      },
	      {
	        date: afterTomorrow,
	        status: 'partially'
	      }
    	];

  		$scope.getDayClass = function(date, mode) {
    	if (mode === 'day') {
      		var dayToCheck = new Date(date).setHours(0,0,0,0);
      		for (var i=0;i<$scope.events.length;i++){
        		var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
        		if (dayToCheck === currentDay) {
          			return $scope.events[i].status;
        		}
      		}
    	}
    return '';
  };	   
	});
	
	app.directive('contentDir', function(){
		return {
			restrict: 'E',
			link: function(scope, element, attrs) {
            	scope.contentUrl = "resources/html/" + attrs.content + ".html";
        	},
        	template: '<div ng-include="contentUrl"></div>'
		};
	});
