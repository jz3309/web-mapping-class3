
mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-112.055367,40.639749],
  zoom: 11.5
});

map.addControl(new mapboxgl.NavigationControl());

//load  all the itmes to console
stationdata.forEach(function(station) {

  var stationcolor = 'steelblue';
  if (station.City === "SALT LAKE CITY") stationcolor = 'orange';
  if (station.City === "MIDVALE") stationcolor = 'purple';
  if (station.City === "MURRAY") stationcolor = 'green';
  if (station.City === "SOUTH JORDAN") stationcolor = 'red';


  new mapboxgl.Marker({
    color: stationcolor;
    background-size: cover;
    width: 50px;
    height: 50px;
    cursor: pointer;

  })
    .setLngLat([station.Lng, station.Lat])
    .setPopup(new mapboxgl.Popup({openOnClick: false, offset: 40})
      .setHTML(
        '<h4>'+${station.Address}'</h4><br/><p>'+ ${station.Price}'</p>'))
    .addTo(map);
})
