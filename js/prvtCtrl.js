var app = angular.module('twitterClone');

app.controller('prvtCtrl', function($scope, prvtService){
  //In your controller you'll have a getParseData function and a postData function, but should be placed on $scope.

  //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to 
  //your controllers $scope as messages ($scope.messages)
 $scope.getParseData = function(){
   prvtService.getData()
   .then(function(data){
   $scope.messages = data.data.results;
 })
 }


  //The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.
 $scope.postData = function(message){
  prvtService.postData($scope.message);
  $scope.message='';
 }



  //uncomment this code when your getParseData function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  setInterval(function(){
    $scope.getParseData();
  }, 1000)
})