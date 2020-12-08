/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {

	var services = angular.module('je-master-jenis-pengiriman-service', [ 'ngResource' ]);

	
	services.factory('JenisPengirimanListFactory', [ '$resource', function($resource) {

		return $resource('service/master/jenis-pengiriman04262564', {}, {
			query : {
				method : 'GET',
				isArray : false
			},
			create : {
				method : 'POST'
			}
		});

	} ]);
	
	services.factory('JenisPengirimanEditFactory', [ '$resource', function($resource) {

		return $resource('service/master/jenis-pengiriman04262564/:id', {}, {
			show : {
				method : 'GET',
				params: {id: '@id'}
			},
			update : {
				method : 'PUT',
				params :{id: '@id'}
			},
			remove : {
				method : 'DELETE',
				params :{id: '@id'}
			}
		});

	} ]);
	
})();


