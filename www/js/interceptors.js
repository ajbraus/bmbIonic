'use strict';

angular.module('bankmybiz.interceptors', []).
  config( function ($provide, $httpProvider) {
    // register the interceptor as a service
    $provide.factory('AuthHttpInterceptor', function ($q, HOST, $location, $rootScope) {
     return {
       // optional method
       'request': function(config) {
    	  // Check if there's network connection:
    	  // http://plugins.cordova.io/#/package/org.apache.cordova.network-information
      	// var networkState = navigator.network.connection.type;
      	// if (networkState == Connection.NONE) {
        //   var message = "No internet connection!" 
        //   console.log(message);
      	//   return navigator.notification.alert(message, null, 'Alert', 'OK');
      	// }
        if ((new RegExp(HOST)).test(config.url)) {
          //console.log('Hi, Im an intercepter for a Request!');
          //config.url += "&" + "auth_token=" + localStorage.getItem('bmb_auth_token');
          if (config.params != undefined) {
            config.params.auth_token = localStorage.getItem('bmb_auth_token');  
          } else {
            config.params = { 'auth_token' : localStorage.getItem('bmb_auth_token')};
          }
          // $rootScope.showLoading();
        }
        //console.log('Request parameters: ' + angular.toJson(config.params));
         // do something on success
         return config || $q.when(config);
       },
       // optional method
       'response': function(response) {
         // $rootScope.hideLoading();
         return response || $q.when(response);
       },
       // optional method
      'responseError': function(rejection) {
        // $rootScope.hideLoading();
         // do something on error
         if (rejection.status == 401) {
           localStorage.removeItem('bmb_auth_token');
           $rootScope.$broadcast('app.loggedOut'); 
           $location.path('/login'); 
         }
         // if (canRecover(rejection)) {
         //   return responseOrNewPromise;
         // }
         return $q.reject(rejection);
       }
     };
    });
    $httpProvider.interceptors.push('AuthHttpInterceptor');

  });