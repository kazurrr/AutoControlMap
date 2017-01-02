if (!autoControl.settings)
    autoControl.settings = {};

autoControl.settings = {
    jqueryMap: {
        mainWrapper: null,
        trafficSwitch: null
    },

    event: {
        initModule: function (divID) {
            autoControl.settings.jqueryMap.mainWrapper = $('#' + divID);

            var html = '<h5>Ustawienia</h5>' +
                '<div class="row">' +
                '   <div class="col s6">' +
                '       Natężenie ruchu' +
                '   </div>' +
                '   <div class="col s6">' +
                '       <div class="switch">' +
                '           <label>' +
                '               Off' +
                '               <input id="traffic-layer-switch" type="checkbox">' +
                '               <span class="lever"></span>' +
                '               On' +
                '           </label>' +
                '       </div>' +
                '   </div>' +
                '</div>';

            html += '<div class="row">' +
                '   <div class="col s6">' +
                '       Automatyczne odświeżanie' +
                '   </div>' +
                '   <div class="col s6">' +
                '       <div class="switch">' +
                '           <label>' +
                '               Off' +
                '               <input type="checkbox" checked>' +
                '               <span class="lever"></span>' +
                '               On' +
                '           </label>' +
                '       </div>' +
                '   </div>' +
                '</div>';

            autoControl.settings.jqueryMap.mainWrapper.html(html);

            autoControl.settings.jqueryMap.trafficSwitch = $('#traffic-layer-switch');

            autoControl.settings.event.bindEvents();
        },

        bindEvents: function () {
            autoControl.settings.jqueryMap.trafficSwitch.change(function () {
                var switchValue = autoControl.settings.jqueryMap.trafficSwitch[0].checked;
                autoControl.map.event.toogleTrafficLayer(switchValue);
            });

        }
    }
};

