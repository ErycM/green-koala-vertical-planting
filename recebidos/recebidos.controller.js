(function() {
        angular
    .module('app')
    .controller('RecebidosCtrl', RecebidosCtrl);

     RecebidosCtrl.$injector= ['$rootScope', '$timeout', 'firebaseService'];

    function RecebidosCtrl($rootScope, $timeout, firebaseService){
        vm = this;
        var updateDate;
        vm.data;
        vm.updateDate;

        vm.data = firebaseService.data;


        $timeout(function(){
            vm.data;
        }, 80);

        





    }

})();