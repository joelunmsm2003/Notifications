angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {

$scope.enviar=function(){


var jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNWYwYzc5NS00ODA1LTRmNTktODFkYS1iYjFmZDQ0OTI0MjQifQ.0rye6m3x8RU-uIKF-VrzPwEyEIMiS1JxO2ZHdlHTpmk';
var tokens = ['DEV-709e75ab-117e-466e-a756-b65def2c21e3'];
var profile = 'peru';

// Build the request object
var req = {
  method: 'POST',
  url: 'https://api.ionic.io/push/notifications',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + jwt
  },
  data: {
    "tokens": tokens,
    "profile": profile,
    "notification": {
      "title": "Hi",
      "message": "Hello world!",
      "android": {
        "title": "Hey",
        "message": "Hello Android!"
      }
    }
  }
};

// Make the API call
$http(req).success(function(resp){
  // Handle success
  console.log("Ionic Push: Push success", resp);
}).error(function(error){
  // Handle error 
  console.log("Ionic Push: Push error", error);
});


}




})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
