// Club Hop Prototype

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('clubhop', ['ionic', 'clubhop.controllers'])

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

// View states
//   To Do:
//    - Get Subviews in Deal Card
//    - Get Subviews in Settings (See Settings.html To Do List)
//      - Edit Account state
//      - Edit Personal Info, E-Mail, Payment Method State
//      - Add Pop Over Social Media Integration
//    - Decided on Watching / Your Venues Feature (Sepearate or Merge)

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
    url: '/home',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('home.deals', {
      url: '/deals',
      views: {
        'menuContent': {
          templateUrl: 'templates/deals.html',
          controller: 'ClubCtrl'
        }
      }
    })
    .state('home.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'templates/account.html',
        }
      }
    })
    .state('home.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
        }
      }
    })
    .state('home.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html',
        }
      }
    })
    .state('home.venues', {
      url: '/venues',
      views: {
        'menuContent': {
          templateUrl: 'templates/venues.html',
        }
      }
    })
    .state('home.invite', {
      url: '/invite',
      views: {
        'menuContent': {
          templateUrl: 'templates/invite.html',
        }
      }
    })
    .state('home.payment', {
      url: '/payment',
      views: {
        'menuContent': {
          templateUrl: 'templates/payment.html',
        }
      }
    })
    .state('home.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
        }
      }
    })
    .state('home.watching', {
      url: '/watching',
      views: {
        'menuContent': {
          templateUrl: 'templates/watching.html',
        }
      }
    })

    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/deals');
});
