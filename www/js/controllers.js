angular.module('bankmybiz.controllers', [])


.controller('LoginCtrl', function($scope, $state, $timeout, AuthService, User) {

  $timeout(function() {
    AuthService.checkLogin();
  });

  $scope.$on('app.loggedIn', function(event) {
    console.log('LOGGED IN!');
    $state.go("tab.post");
  });

  $scope.$on('app.loggedOut', function(event) {
   console.log('NOT LOGGED IN!');
  });

  $scope.registerEmail = function() {
    $state.go('register-email')
  }

  $scope.user = {
    'email': '',
    'password': ''

  };

  $scope.login = function() {
    User.sign_in({}, $scope.user,
      function(data) {
        localStorage.setItem("bmb_auth_token", data.auth_token);     
        $state.go('tab.post');
      },
      function(data) {
        var message = data.data.error
        console.log(message);
        navigator.notification.alert(message, null, 'Alert', 'OK');
      }
    );
  };

})


.controller('RegisterEmailCtrl', function($scope, $state, User) {
  
  $scope.user = {
    'first name': '',
    'last name': '',
    'email': '',
    'org_name': '',
    'zipcode': '',
    'position': '',
    'password': ''
  };

  $scope.signup = function() {
    User.sign_up({},{"user": $scope.user},
      function(data) {
        localStorage.setItem("bmb_auth_token", data.auth_token);     
        $state.go('tab.post');
      },
      function(data) {
        var message = data.data.error
        console.log(message);
        navigator.notification.alert(message, null, 'Alert', 'OK');
      }
    );
  };


})


.controller('PostCtrl', function($scope, Post) {
  Post.query(function(data) {
    $scope.posts = data
  });

  $scope.newSubscription = function() {
    $state.go('subscription-new');
  }
})

.controller('PostDetailCtrl', function($scope, $stateParams, $ionicModal, $location, Post, Vote) {
  
  $scope.post = Post.get({ id: $stateParams.postId });

  var vote = {
    type: "Post",
    post_id: $scope.post.id
  }
  $scope.votePostUp = function() {
    $scope.post.vote_count = $scope.post.vote_count += 1
    // Vote.save({}, post_id, function() {
    //   console.log("Successly Voted Post Up")
    // });
  }

  $scope.votePostDown = function() {
    $scope.post.vote_count = $scope.post.vote_count -= 1
    // Vote.save({}, post_id, function() {
    //   console.log("Successly Voted Post Up")
    // });
  }

  $ionicModal.fromTemplateUrl('modal_advice.html', function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true,
    scope: $scope
  });

  $scope.createAdvice = function() {
    console.log('Create Post_Advice', $scope.post);
    $location.path("/post-detail/:postId")
    $scope.modal.hide();
  };
})

.controller('PostCommentCtrl', function($scope, $stateParams, Post, User) {
  $scope.post = Post.get($stateParams.postId);
  $scope.user = User.get($stateParams.userId)
})


.controller('RelationshipsCtrl', function($scope, Relationship) {
  console.log(localStorage.getItem("bmb_auth_token"))

  var auth_token = localStorage.getItem("bmb_auth_token")
  $scope.relationship = Relationship.get({id: auth_token});

})

.controller('UserDetailCtrl', function($scope, $stateParams, $ionicModal, $location, User) {

  $scope.user = User.get({ id: $stateParams.userId });

  $ionicModal.fromTemplateUrl('modal_contact.html', function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true,
    scope: $scope
  });

  $scope.createMessage = function() {
    console.log('Create Post_Advice', $scope.post);
    $location.path("/user/:userId")
    $scope.modal.hide();
  };
})

.controller('MessagesCtrl', function($scope, Message) {
  $scope.messages = Message.all()

})

.controller('MessageDetailCtrl', function($scope, $stateParams, Message) {
  $scope.message = Message.get($stateParams.messageId);
})

.controller('ProfileCtrl', function($scope, $stateParams, $state, $ionicActionSheet, User) {
  console.log(localStorage.getItem("bmb_auth_token"))
  var auth_token = localStorage.getItem("bmb_auth_token")
  $scope.user = User.get({id: auth_token});
  $scope.settings = function() {
    $state.go('tab.settings');
  }
})
  
.controller('ProfileSettingsCtrl', function($scope, $state, $ionicPopup) {

  $scope.login = function() {
    User.sign_out({}, $scope.user,
      function(data) {   
        $state.go('tab.post');
      },
      function(data) {
        var message = data.data.error
        console.log(message);
        navigator.notification.alert(message, null, 'Alert', 'OK');
      }
    );
  };
  $scope.logoutConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Logout Confirmation',
       template: 'Are you sure you want to logout?'
     });
     confirmPopup.then(function(res) {
       if(res) {
        localStorage.clear();
        $state.go('login');
         console.log('User logout confirmed');
       } else {
         $state.go('tab.settings') 
         console.log('User logout canceled');
       }
     });
   };


})
    
.controller('TabsCtrl', function($scope, $state, $ionicModal, $location, Post) {

  $scope.post = {};

  $ionicModal.fromTemplateUrl('modal.html', function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true,
    scope: $scope
  });

  $scope.createPost = function() {
      Post.save({},$scope.post,
        function(data) {
          localStorage.setItem("bmb_auth_token", data.auth_token);     
          $state.go('tab.post');
        },
        function(data) {
          console.log(data)
          
          // var message = data.data.error
          // console.log(message);
          // navigator.notification.alert(message, null, 'Alert', 'OK');
        
        }
      );
    $scope.modal.hide();
  };

});
