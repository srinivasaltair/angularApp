var phonecatApp = angular.module('phonecatApp',[]);

phonecatApp.controller('PhoneListCtrl',function($scope){
	$scope.phones = [
		{'name':'Nexus 5',
		'snippet':'Just got faster and smarter'},
		{'name':'Moto e',
		'snippet':'smaller yet powerfull'},
		{'name':'iPhone 6',
		'snippet':'same old classy with new looks'},
		{'name':'Samsung',
		'snippet':'no difference same old design'}
	]
});

phonecatApp.controller('Uname',function($scope){
	$scope.uname = "Srinivas";
});