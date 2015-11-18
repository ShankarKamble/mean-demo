angular.module('UserChat.system').controller('HeaderController', ['$scope', 'Global','$location', function ($scope, Global, $location) {
    $scope.global = Global;
// Header Menu
    $scope.menu = [
    {
        "title": "Contact",
        "link": "Contact"
    },{
        "title": "Users",
        "link": "User"
    }];

    $scope.isCollapsed = false;
    if(!$scope.global.authenticated){
    	$location.path('/');
    }
}]);