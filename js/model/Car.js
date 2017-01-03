if (!autoControl.car)
    autoControl.car = {};

autoControl.car = {
    initModule: function () {
        console.log(this);
    },

    newCar: function (car) {
        var newMarker = new google.maps.Marker({
            position: {lat: car.Lat, lng: car.Lon},
            animation: google.maps.Animation.DROP,
            map: autoControl.map.services.map,
            CarId: car.CarId,
            icon: autoControl.map.data.markerImage
        });

        google.maps.event.addListener(newMarker, 'click', function () {
            autoControl.map.services.infoWindow.setContent('Hello World');
            autoControl.map.services.infoWindow.open(
                autoControl.map.services.map,
                newMarker
            );
        });

        return newMarker;
    },

    methods: {
        /**
         * @return {string}
         */
        InfoWinowContent: function () {
            return '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                '<div id="bodyContent">' +
                '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                'sandstone rock formation in the southern part of the ' +
                'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
                'south west of the nearest large town, Alice Springs; 450&#160;km ' +
                '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
                'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
                'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
                'Aboriginal people of the area. It has many springs, waterholes, ' +
                'rock caves and ancient paintings. Uluru is listed as a World ' +
                'Heritage Site.</p>' +
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
                '(last visited June 22, 2009).</p>' +
                '</div>' +
                '</div>';

        }
    }
};