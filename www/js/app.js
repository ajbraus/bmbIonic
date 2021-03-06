// Ionic bankmybiz App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'bankmybiz' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'bankmybiz.services' is found in services.js
// 'bankmybiz.controllers' is found in controllers.js
angular.module('bankmybiz', ['ionic', 'ngResource', 'bankmybiz.controllers',  'bankmybiz.services', 'bankmybiz.interceptors'])

.constant('HOST', 'http://www.bankmybiz.com/api/v1')


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: "TabsCtrl"
    })

    // Each tab has its own nav history stack:

    .state('tab.post', {
      url: '/post',
      views: {
        'tab-post': {
          templateUrl: 'templates/tab-post.html',
          controller: 'PostCtrl'
        }
      }
    })

    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
    })


    .state('register-email', {
      url: "/register-email",
      templateUrl: "templates/register-email.html",
      controller: 'RegisterEmailCtrl'
    })
    
    .state('tab.post-detail', {
      url: '/post-detail/:postId',
      views: {
        'tab-post': {
          templateUrl: 'templates/post-detail.html',
          controller: 'PostDetailCtrl'
        }
      }
    })

    .state('tab.post-user', {
      url: '/post-user/:userId',
      views: {
        'tab-post': {
          templateUrl: 'templates/post-user.html',
          controller: 'UserDetailCtrl'
        }
      }
    })


    .state('tab.post-answer-comment', {
      url: '/post-answer-comment/:postId',
      views: {
        'tab-post': {
          templateUrl: 'templates/post-answer-comment.html',
          controller: 'PostDetailCtrl'
        }
      }
    })

    .state('tab.post-comment', {
      url: '/post-comment/:postId',
      views: {
        'tab-post': {
          templateUrl: 'templates/post-comment.html',
          controller: 'PostDetailCtrl'
        }
      }
    })

    .state('tab.relationships', {
      url: '/relationships',
      views: {
        'tab-relationships': {
          templateUrl: 'templates/tab-relationships.html',
          controller: 'RelationshipsCtrl'
        }
      }
    })

    .state('tab.messages', {
      url: '/messages',
      views: {
        'tab-messages': {
          templateUrl: 'templates/tab-messages.html',
          controller: 'MessagesCtrl'
        }
      }
    })

    .state('tab.message-detail', {
      url: '/message/:messageId',
      views: {
        'tab-messages': {
          templateUrl: 'templates/message-detail.html',
          controller: 'MessageDetailCtrl'
        }
      }
    })


    .state('tab.user-detail', {
      url: '/user/:userId',
      views: {
        'tab-relationships': {
          templateUrl: 'templates/user-detail.html',
          controller: 'UserDetailCtrl'
        }
      }
    })

    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('tab.settings', {
      url: '/profile-settings',
      views: {
        'tab-profile': {
          templateUrl: 'templates/profile-settings.html',
          controller: 'ProfileSettingsCtrl'
        }
      }
    })

    .state('tab.agreement', {
      url: '/settings-agreement',
      views: {
        'tab-profile': {
          templateUrl: 'templates/settings-agreement.html',
        }
      }
    })

    .state('tab.about', {
      url: '/settings-about',
      views: {
        'tab-profile': {
          templateUrl: 'templates/settings-about.html',
        }
      }
    })

    .state('tab.update-profile', {
      url: '/settings-update-profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/settings-update-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
