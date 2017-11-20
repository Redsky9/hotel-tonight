jQuery(document).ready(function($) {
  
      // Edit hotel fields
      $.fn.editable.defaults.mode = 'inline';
      $('.hotelname').editable({
        //uncomment these lines to send data on server
        pk: 1,
        url: '/post'   
      });
  
      $('.hotelwebsite').editable({
        //uncomment these lines to send data on server
        pk: 1,
        url: '/post'   
      });
  
      $('.hotelstars').editable({
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
  
      $('.hotelcountry').editable({
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
  
      $('.hotelcity').editable({
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

    });