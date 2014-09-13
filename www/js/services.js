angular.module('bankmybiz.services', [])

 .factory('AuthService', function ($rootScope, User, HOST) {
   return {
     checkLogin: function() {
       // Check if logged in and fire events
       if(this.isLoggedIn()) {
         $rootScope.$broadcast('app.loggedIn'); 
       } else {
         $rootScope.$broadcast('app.loggedOut'); 
       }
     },
     isLoggedIn: function() {
       // Check auth token here from localStorage
       if (localStorage.getItem("bmb_auth_token") === null || localStorage.getItem("bmb_auth_token") === "undefined") {
         return false
       } else {
         return true
       };
     },
     logout: function(email, pass) {
      // Same thing, log out user
      $rootScope.$broadcast('app.loggedOut');
     }
   }
 })

 .factory('User', function ($resource, HOST) {
   return $resource(HOST + '/users/:id', { id: '@id' }, {
     update: { method: 'PUT' },
     sign_up: { url: HOST + '/users', method: 'POST', isArray: false },
     sign_in: { url: HOST + '/users/sign_in', method: 'POST', isArray: false },
     sign_out: { url: HOST + '/users/sign_out', method: 'POST', isArray: false },
     cancel: { url: HOST + '/users/cancel', method: 'GET', isArray: false }
   })
 })

.factory("Relationship", function($resource, HOST) {
  return $resource(HOST + '/relationships/:id', { id: '@id'})
  })

.factory("Post", function($resource, HOST) {
  return $resource(HOST + '/posts/:id', { id: '@id'}, {
    vote_up: { url: HOST + '/posts/:id/vote_up', method: "GET", isArray: false},
    vote_down: { url: HOST + '/posts/:id/vote_down', method: "GET", isArray: false}
  })
  // Post.query => '/posts' (GET) -> index
  // Post.save => '/posts' (POST) -> create
  // Post.delete => '/posts/:id' (DELETE) -> destroy
  // Post.get => '/posts/:id' (GET) -> show
})

.factory("Answer", function($resource, HOST) {
  return $resource(HOST + '/answers/:id', { id: '@id'}, {
    vote_up: { url: HOST + '/answers/:id/vote_up', method: "GET", isArray: false},
    vote_down: { url: HOST + '/answers/:id/vote_down', method: "GET", isArray: false}
  })
  // Answer.query => '/posts' (GET) -> index
  // Answer.save => '/posts' (POST) -> create
  // Answer.delete => '/posts/:id' (DELETE) -> destroy
  // Answer.get => '/posts/:id' (GET) -> show
})

.factory("Comment", function($resource, HOST) {
  return $resource(HOST + '/comments/:commentableId', { id: '@id'}, {
    vote_up: { url: HOST + '/comments/:id/vote_up', method: "GET", isArray: false},
    vote_down: { url: HOST + '/comments/:id/vote_down', method: "GET", isArray: false}
  })
  // Answer.query => '/posts' (GET) -> index
  // Answer.save => '/posts' (POST) -> create
  // Answer.delete => '/posts/:id' (DELETE) -> destroy
  // Answer.get => '/posts/:id' (GET) -> show
})

//change it to receiving array
.factory("Message", function($resource, HOST) {
  return $resource(HOST + '/messages/:id', { id: '@id'})
  })

.factory('Vote', function() {
  // Might use a resource here that re
});
