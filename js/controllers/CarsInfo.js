if (!autoControl.carsInfo)
    autoControl.carsInfo = {};

autoControl.carsInfo = {
    jqueryMap: {
        mainWrapper: null
    },

    event: {
        initModule: function (divID) {
            autoControl.carsInfo.jqueryMap.mainWrapper = $('#' + divID);
        },

        render: function (data) {
            var html = '<table class="bordered centered">' +
                '   <thead>' +
                '       <tr>' +
                '           <th data-field="id">VIN</th>' +
                '           <th data-field="name">Model</th>' +
                '           <th data-field="price">Akcje</th>' +
                '       </tr>' +
                '   </thead>' +
                '   <tbody>';

            for (var i = 0; i < data.length; i++) {
                html += '   <tr>' +
                    '           <td>' + data[i].VIN + '</td>' +
                    '           <td>' + data[i].Brand + ' ' + data[i].Model + '</td>' +
                    '           <td><button class="btn small" onclick="autoControl.map.event.centerOnMarker(' + data[i].CarId + ')" ' +
                    'class="btn">Pokaż</button></td>' +
                    '       </tr>';
            }

            html += '   </tbody>' +
                '</table>';

            autoControl.carsInfo.jqueryMap.mainWrapper.html(html);
        }
    }
};
