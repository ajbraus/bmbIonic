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


// .factory('Post', function ($resource, HOST) {
//   return $resource(HOST + '/posts/:id', { id: '@id' })
// })

// query
// get
// save
// delete

// Post.query(function(data) {
//   $scope.posts = data
// });

// <div ng-repeat="post in posts">
// {{}}
// </div>


// .factory("Post", function() {
  
//   var posts = [
//     { id: 0,
//       type: "Question",
//       title: "At what stage in a business is it best to seek financing?",
//       description: "I am founder of a Beverage Startup unlike any other on the market. Recently, I have finished product development and testing and now have a great tasting and effective product. I am pre-revenue at this point and I have a budget that would allow bootstrapping. What is the best and most effective way to approach large retailers to pitch and sell my product? At what point is it recommended to seek a loan? At what point does it become attractive for investors?",
//       answers_count: "3",
//       views: "136",
//       user: {
//         pic: "http://img1.wikia.nocookie.net/__cb20100604223615/shrek/images/8/87/Shrek_fierce.jpg",
//         name: "Daniel S.",
//         location:"WI", 
//         position:"Banker", 
//         org_name:"Wells Fargo",
//       },
//       tags: [
//         { id: 0, name: "#" },
//         { id: 1, name: "#Money" },
//         { id: 2, name: "#Funding"},
//         { id: 0, name: "#Startup1" },
//         { id: 1, name: "#Money2" },
//         { id: 2, name: "#Funding3"},
//             ],
//     },
//     { id: 1,
//       type: "Milestone",
//       title: " a business is it best to seek financing?",
//       description: "I am founde Startup unlike any other on the market. Recently, I have finished product development and testing and now have a great tasting and effective product. I am pre-revenue at this point and I have a budget that would allow bootstrapping. What is the best and most effective way to approach large retailers to pitch and sell my product? At what point is it recommended to seek a loan? At what point does it become attractive for investors?",
//       answers_count: "3",
//       views: "136",
//       user: {
//         pic: "http://img1.wikia.nocookie.net/__cb20100604223615/shrek/images/8/87/Shrek_fierce.jpg",
//         name: "Daniel S.",
//         location:"WI", 
//         position:"Banker", 
//         org_name:"Wells Fargo",
//       },
//       tags: [
//         { id: 0, name: "#" },
//         { id: 1, name: "#Money" },
//         { id: 2, name: "#Funding"},
//         { id: 0, name: "#Startup1" },
//         { id: 1, name: "#Money2" },
//         { id: 2, name: "#Funding3"},
//             ],
//     },
//     { id: 2,
//       type: "Annoucement",
//       title: "At wk financing?",
//       description: "I am founder of a Beverage Startup unlike any other on the market. Recently, I have finished product development and testing and now have a great tasting and effective product. I am pre-revenue at this point and I have a budget that would allow bootstrapping. What is the best and most effective way to approach large retailers to pitch and sell my product? At what point is it recommended to seek a loan? At what point does it become attractive for investors?",
//       answers_count: "3",
//       views: "136",
//       user: {
//         pic: "http://img1.wikia.nocookie.net/__cb20100604223615/shrek/images/8/87/Shrek_fierce.jpg",
//         name: "Daniel S.",
//         location:"WI", 
//         position:"Banker", 
//         org_name:"Wells Fargo",
//       },
//       tags: [
//         { id: 0, name: "#" },
//         { id: 1, name: "#Money" },
//         { id: 2, name: "#Funding"},
//         { id: 0, name: "#Startup1" },
//         { id: 1, name: "#Money2" },
//         { id: 2, name: "#Funding3"},
//             ],
//     },
  

//   ];

.factory("Post", function($resource, HOST) {
  return $resource(HOST + '/posts/:id', { id: '@id'})
  // Post.query => '/posts' (GET) -> index
  // Post.save => '/posts' (POST) -> create
  // Post.delete => '/posts/:id' (DELETE) -> destroy
  // Post.get => '/posts/:id' (GET) -> show
})
>>>>>>> ea1f7e954754ce060fde99b62ecc627f23c6175b

.factory('Message', function() {
  var messages = {
    id: 0,
    name: "cool",
    message: "hello Minxuan Cao",
  }
  return {
    all: function() {
      return messages;
    },
    get: function(messageId) {
      // Simple index lookup
      return messages[messageId];
    }
  }
})

.factory('Vote', function() {
  // Might use a resource here that re
});
