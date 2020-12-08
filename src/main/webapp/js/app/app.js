(function(){
	
	var app = angular.module('je', ['ngRoute', 'datePicker', 'cgBusy', 'je-paging',
                                         'je-main-workspace-controller',
                                         'je-master-jenis-pengiriman-controller',
	                                 'angularUtils.directives.dirPagination']);

	app.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl : "template/main/home.html"
		})
               
                //Jenis Pengiriman routes
                .when("/master/jenis-pengiriman", {
			templateUrl : "template/master/jenis_pengiriman_list.html",
			controller: "JenisPengirimanListController"
		})
                .when("/master/jenis-pengiriman/:id/detail", {
			templateUrl : "template/master/jenis_pengiriman_detail.html",
			controller: "JenisPengirimanDetailController"
		})
                .when("/master/jenis-pengiriman/:id/edit", {
			templateUrl : "template/master/jenis_pengiriman_save.html",
			controller: "JenisPengirimanEditController"
		})
                .when("/master/jenis-pengiriman/new", {
			templateUrl : "template/master/jenis_pengiriman_save.html",
			controller: "JenisPengirimanCreateController"
		})
                //end of Jenis Pengiriman Routes
		;
                
	});
	
	app.filter('trusted', ['$sce', function ($sce) {
	    return function(url) {
	        return $sce.trustAsResourceUrl(url);
	    };
	}]);
	
})();



