
mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.98, 40.70],
  zoom: 9.5
});

map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Construction on the Washington Monument began in 1848.');

var marker = new mapboxgl.Marker()
  .setLngLat([-73.969145,40.669116])
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);


//load  all the itmes to console
studentpizzashops.forEach(function(studentdata) {

  var thisstudentscolor = 'steelblue';
  if (studentdata.nyuprogram === 'wagner') thisstudentscolor = 'orange';
  if (studentdata.nyuprogram === 'cusp') thisstudentscolor = 'purple';
  if (studentdata.nyuprogram === 'adjunct') thisstudentscolor = 'green';
  if (studentdata.nyuprogram === 'global liberal studies') thisstudentscolor = 'yellow';

  new mapboxgl.Marker({
    color: thisstudentscolor,
  })
    .setLngLat([studentdata.lng, studentdata.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40})
      .setText(`${studentdata.Name} says their favorite pizza shop is ${studentdata.favoritepizzashop}`))
    .addto(map);
})
