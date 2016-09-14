/**
 * Proyecto Auditoría Interna
 * @authors Javier Campón Pichardo
 * @date 25/7/2016
 * @copyright Copyright (c) 2016 Junta Central Electoral de la República Dominicana. Todos los derechos reservados.
 *
 * Barra de botones configurable.
 */
(function () { 'use strict';
	angular.module('mdButtonBar', [ 'ngAria', 'ngAnimate', 'ngMaterial' ])
		.component('mdButtonBar' ,{
			controller: 'mdButtonBarCtrl',
			templateUrl: '/templates/mdButtonBar.html',
			bindings: {
				options: '<'
			}
		})
		.controller('mdButtonBarCtrl', mdButtonBarCtrl);

		function mdButtonBarCtrl()
		{
			//TODO: Inicializar y establecer valores por defecto.
		}
})();

angular.module('mdButtonBar').run(['$templateCache', function($templateCache) {$templateCache.put('/templates/mdButtonBar.html','\n<style scoped>\n\tmd-button-bar button md-icon[md-font-set] {\n\t\tfont-size: 24px;\n\t}\n\n\tmd-button-bar .md-icon-button[disabled="disabled"] md-icon[md-font-set] {\n\t\tcolor: rgba(0, 0, 0, 0.25);\n\t}\n</style>\n\n<md-toolbar ng-class="$ctrl.options.class" ng-attr-md-whiteframe="{{ $ctrl.options.elevation || -1 }}">\n\t<div class="md-toolbar-tools">\n\t\t<span\n\t\t\tclass="md-title"\n\t\t\tng-class="$ctrl.options.title.class"\n\t\t\tng-style="$ctrl.options.title.style"\n\t\t\tflex>\n\t\t\t{{ $ctrl.options.title.text || $ctrl.options.title }}\n\t\t</span>\n\t\t<md-button\n\t\t\tng-class="button.class"\n\t\t\tng-repeat="button in $ctrl.options.buttons"\n\t\t\tng-style="button.style"\n\t\t\tng-disabled="button.enable === false"\n\t\t\tng-attr-aria-label="{{ button.label }}">\n\t\t\t<md-tooltip\n\t\t\t\tng-if="button.tooltip"\n\t\t\t\tng-class="button.tooltip.class"\n\t\t\t\tng-attr-md-direction="{{ button.tooltip.direction }}"\n\t\t\t\tng-attr-md-delay="button.tooltip.delay || 0"\n\t\t\t\tng-style="button.tooltip.style">\n\t\t\t\t{{ button.tooltip.text || button.tooltip }}\n\t\t\t</md-tooltip>\n\t\t\t<md-icon\n\t\t\t\tng-if="button.icon && !button.icon.svgIcon"\n\t\t\t\tng-class="button.icon.class"\n\t\t\t\tng-attr-md-font-set="{{ button.icon.fontSet }}"\n\t\t\t\tng-attr-md-font-icon="{{ button.icon.fontIcon }}"\n\t\t\t\tng-attr-md-svg-src="{{ button.icon.svgSrc }}"\n\t\t\t\tng-style="button.icon.style">\n\t\t\t</md-icon>\n\t\t\t<md-icon\n\t\t\t\tng-if="button.icon && button.icon.svgIcon"\n\t\t\t\tng-class="button.icon.class"\n\t\t\t\tng-attr-md-svg-icon="{{ button.icon.svgIcon }}"\n\t\t\t\tng-style="button.icon.style">\n\t\t\t</md-icon>\n\t\t\t<span ng-if="button.text">{{ button.text }}</span>\n\t\t</md-button>\n\t</div>\n</md-toolbar>\n');}]);