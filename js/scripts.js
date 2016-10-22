
//google.maps.event.addDomListener(window, 'load', initialize);

  function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: {lat: 52.35, lng: -1.17},
      scrollwheel: true,
      zoom: 8
    });

    var markers = [
      ['Isabelle', 52.35, -1.17],
      ['Jimmy', 52.55, -1.17]
    ];

    var infoWindowContent = [
      ['HI IM ISABELLE'],
      ['HI IM JIMMY']
    ];

    var infoWindow = new google.maps.InfoWindow(), marker, i;

    for (i = 0; i < markers.length; i++) {
      var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      marker = new google.maps.Marker({
        position: position,
        map: map,
        title: markers[i][0]
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        }
      })(marker, i));
    }


  }


/*function initialize() {


  var latlng = new google.maps.LatLng(52.3731, 4.8922);

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 13
  };

  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);

};*/
/* end google maps -----------------------------------------------------*/
