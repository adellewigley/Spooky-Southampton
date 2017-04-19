L.mapbox.accessToken = 'pk.eyJ1IjoiYWRlbGxlIiwiYSI6ImNqMW5vZDVwMzAwMHozM21uMXpmbXJ1aHgifQ.K_m0PK-ksYwOnqmmeDMLnw';
        
var map = L.mapbox.map('map','mapbox.dark').setView([50.9208, -1.4050], 13);


var places = new L.LayerGroup();

        L.marker([50.898970, -1.403749])
            .bindPopup('The Red Lion Pub').addTo(places),
        L.marker([50.918020, -1.375211])
            .bindPopup('The Station Pub').addTo(places),
        L.marker([50.898566, -1.405247])
            .bindPopup('The Medieval Merchants').addTo(places),
        L.marker([50.899590, -1.405917])
            .bindPopup('The Tudor House Museum').addTo(places);

map.addLayer(places);




