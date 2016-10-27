(function()
{
	'use strict';

	angular.module('test', [ 'mdButtonBar' ])
	.controller('testCtrl', testCtrl);

	function testCtrl($scope)
	{
		var ctrl = this;

		ctrl.enable = false;

		ctrl.buttonBarOptions = {
			buttons: [
				{
					name   : 'button1',
					enable : function() { return ctrl.enable; },
					class  : 'md-icon-button md-raised',
					icon   : { fontSet: 'fa', fontIcon: 'fa-plus', style: { color: 'green' } },
					tooltip: 'Click to show an alert.'
				},
				{
					name   : 'button2',
					class  : 'md-icon-button md-raised',
					icon   : { fontSet: 'fa', fontIcon: 'fa-minus', style: { color: 'red' } },
					tooltip: {
						text     : 'Click to {{ ctrl.enable ? "disable" : "enable" }} the first button.',
						direction: 'left'
					}
				}
			]
		};

		ctrl.onButtonClick = function(button) {
			switch (button.name) {
				case 'button1':
					alert('Has pulsado el botón: ' + button.name);
					break;
				case 'button2':
					ctrl.enable = !ctrl.enable;
					break;
			}
		};
	}
})();