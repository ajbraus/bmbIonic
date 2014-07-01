angular.module('starter.services', [])
/**
 * A simple example service that returns some data.
 */


.factory("Users", function($resource, HOST) {
  return $resource(HOST + '/users/:id', { id: '@id'})
  })

.factory("Post", function($resource, HOST) {
  return $resource(HOST + '/posts/:id', { id: '@id'})
  // Post.query => '/posts' (GET) -> index
  // Post.save => '/posts' (POST) -> create
  // Post.delete => '/posts/:id' (DELETE) -> destroy
  // Post.get => '/posts/:id' (GET) -> show
})

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
