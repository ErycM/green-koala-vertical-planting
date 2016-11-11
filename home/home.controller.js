(function() {
        angular
    .module('app')
    .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$injector= ['$timeout', 'firebaseService', '$rootScope', '$scope'];

function HomeCtrl($timeout, firebaseService, $rootScope){
  // vm = this;
  // vm.data = []; 
  // vm.updateDate = [];
  // vm.umidadeAr = [];
  // vm.temperatura = [];
  // var data = firebaseFactory.database.ref('dados/');
  // //var refumidadeAr = firebase.database().ref('umidade-ar/');
  // // var lastUpupdateDate;
  // var updateDate;
  
  // data.on('value', function(snapshot){
  //   var getupdateDate = [];
  //   var getValue = [];
  //   var values = {};
  //     $.each(snapshot.val(), function(date, value){ //Retornar nome da categoria de cada ocupação
  //       getupdateDate = date;

  //       value.data.date = date;
  //       vm.data.push(value.data); 
  //     });

  //     $.each(vm.data, function(key,value){
  //       value.date = new Date(value.date * 1000);
  //       value.date = value.date.getHours() + ':' + value.date.getMinutes()+ ':' + value.date.getSeconds();
  //       updateDate = value.date;
  //     });
  //     vm.data = vm.data.reverse();
  //     vm.data = vm.data.slice(0,5); //armazena apenas os 3 primeiros dados por timestamp
  //     vm.updateDate = updateDate;
  //     $timeout(function(){
  //         vm.data;
  //     });
    
  //     $rootScope.data = vm.data;
  // });





  



  };
})();