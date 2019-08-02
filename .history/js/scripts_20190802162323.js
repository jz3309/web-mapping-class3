mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.794247, 40.689238],
    zoom: 13
});

map.addControl(new mapboxgl.NavigationControl());

//load  all the itmes to console
stationdata.forEach(function(station) {

    var stationcolor = 'orange';

    new mapboxgl.Marker({
            color: stationcolor,
        })
        .setLngLat([station.Lng, station.Lat])
        .setPopup(new mapboxgl.Popup({ openOnClick: false, offset: 40 })
            .setText(`Station Name:${station.stops}`))
        .addTo(map);
})