jQuery(document).ready(function($) {

      // Edit hotel fields
      $.fn.editable.defaults.mode = 'inline';
      $('#hotelName').editable({
        //uncomment these lines to send data on server
        pk: 1,
        url: '/post'   
      });
  
      $('#hotelWebsite').editable({
        //uncomment these lines to send data on server
        pk: 1,
        url: '/post'   
      });
  
      $('#hotelStars').editable({
        source: [
          {value: 1, text: '1'},
          {value: 2, text: '2'},
          {value: 3, text: '3'},
          {value: 4, text: '4'},
          {value: 5, text: '5'}
        ],
        pk: 1,
        url: '/post'
      });

      $('#hotelAddress').editable({
        //uncomment these lines to send data on server
        pk: 1,
        url: '/post'   
      });
  
      $('#country').editable({
        value: 2,
        source: [
          {value: 1, text: 'Romania'},
          {value: 2, text: 'Bulgaria'},
          {value: 3, text: 'Serbia'},
          {value: 4, text: 'Hungary'},
          {value: 5, text: 'Germany'}
        ],
        url: '/post'
      });
  
      $('#city').editable({
        value: 2, 
        source: [
          {value: 1, text: 'Timisoara'},
          {value: 2, text: 'Cluj-Napoca'},
          {value: 3, text: 'Bucharest'},
          {value: 4, text: 'Iasi'},
          {value: 5, text: 'Sibiu'}
        ],
        pk: 1,
        url: '/post'
      });

      $('#intro').editable({
        //uncomment these lines to send data on server
        pk: 1,
        url: '/post'   
      });

      $('#content').editable({
        //uncomment these lines to send data on server
        pk: 1,
        url: '/post'   
      });

///////////////////////////////////////////////////////////////////////////////

      $('#Basic').editable({
        source: [
          {value: 1, text: 'Tv'},
          {value: 2, text: 'Sat'},
          {value: 3, text: 'Minibar'},
          {value: 4, text: 'Heating'},
          {value: 5, text: 'Bathroom'},
          {value: 6, text: 'Balcony'},
          {value: 7, text: 'AirConditioning'}
        ],
        pk: 1,
        url: '/post'
      });

      $('#Attractions').editable({
        source: [
          {value: 1, text: 'Sea'},
          {value: 2, text: 'River'},
          {value: 3, text: 'Mountains'},
          {value: 4, text: 'Lake'},
          {value: 5, text: 'Forest'}
        ],
        pk: 1,
        url: '/post'
      });

      $('#Recreation').editable({
        source: [
          {value: 1, text: 'Tenis'},
          {value: 2, text: 'SwimingPool'},
          {value: 3, text: 'Playground'},
          {value: 4, text: 'Footbal'}
        ],
        pk: 1,
        url: '/post'
      });

      $('#Wellness').editable({
        source: [
          {value: 1, text: 'TherapeuticCare'},
          {value: 2, text: 'Sauna'},
          {value: 3, text: 'Gym'},
          {value: 4, text: 'Massage'}
        ],
        pk: 1,
        url: '/post'
      });

      $('#Available').editable({
        source: [
          {value: 1, text: 'Wifi'},
          {value: 2, text: 'Safe'},
          {value: 3, text: 'Reception'},
          {value: 4, text: 'Parking'},
          {value: 5, text: 'Internet'}
        ],
        pk: 1,
        url: '/post'
      });

      $('#Entertainment').editable({
        source: [
          {value: 1, text: 'Restaurant'},
          {value: 2, text: 'Pub'},
          {value: 3, text: 'Pizzeria'},
          {value: 4, text: 'InternetCafe'},
          {value: 5, text: 'DanceHall'},
          {value: 5, text: 'Cinema'},
          {value: 5, text: 'Cafe'}
        ],
        pk: 1,
        url: '/post'
      });

      $('#Utilities').editable({
        source: [
          {value: 1, text: 'Trainstation'},
          {value: 2, text: 'TownCenter'},
          {value: 3, text: 'Pharmacy'},
          {value: 4, text: 'GroceryStore'},
          {value: 5, text: 'BusStop'},
          {value: 6, text: 'Bank'},
          {value: 7, text: 'Atm'}
        ],
        pk: 1,
        url: '/post'
      });

      $('#Amenties').editable({
        source: [
          {value: 1, text: 'Pets'},
          {value: 2, text: 'No-Pets'}
        ],
        pk: 1,
        url: '/post'
      });
    });