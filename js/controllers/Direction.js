if (!autoControl.direction)
    autoControl.direction = {};

autoControl.direction = {
    jqueryMap: {
        mainWrapper: null,
        fromWrapper: null,
        toWrapper: null
    },

    state: {
        formTypes: {
            marker: 0,
            search: 1,
            map: 2
        },

        fromWrapper: 0,
        toWrapper: 0
    },

    event: {
        initModule: function (divID) {
            autoControl.direction.jqueryMap.mainWrapper = $('#' + divID);
        },

        renderModule: function () {
            autoControl.direction.jqueryMap.mainWrapper.html(autoControl.direction.event.renderHTML());

            $('.material-select').material_select();
            autoControl.direction.jqueryMap.fromWrapper = $('#direction-from-input-wrapper');
            autoControl.direction.jqueryMap.toWrapper = $('#direction-to-input-wrapper');

            autoControl.direction.event.bindEvents();
        },

        renderHTML: function () {
            var html = '<h5>Wyszukaj trasę</h5>' +
                '<form action="#">' +
                '<div class="direction-from-wrapper">' +
                '   <input name="direction-from-marker-type" checked type="radio" id="direction-from-marker"/>' +
                '   <label for="direction-from-marker">Marker</label>' +

                '   <input name="direction-from-marker-type" type="radio" id="direction-from-search"/>' +
                '   <label for="direction-from-search">Wyszukaj</label>' +

                '   <input name="direction-from-marker-type" type="radio" id="direction-from-mapclick"/>' +
                '   <label for="direction-from-mapclick">Mapa</label>' +

                '   <div id="direction-from-input-wrapper" class="input-field col s12">' +
                autoControl.direction.event.renderMarker('from', 'Początek trasy') +
                '   </div>' +

                '</div>' +

                '<div class="direction-to-wrapper">' +
                '   <input name="direction-to-marker-type" checked type="radio" id="direction-to-marker"/>' +
                '   <label for="direction-to-marker">Marker</label>' +

                '   <input name="direction-to-marker-type" type="radio" id="direction-to-search"/>' +
                '   <label for="direction-to-search">Wyszukaj</label>' +

                '   <input name="direction-to-marker-type" type="radio" id="direction-to-mapclick"/>' +
                '   <label for="direction-to-mapclick">Mapa</label>' +

                '   <div id="direction-to-input-wrapper" class="input-field col s12">' +
                autoControl.direction.event.renderMarker('to', 'Miejsce docelowe') +
                '   </div>' +

                '</div>' +
                '</form>';

            return html;
        },

        renderMarker: function (place, label) {
            var allCars = autoControl.map.cars;

            var toReturn = '<select class="material-select" id="direction-' + place + '-input">' +
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

        renderSearch: function (place) {

        },

        renderMapClick: function (place) {

        },


        bindEvents: function () {

        }
    }
};