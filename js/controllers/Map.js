if (!autoControl.map)
    autoControl.map = {};

autoControl.map = {
    jsMap: {
        map: document.getElementById('map')
    },

    jqueryMap: {
        mapWrapper: $('#map-wrapper'),
        map: $('#map')
    },

    services: {
        direction: null,
        directionDisplay: null,
        traffic: null,
        map: null
    },

    data: {
        markerImage: 'img/car.png'
    },

    cars: [],

    event: {
        initModule: function () {
            // autoControl.map.services.direction = new google.maps.DirectionsService();
            // autoControl.map.services.directionDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
            // autoControl.map.services.directionDisplay.setPanel(document.getElementById('route-display-text'));
            // autoControl.map.services.traffic = new google.maps.TrafficLayer();

            autoControl.map.services.map = new google.maps.Map(autoControl.map.jsMap.map, {
                center: {lat: 54.519817, lng: 18.529571},
                zoom: 10
            });

            autoControl.cars.event.initModule();
        },

        updateCars: function (data) {
            if (data == null)
                return;

            autoControl.map.event.removeCars();
            autoControl.map.event.renderCars(data);
            autoControl.carsInfo.event.render(data);
        },

        removeCars: function () {
            for (var i = 0; i < autoControl.map.cars.length; i++) {
                autoControl.map.cars[i].setMap(null);
            }

            autoControl.map.cars = [];
        },

        renderCars: function (cars) {
            for (var i = 0; i < cars.length; i++) {

                var newMarker = new google.maps.Marker({
                    position: {lat: cars[i].Lat, lng: cars[i].Lon},
                    animation: google.maps.Animation.DROP,
                    map: autoControl.map.services.map,
                    CarId: cars[i].CarId,
                    icon: autoControl.map.data.markerImage
                });

                autoControl.map.cars.push(newMarker);
            }
        },

        centerOnMarker: function (carId) {
            var marker = null;
            for (var i = 0; i < autoControl.map.cars.length; i++) {
                if (autoControl.map.cars[i].CarId == carId) {
                    marker = autoControl.map.cars[i];
                    break;
                }
            }

            if (marker == null)
                return;

            var latLon = marker.getPosition();
            autoControl.map.services.map.setCenter(latLon);
        }
    }
};
