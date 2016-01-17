// ClubHop Controller

angular.module('clubhop.controllers', [])

app.controller('ClubCtrl', function($scope, DealsService) {

// City JSon data
// To Do - Get a database that can spit out JSON File and insert $HTTP request for City Data based on location

  $scope.city = 'Paris\, France',

  $scope.deals = DealsService.deals
})
