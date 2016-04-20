angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {

  
 $scope.device='88888'
 var push = new Ionic.Push({
      "debug": true
    });

    push.register(function(token) {

     
      console.log('.....',$scope.device)

      console.log("Device token:",token.token);
      push.saveToken(token);  // persist the token in the Ionic Platform
    });


$scope.enviar = function(){

console.log('Enviando...')

 var user = Ionic.User.current();

if (user.isAuthenticated()) {
  console.log('Logeado papi...')
} else {
  // we need to show a login or sign up form
}


var jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNWYwYzc5NS00ODA1LTRmNTktODFkYS1iYjFmZDQ0OTI0MjQifQ.0rye6m3x8RU-uIKF-VrzPwEyEIMiS1JxO2ZHdlHTpmk';
var user_ids = ['DEV-5cb3f445-f3ea-4530-8479-3b141b836cce'];
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
    "tokens": user_ids,
    "profile": profile,
    "notification": {
      "title": "Hi",
      "message": "Hello world!",
      "android": {
        "title": "Hey",
        "message": "Hello Android!"
      },
      "ios": {
        "title": "Howdy",
        "message": "Hello iOS!"
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
