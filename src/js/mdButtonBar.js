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
