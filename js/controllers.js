var phonecatApp = angular.module('phonecatApp',[]);

phonecatApp.controller('PhoneListCtrl',function($scope){
	$scope.phones = [
		{'name':'Nexus 5',
		'snippet':'Just got faster and smarter'},
		{'name':'Moto e',
		'snippet':'smaller yet powerfull'},
		{'name':'iPhone 6',
		'snippet':'same old classy with new looks'}
	]
});