app.controller('ClubCtrl', function($scope) {
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
