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

.factory("Post", function() {
  var posts = [
    { id: 0,
      type: "Question",
      title: "At what stage in a business is it best to seek financing?",
      description: "I am founder of a Beverage Startup unlike any other on the market. Recently, I have finished product development and testing and now have a great tasting and effective product. I am pre-revenue at this point and I have a budget that would allow bootstrapping. What is the best and most effective way to approach large retailers to pitch and sell my product? At what point is it recommended to seek a loan? At what point does it become attractive for investors?",
      answers_count: 3,
      views: 136,
      vote_count: 3,
      user: {
        pic: "http://img1.wikia.nocookie.net/__cb20100604223615/shrek/images/8/87/Shrek_fierce.jpg",
        name: "Jackie W.",
        location:"WI", 
        position:"Banker", 
        org_name:"Wells Fargo",
        id: 0,
      },
      tags: [
        { id: 0, name: "#" },
        { id: 1, name: "#Money" },
        { id: 2, name: "#Funding"},
        { id: 0, name: "#Startup1" },
        { id: 1, name: "#Money2" },
        { id: 2, name: "#Funding3"},
            ],
      answers: [
        { id: 0, 
          body: "Daniel, I once worked on a beverage startup and found that the best strategy is to seek to do only one part of the problem. Instead of doing product, supply, distribution, branding, and marketing, just choose one of those. So if you have a recipe for an excellent beverage, talk to some private label suppliers and private distributors. If you can outsource those two parts then you can focus on product and marketing. Do you have any mentors?",
          user: {
             pic: "http://upload.wikimedia.org/wikipedia/en/thumb/e/e8/WC-2014-Brasil.svg/719px-WC-2014-Brasil.svg.png",
             name: "Adam Meeks",
             location:"NM", 
             position:"Checker", 
             org_name:"Bank of China",
            },
        },

        { id: 1, body: "Adam, Thank you for the advice, it makes a lot of sense and I will look into private labeling and distribution. I currently do not have a mentor or someone with industry experience that would be able to offer advice." },
        { id: 2, body: "#Funding is not what normal people would do- they borrow and never pay it back."},
        { id: 0, body: "#Oh really?" },
        { id: 1, body: "Yes that is actually the real case. Don't go to business school for that." },
        { id: 2, body: "All right I won't."},
            ],
    },
    { id: 1,
      type: "Milestone",
      title: " a business is it best to seek financing?",
      description: "I am founde Startup unlike any other on the market. Recently, I have finished product development and testing and now have a great tasting and effective product. I am pre-revenue at this point and I have a budget that would allow bootstrapping. What is the best and most effective way to approach large retailers to pitch and sell my product? At what point is it recommended to seek a loan? At what point does it become attractive for investors?",
      answers_count: 3,
      views: 136,
      vote_count: 3,
      user: {
        pic: "http://img1.wikia.nocookie.net/__cb20100604223615/shrek/images/8/87/Shrek_fierce.jpg",
        name: "Daniel S.",
        location:"WI", 
        position:"Banker", 
        org_name:"Wells Fargo",
      },
      tags: [
        { id: 0, name: "#" },
        { id: 1, name: "#Money" },
        { id: 2, name: "#Funding"},
        { id: 0, name: "#Startup1" },
        { id: 1, name: "#Money2" },
        { id: 2, name: "#Funding3"},
            ],
    },
    { id: 2,
      type: "Annoucement",
      title: "At wk financing?",
      description: "I am founder of a Beverage Startup unlike any other on the market. Recently, I have finished product development and testing and now have a great tasting and effective product. I am pre-revenue at this point and I have a budget that would allow bootstrapping. What is the best and most effective way to approach large retailers to pitch and sell my product? At what point is it recommended to seek a loan? At what point does it become attractive for investors?",
      answers_count: 3,
      views: 136,
      vote_count: 3,
      user: {
        pic: "http://img1.wikia.nocookie.net/__cb20100604223615/shrek/images/8/87/Shrek_fierce.jpg",
        name: "Daniel S.",
        location:"WI", 
        position:"Banker", 
        org_name:"Wells Fargo",
      },
      tags: [
        { id: 0, name: "#" },
        { id: 1, name: "#Money" },
        { id: 2, name: "#Funding"},
        { id: 0, name: "#Startup1" },
        { id: 1, name: "#Money2" },
        { id: 2, name: "#Funding3"},
            ],
    },
  

  ];

  return {
    all: function() {
      return posts;
    },
    get: function(postId) {
      // Simple index lookup
      return posts[postId];
    }
  }

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
