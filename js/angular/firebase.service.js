(function() {
    angular
        .module('app')
        .service('firebaseService', firebaseService);

    firebaseService.$injector= ['firebaseFactory', '$timeout', '$rootScope'];

    function firebaseService(firebaseFactory, $timeout, $rootScope) {
        vm = this;
        vm.data = []; 
        vm.updateDate = [];
        vm.umidadeAr = [];
        vm.temperatura = [];
        var data = firebaseFactory.database.ref('dados/');
        var updateDate;
        //var refumidadeAr = firebase.database().ref('umidade-ar/');
        // var lastUpupdateDate;
        data.on('value', function(snapshot){
            var getupdateDate = [];
            var getValue = [];
            var values = {};
            console.log("Atualização do banco");
            $.each(snapshot.val(), function(date, value){ //Retornar nome da categoria de cada ocupação
                getupdateDate = date;
                value.data.date = date;
                vm.data.push(value.data); 
            });
            
            // vm.data = vm.data.reverse();
            // vm.data = vm.data.slice(0,5); //armazena apenas os 3 primeiros dados por timestamp
            
            $timeout(function(){
                vm.data;
            });

        });
    }

})();