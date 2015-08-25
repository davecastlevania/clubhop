// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('clubhop', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// Main Controller Code

.controller('ClubCtrl', function($scope) {
  $scope.city = 'Paris\, France',
  $scope.events = [
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
      name: 'Super Arena Show + 3 After Shows',
      headline: 'Do not Miss Out',
      price: '30',
      remain: '5',
      date: new Date('2015', '8', '30'),
      start: 'time',
      img: 'img/concert3.png'
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
    }
  ]
});

// Directives Code

// Services Code
