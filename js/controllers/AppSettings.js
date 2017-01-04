if (!autoControl.settings)
    autoControl.settings = {};

autoControl.settings = {
    jqueryMap: {
        mainWrapper: null,
        trafficSwitch: null,
        autoRefreshSwitch: null
    },

    event: {
        initModule: function (divID) {
            autoControl.settings.jqueryMap.mainWrapper = $('#' + divID);
            autoControl.settings.jqueryMap.mainWrapper.html(autoControl.settings.event.renderHTML());

            autoControl.settings.jqueryMap.trafficSwitch = $('#traffic-layer-switch');
            autoControl.settings.jqueryMap.autoRefreshSwitch = $('#settings-autorefresh-switch');

            autoControl.settings.event.bindEvents();
        },

        bindEvents: function () {
            autoControl.settings.jqueryMap.trafficSwitch.change(function () {
                var switchValue = autoControl.settings.jqueryMap.trafficSwitch[0].checked;
                autoControl.map.event.toogleTrafficLayer(switchValue);
            });

            autoControl.settings.jqueryMap.autoRefreshSwitch.change(function () {
                var switchValue = autoControl.settings.jqueryMap.autoRefreshSwitch[0].checked;
                autoControl.carsUpdate.event.toogleAutoRefresh(switchValue);
            });

        },

        renderHTML: function () {
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
                '               <input id="settings-autorefresh-switch" type="checkbox" checked>' +
                '               <span class="lever"></span>' +
                '               On' +
                '           </label>' +
                '       </div>' +
                '   </div>' +
                '</div>';

            return html;
        }
    }
};

