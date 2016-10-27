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

angular.module('mdButtonBar').run(['$templateCache', function($templateCache) {$templateCache.put('/templates/mdButtonBar.html','<!--\n@authors Javier Camp\xF3n Pichardo\n@date 25/7/2016\n-->\n\n<style scoped>\n\tmd-button-bar button md-icon[md-font-set] {\n\t\tfont-size: 24px;\n\t}\n\n\tmd-button-bar button[disabled="disabled"] md-icon[md-font-set] {\n\t\tcolor: rgba(0, 0, 0, 0.25) !important;\n\t}\n</style>\n\n<md-button\n\tng-class="button.class"\n\tng-repeat="button in $ctrl.options.buttons"\n\tng-style="button.style"\n\tng-disabled="!$ctrl.isButtonEnabled($index)"\n\tng-attr-aria-label="{{ button.label }}"\n\tng-attr-ng-roles="{{ button.roles }}"\n\tng-attr-ng-roles-comparer="{{ button.rolesComparer }}"\n\tng-click="$ctrl.onButtonClick({ button: button })">\n\t<md-tooltip\n\t\tng-if="button.tooltip"\n\t\tng-class="button.tooltip.class"\n\t\tng-attr-md-direction="{{ button.tooltip.direction }}"\n\t\tng-attr-md-delay="button.tooltip.delay || 0"\n\t\tng-style="button.tooltip.style">\n\t\t{{ button.tooltip.text || button.tooltip }}\n\t</md-tooltip>\n\t<md-icon\n\t\tng-if="button.icon && !button.icon.svgIcon"\n\t\tng-class="button.icon.class"\n\t\tng-attr-md-font-set="{{ button.icon.fontSet }}"\n\t\tng-attr-md-font-icon="{{ button.icon.fontIcon }}"\n\t\tng-attr-md-svg-src="{{ button.icon.svgSrc }}"\n\t\tng-style="button.icon.style">\n\t</md-icon>\n\t<md-icon\n\t\tng-if="button.icon && button.icon.svgIcon"\n\t\tng-class="button.icon.class"\n\t\tng-attr-md-svg-icon="{{ button.icon.svgIcon }}"\n\t\tng-style="button.icon.style">\n\t</md-icon>\n\t<span ng-if="button.text">{{ button.text }}</span>\n</md-button>');}]);