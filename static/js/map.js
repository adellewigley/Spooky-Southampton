L.mapbox.accessToken = 'pk.eyJ1IjoiYWRlbGxlIiwiYSI6ImNqMW5vZDVwMzAwMHozM21uMXpmbXJ1aHgifQ.K_m0PK-ksYwOnqmmeDMLnw';
        
var map = L.mapbox.map('map','mapbox.dark').setView([50.9208, -1.4050], 13);


        L.marker([50.898970, -1.403749])
        	.addTo(map).bindPopup('The Red Lion Pub');
        
        L.marker([50.918020, -1.375211]) 
       		.addTo(map).bindPopup('The Station Pub');
        
        L.marker([50.898566, -1.405247])
            .addTo(map).bindPopup('The Medieval Merchants');
        
        L.marker([50.899590, -1.405917])
            .addTo(map).bindPopup('The Tudor House Museum');





