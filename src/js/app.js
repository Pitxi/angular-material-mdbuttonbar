(function()
{
	'use strict';

	angular.module('test', [ 'mdButtonBar' ])
	.controller('testCtrl', testCtrl);

	testCtrl.$inject = [ '$scope' ]
	function testCtrl($scope)
	{
		$scope.buttonBarOptions = {
			buttons: [
				{
					name   : 'addButton',
					enable : function() { return true; },
					class  : 'md-icon-button md-raised',
					icon   : { fontSet: 'fa', fontIcon: 'fa-plus', style: { color: 'green' } },
					tooltip: 'Añadir'
				}
			]
		}

		$scope.onButtonClick = function(button) {
			alert('Has pulsado el botón: ' + button.name);
		}
	}
})();