var app = angular.module('twitterClone');

app.controller('mainCtrl', function($scope, parseService){
  //In your controller you'll have a getParseData function and a postData function, but should be placed on $scope.

  //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to 
  //your controllers $scope as messages ($scope.messages)


  var getParseData = function(direction){
    parseService.getData(direction)
      .then(function(data){
        $scope.messages = data.data.results

      })
  }
 

  // $scope.parseDate = function(message){
  //   message.createdAt = Date.parse(message.createdAt);
  //   console.log(message.createdAt)
  // }

  //The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box(message)),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.
  $scope.postData = function(){
    parseService.postData($scope.message);
    $scope.message = ''
  }

$scope.reverseData = function(){
  if($scope.direction === "-"){
    $scope.direction = "";
  } else {
    $scope.direction = "-";
  }
  getParseData($scope.direction);
}
  


  //uncomment this code when your getParseData function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  setInterval(function(){
   getParseData($scope.direction);
  }, 1000)
});