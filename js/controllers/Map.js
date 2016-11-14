if (!autoControl.map)
    autoControl.map = {};

autoControl.map = {
    jqueryMap: {
        mapWrapper: $('#map-wrapper'),
        map: $('#map')
    },

    servieces: {
        direction: null,
        directionDisplay: null,
        traffic: null,
        map: null
    },

    state: {},

    event: {
        initModule: function () {
            console.log("Map init");

            autoControl.map.servieces.direction = new google.maps.DirectionsService();


            var auto1 = {lat: 54.519817, lng: 18.529571};

            // autoControl.map.servieces.directionDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
            // autoControl.map.servieces.directionDisplay.setPanel(document.getElementById('route-display-text'));


            autoControl.map.servieces.map = new google.maps.Map(document.getElementById('map'), {
                center: auto1,
                zoom: 10
            });

            // cars = new CarsInit();

            autoControl.map.servieces.traffic = new google.maps.TrafficLayer();

            // autoControl.map.servieces.map.addListener('click', function (e) {
            //     route.setPoint(null, e.latLng.lat(), e.latLng.lng());
            // });

        }
    }
};
