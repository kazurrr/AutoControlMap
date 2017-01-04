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
        map: null,
        infoWindow: null
    },

    data: {
        markerImage: 'img/car.png'
    },

    cars: [],

    carsQuery: {
        getMarkerByCarId: function (carId) {
            for (var i = 0; i < autoControl.map.cars.length; i++) {
                if (autoControl.map.cars[i].CarId == carId) {
                    return autoControl.map.cars[i];
                }
            }

            return null;
        },

        getCarInfoByCarId: function (carId) {
            var car = autoControl.map.carsQuery.getMarkerByCarId(carId);
            if (car == null)
                return null;

            return car.carInfo;
        }
    },

    event: {
        initModule: function () {
            // autoControl.map.services.direction = new google.maps.DirectionsService();
            // autoControl.map.services.directionDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
            // autoControl.map.services.directionDisplay.setPanel(document.getElementById('route-display-text'));
            autoControl.map.services.traffic = new google.maps.TrafficLayer();

            autoControl.map.services.map = new google.maps.Map(autoControl.map.jsMap.map, {
                center: {lat: 54.519817, lng: 18.529571},
                zoom: 10
            });

            autoControl.carsUpdate.event.initModule();
            autoControl.map.services.infoWindow = new google.maps.InfoWindow();
        },

        updateCars: function (cars) {
            var marker;
            var numDeltas = 100;
            var counter = 0;

            function moveMarker() {
                position[0] += deltaLat;
                position[1] += deltaLng;

                var latlng = new google.maps.LatLng(position[0], position[1]);
                marker.setPosition(latlng);

                if (i != numDeltas) {
                    i++;
                    setTimeout(moveMarker, 10);
                }
            }

            for (var i = 0; i < cars.length; i++) {
                marker = autoControl.map.carsQuery.getMarkerByCarId(cars[i].CarId);
                var p = marker.getPosition();

                var newLatLon = new google.maps.LatLng({lat: p.lat() - 0.005, lng: p.lng()});

                marker.setPosition(newLatLon);
            }
        },

        clearCarsAndAddNew: function (data) {
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
                autoControl.map.cars.push(autoControl.car.newCar(cars[i]));
            }
        },

        centerOnMarker: function (carId) {
            var marker = autoControl.map.carsQuery.getMarkerByCarId(carId);

            if (marker == null)
                return;

            var latLon = marker.getPosition();
            autoControl.map.services.map.panTo(latLon);
        },

        toogleTrafficLayer: function (turnOnTraffic) {
            if (turnOnTraffic) {
                autoControl.map.services.traffic.setMap(autoControl.map.services.map);
            } else {
                autoControl.map.services.traffic.setMap(null);
            }
        }
    }
};

