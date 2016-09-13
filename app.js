(function()
{
	'use strict';

	angular.module('test', [ 'mdButtonBar' ])
	.controller('testCtrl', testCtrl);

	testCtrl.$inject = [ '$scope' ]
	function testCtrl($scope)
	{
		$scope.buttonBarOptions = {
			title: 'Test button bar'
		}
	}
})();