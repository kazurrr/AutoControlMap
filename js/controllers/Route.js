if (!autoControl.route)
    autoControl.route = {};

autoControl.route = {
    jqueryMap: {
        mainWrapper: null,
        fromWrapper: null,
        toWrapper: null,
        searchButton: null,
        clearButon: null
    },

    state: {
        formTypes: {
            marker: 0,
            search: 1,
            map: 2
        }
    },

    event: {
        initModule: function (divID) {
            autoControl.route.jqueryMap.mainWrapper = $('#' + divID);

            autoControl.map.services.route = new google.maps.DirectionsService();
            autoControl.map.services.directionDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
            autoControl.map.services.directionDisplay.setPanel(document.getElementById('route-display-text'));
        },

        renderModule: function () {
            autoControl.route.jqueryMap.mainWrapper.html(autoControl.route.event.renderHTML());

            autoControl.route.jqueryMap.fromWrapper = $('#route-from-input-wrapper');
            autoControl.route.jqueryMap.toWrapper = $('#route-to-input-wrapper');
            autoControl.route.jqueryMap.searchButton = $('#route-search-button');
            autoControl.route.jqueryMap.clearButon = $('#route-clear-button');

            autoControl.route.event.bindEvents();
        },

        renderHTML: function () {
            return '<h5>Wyszukaj trasę</h5>' +
                '<form action="#">' +
                '<div class="route-from-wrapper">' +
                '   <input name="route-from-marker-type" checked type="radio" id="route-from-marker"/>' +
                '   <label for="route-from-marker">Marker</label>' +

                '   <input name="route-from-marker-type" type="radio" id="route-from-search"/>' +
                '   <label for="route-from-search">Wyszukaj</label>' +

                '   <input name="route-from-marker-type" type="radio" id="route-from-mapclick"/>' +
                '   <label for="route-from-mapclick">Mapa</label>' +

                '   <div id="route-from-input-wrapper" class="route-input-wrapper input-field col s12">' +
                autoControl.route.render.marker('from', 'Początek trasy') +
                '   </div>' +

                '</div>' +

                '<div class="route-to-wrapper">' +
                '   <input name="route-to-marker-type" checked type="radio" id="route-to-marker"/>' +
                '   <label for="route-to-marker">Marker</label>' +

                '   <input name="route-to-marker-type" type="radio" id="route-to-search"/>' +
                '   <label for="route-to-search">Wyszukaj</label>' +

                '   <input name="route-to-marker-type" type="radio" id="route-to-mapclick"/>' +
                '   <label for="route-to-mapclick">Mapa</label>' +

                '   <div id="route-to-input-wrapper" class="route-input-wrapper input-field col s12">' +
                autoControl.route.render.marker('to', 'Miejsce docelowe') +
                '   </div>' +

                '</div>' +
                '<div class="right-align">' +
                '   <button id="route-search-button" class="waves-effect waves-light btn small">Wyszukaj trasę</button>' +
                '   <button id="route-clear-button" class="waves-effect waves-light btn small">Wyczyść trasę</button>' +
                '</div>' +
                '</form>';
        },


        bindEvents: function () {
            $("input[name=route-from-marker-type]:radio").change(autoControl.route.event.changeSearchType);
            $("input[name=route-to-marker-type]:radio").change(autoControl.route.event.changeSearchType);

            autoControl.route.jqueryMap.searchButton.click(autoControl.route.event.getDirection);
        },

        changeSearchType: function (data) {
            var positionTo;
            var positionDesc;
            var wrapper;

            if (data.currentTarget.id.includes('to')) {
                positionTo = 'to';
                positionDesc = 'Miejsce docelowe';
                wrapper = autoControl.route.jqueryMap.toWrapper[0];
            } else {
                positionTo = 'from';
                positionDesc = 'Początek trasy';
                wrapper = autoControl.route.jqueryMap.fromWrapper[0];
            }

            if (data.currentTarget.id.includes('marker')) {
                wrapper.innerHTML = autoControl.route.render.marker(positionTo, positionDesc);
            } else if (data.currentTarget.id.includes('search')) {
                wrapper.innerHTML = autoControl.route.render.search(positionTo, positionDesc);
            } else {
                wrapper.innerHTML = autoControl.route.render.mapClick(positionTo, positionDesc);
            }
        },

        getDirection: function () {
            console.log('');
        },

        clearDirection: function () {

        }
    },



    render: {
        marker: function (place, label) {
            var allCars = autoControl.map.cars;

            var toReturn = '<select class="browser-default" id="route-' + place + '-input">' +
                '   <option value="" disabled selected>' + label + '</option>';

            for (var i = 0; i < allCars.length; i++) {
                var detail = allCars[i].carInfo;

                toReturn += '<option value="' + detail.CarId + '">' +
                    detail.Brand + ' ' + detail.Model + ' - ' + detail.VIN +
                    '</option>';
            }

            toReturn += '</select>';

            return toReturn;
        },

        search: function (place, label) {
            return 'Search';
        },

        mapClick: function (place, label) {
            return 'Map Click';

        },
    }
};