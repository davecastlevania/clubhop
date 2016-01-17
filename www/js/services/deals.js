app.factory('DealsService', function() {
  var deals = [
    {
      name: 'Package 5 (Includes 3 Events)',
      id: 1,
      headline: 'Do not Miss Out',
      price: '65',
      remain: '5',
      date: new Date('2015', '11', '08'),
      start: 'time',
      img: 'img/concert4.png',
      ending: '12',
      reserved: '.80',
      dealId: 1
    },
    {
      name: 'Package 2 (Includes 2 Events)',
      id: 2,
      headline: 'Do not Miss Out',
      price: '20',
      remain: '20',
      date: new Date('2015', '11', '08'),
      start: 'time',
      img: 'img/concert2.png',
      ending: '6',
      reserved: '.5',
      dealId: 2
    },
    {
      name: 'Package 3 (Includes 5 Events)',
      id: 3,
      headline: 'Do not Miss Out',
      price: '65',
      remain: '50',
      date: new Date('2015', '11', '08'),
      start: 'time',
      img: 'img/concert3.png',
      ending: '48',
      reserved: '.1',
      dealId: 3
    }
   ]

  return {
    deals: deals,
    getDeal: function(index) {
      return deals[index]
    }
  }
})
