(function() {
    'use strict';

    angular.module('app', [
       'ui.router', 'chart.js'
    ])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/home");
        //$locationProvider.html5Mode(true);
        $stateProvider
				// .state('dashboard', {
				// 	url: "/",
				// 	templateUrl: "index.html",
				// 	controller: 'FirebaseCtrl',
				// 	controllerAs: 'fb'
				// })
                .state('home', {
					url: "/home",
					templateUrl: "home/home.html",
					controller: 'HomeCtrl',
					controllerAs: 'fb'
				})
                .state('recebidos', {
					url: "/recebidos",
					templateUrl: "recebidos/recebidos.html",
					controller: 'RecebidosCtrl',
					controllerAs: 'tb'
				})
                .state('chart', {
					url: "/chart",
					templateUrl: "chart/chart.html",
					controller: 'ChartCtrl',
					controllerAs: 'chart'
				})
                
                ;


    }).run(function(firebaseService){
        (function (ChartJsProvider) {
            ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
        }); 


    }).filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    });
    ;
    // .config(['$controllerProvider',
    //     function ($controllerProvider) {
    //         $controllerProvider.allowGlobals();
    //     }
    // ]);





})();