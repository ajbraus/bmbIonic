angular.module('starter.controllers', [])

.controller('PostCtrl', function($scope, Post) {
  $scope.posts = Post.all();
})

.controller('PostDetailCtrl', function($scope, $stateParams, Post) {
  $scope.post = Post.get($stateParams.postId);
})

.controller('RelationshipsCtrl', function($scope, Users) {
  $scope.showFollowing = true
  $scope.users = Users.all();
})

.controller('UserDetailCtrl', function($scope, $stateParams, Users) {
  $scope.user = Users.get($stateParams.userId);
})

.controller('MessagesCtrl', function($scope) {

})

.controller('ProfileCtrl', function($scope, $stateParams, $ionicActionSheet, Users) {
  $scope.user = Users.get(0);
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
