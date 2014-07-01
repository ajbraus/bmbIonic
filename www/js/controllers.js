angular.module('starter.controllers', [])


.controller('LoginCtrl', function($scope, $state ) {

  $scope.loginEmail = function() {
    $state.go('login-email')
  }
})

.controller('LoginEmailCtrl', function($scope, $state) {

$scope.loginCheck = function() {
  $state.go('tab.post')
}

})

.controller('PostCtrl', function($scope, Post) {
  Post.query(function(data) {
    $scope.posts = data
  });

  $scope.newSubscription = function() {
    $state.go('subscription-new');
  }
})

.controller('PostUserCtrl', function($scope, $stateParams, Post, Users) {
  $scope.post = Post.get($stateParams.postId);
  $scope.user = Users.get($stateParams.userId)
})

.controller('PostDetailCtrl', function($scope, $stateParams, $ionicModal, $location, Post, Vote) {
  $scope.post = Post.get($stateParams.postId);

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

.controller('PostCommentCtrl', function($scope, $stateParams, Post, Users) {
  $scope.post = Post.get($stateParams.postId);
  $scope.user = Users.get($stateParams.userId)
})


.controller('RelationshipsCtrl', function($scope, Users) {
  $scope.showFollowing = true
  $scope.users = Users.all();
})

.controller('UserDetailCtrl', function($scope, $stateParams, $ionicModal, $location, Users) {
  $scope.user = Users.get($stateParams.userId);

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

.controller('ProfileCtrl', function($scope, $stateParams, $state, $ionicActionSheet, Users) {
  $scope.user = Users.get(0);
  $scope.settings = function() {
    $state.go('tab.settings');
  }
})
  
.controller('ProfileSettingsCtrl', function() {
})


    
.controller('TabsCtrl', function($scope, $ionicModal, $location) {

  $scope.post = {};

  $ionicModal.fromTemplateUrl('modal.html', function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true,
    scope: $scope
  });

  $scope.createPost = function() {
    console.log('Create Post', $scope.post);
    $location.path("/tab/post")
    $scope.modal.hide();
  };

});
