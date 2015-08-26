// Deal Card Directives 

app.directive('dealInfo', ['$rootScope', function($rootScope) {
     return {
      restrict: 'E',
      scope: {
        info: '='
        },
      templateUrl: 'js/directives/dealInfo.html'
    }}]);
