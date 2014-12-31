var phonecatApp = angular.module('phonecatApp',[]);

phonecatApp.controller('PhoneListCtrl',function($scope){
	$scope.phones = [
		{'name':'Nexus 5',
		'snippet':'Just got faster and smarter',
		'new':'2'},
		{'name':'Moto e',
		'snippet':'smaller yet powerfull',
		'new':'3'},
		{'name':'iPhone 6',
		'snippet':'same old classy with new looks',
		'new':'4'},
		{'name':'Samsung',
		'snippet':'no difference same old design',
		'new':'1'}
	]
	
	$scope.orderProp = 'new';
});

phonecatApp.controller('Uname',function($scope){
	$scope.uname = "Srinivas";
});