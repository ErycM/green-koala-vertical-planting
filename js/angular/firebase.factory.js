(function() {
	'use strict';

	angular
		.module('app')
		.factory('firebaseFactory', firebaseFactory);

	function firebaseFactory($window) {
		// Firebase config.
		// Banco de Teste
        var config = {
        apiKey: "AIzaSyBYZx2lofAGH_85_tR7AFyYYkL63AGIjGg",
        authDomain: "greenkoala-c4317.firebaseapp.com",
        databaseURL: "https://greenkoala-c4317.firebaseio.com",
        storageBucket: "greenkoala-c4317.appspot.com",
        messagingSenderId: "793257289538"
        };
        //firebase.initializeApp(config);

		var app = firebase.initializeApp(config);
		//var auth = app.auth();
	    var database = firebase.database();
	    var storage = firebase.storage();
	   // var ui = new firebaseui.auth.AuthUI(auth);

	    var myFirebase = {};
	    myFirebase.app = app;
	   //myFirebase.auth = auth;
	    myFirebase.database = database;
	    myFirebase.storage = storage;
	    // myFirebase.ui = ui;
	    // myFirebase.uiConfig = uiConfig;

		return myFirebase;
	};
})();