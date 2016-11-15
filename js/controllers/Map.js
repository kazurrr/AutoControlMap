if (!autoControl.map)
    autoControl.map = {};

autoControl.map = {
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

    cars: [],

    event: {
        initModule: function () {
            // autoControl.map.services.direction = new google.maps.DirectionsService();
            // autoControl.map.services.directionDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
            // autoControl.map.services.directionDisplay.setPanel(document.getElementById('route-display-text'));
            // autoControl.map.services.traffic = new google.maps.TrafficLayer();

            autoControl.map.services.map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 54.519817, lng: 18.529571},
                zoom: 10
            });

            autoControl.map.cars[0] = new google.maps.Marker({
                position: {lat: 54.519817, lng: 18.529571},
                animation: google.maps.Animation.DROP,
                map: autoControl.map.services.map
            });

            autoControl.cars.event.initModule();
        }
    }
};
