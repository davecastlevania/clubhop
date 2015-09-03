// ClubHop Controller

angular.module('clubhop.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})



.controller('ClubCtrl', function($scope) {

// City JSon data
// To Do - Get a database that can spit out JSON File and insert $HTTP request for City Data based on location

  $scope.city = 'Paris\, France',
  $scope.deals = [
    {
      name: 'Daft Punk Package',
      headline: 'Do not Miss Out',
      price: '65',
      remain: '5',
      date: new Date('2015', '11', '08'),
      start: 'time',
      img: 'img/concert1.png'
    },
    {
      name: 'Hop 10 Night Clubs',
      headline: 'Do not Miss Out',
      price: '100',
      remain: '20',
      date: new Date('2015', '9', '12'),
      start: 'time',
      img: 'img/concert2.png'
    },
    {
      name: 'Rap Package',
      headline: 'Do not Miss Out',
      price: '40',
      remain: '5',
      date: new Date('2015', '11', '08'),
      start: 'time',
      img: 'img/concert4.png'
    },
    {
      name: '5 Venue Deal',
      headline: 'Do not Miss Out',
      price: '40',
      remain: '5',
      date: new Date('2015', '11', '08'),
      start: 'time',
      img: 'img/concert5.png'
    },
    {
      name: 'Swag',
      headline: 'Swag',
      price: '40',
      remain: '5',
      date: new Date('2015', '11', '08'),
      start: 'time',
      img: 'img/concert5.png'
    }
  ]
})
