
if (!autoControl.map)
    autoControl.map = {};

autoControl.map = {
        jqueryMap: {
            mapWrapper: $('#map-wrapper'),
            map: $('#map')
        },

        state: {},

        event: {
            initModule: function () {

            },

            resize: function () {

                // google.maps.event.trigger(map, "resize");
            }
        }
    };
