angular.module('starter.services', [])
/**
 * A simple example service that returns some data.
 */
.factory('Users', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var users = [
    { id: 0, 
      name: 'Scruff McGruff', 
      location:"WI", 
      position:"Banker", 
      company:"Wells Fargo", 
      pic:"http://img1.wikia.nocookie.net/__cb20100604223615/shrek/images/8/87/Shrek_fierce.jpg",
      credit:"98",
      post_count:"9",
      tags: [
        { id: 0, name: "#Startup" },
        { id: 1, name: "#Money" },
        { id: 2, name: "#Funding"},
        { id: 0, name: "#Startup1" },
        { id: 1, name: "#Money2" },
        { id: 2, name: "#Funding3"},
            ],
      about:"BRU beer flavor enhancer is a product unlike any other on the market today. BRU is a liquid flavor enhancer designed specifically for Beer. Consumers use BRU to add a fruit, or ingredient flavor to a beer that they feel may be otherwise lacking in flavor. BRU Makes Boring Beer Better!",
      goals:"My goals on bankmybiz.com are to connect with like minded individuals and entrepreneurs and create mutually benefiting relationships.",
      fundingSought:"$10k - $49k",
      fundingPurpose:"Starting a Business",
      fundingPriority:"Best Banker Relationship",
      businessType:"LLC",
      customers:[
        {id: 0, name: "Local Consumers"},
        {id: 1, name: "National Consumers"},
        {id: 2, name: "Local Businesses"},
        {id: 3, name: "National Businesses"},
        ],
      businessAge:"0-2",
      employees:"0-6",
      ar:"Low",
      revenueSize:"Pre-Revenue",
      industry:"Food & Beverage",
      doesBusinessIn:"Entire U.S."},
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return users;
    },
    get: function(userId) {
      // Simple index lookup
      return users[userId];
    }
  }
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
