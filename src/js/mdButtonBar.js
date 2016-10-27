/**
 * @authors Javier Campón Pichardo
 * @date 25/7/2016
 */
(function () {
	'use strict';

	/**
	 * Barra de botones configurable.
	 */
	angular.module('mdButtonBar', [ 'ngAria', 'ngAnimate', 'ngMaterial' ])
		.component('mdButtonBar' ,{
			controller: 'mdButtonBarCtrl',
			templateUrl: '/templates/mdButtonBar.html',
			bindings: {
				options: '<',
				onButtonClick: '&'
			}
		})
		.controller('mdButtonBarCtrl', mdButtonBarCtrl);

		function mdButtonBarCtrl()
		{
			this.$onInit = function () {
				if (!this.options) {
					this.options = {};
				}

				if (!this.options.buttons) {
					this.options.buttons = [];
				}

				for (var index = 0; index < this.options.buttons.length; ++index) {
					if (this.options.buttons[index].enable === undefined) {
						this.options.buttons[index].enable = true;
					}
				}
			};

			/**
			 * Habilita o inhabilita un botón atendiendo a su propiedad @c enable
			 * @param index {Number} El índice del botón a comprobar.
			 * @returns {Boolean} @c true si el botón está habilitado o @c false en caso contrario.
			 */
			this.isButtonEnabled = function(index) {
				var enableProperty = this.options.buttons[index].enable;

				return angular.isFunction(enableProperty) ? enableProperty() : !!enableProperty;
			};
		}
})();
