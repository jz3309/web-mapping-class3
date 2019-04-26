
mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-112.055367,40.639749],
  zoom: 9.5
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
    color: stationcolor
  })
    .setLngLat([station.Lng, station.Lat])
    .setPopup(new mapboxgl.Popup({openOnClick: false, offset: 40})
      .setText(`${station.Address}Emissions test price:${station.Price}`))
    .addTo(map);
})
