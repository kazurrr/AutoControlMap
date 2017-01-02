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
            var html = '<h5>Informacje o pojazdach</h5>' +

                '<table class="bordered centered">' +
                '   <thead>' +
                '       <tr>' +
                '           <th data-field="id">Numer pojazdu</th>' +
                '           <th data-field="name">Model</th>' +
                '           <th data-field="price">Status</th>' +
                '           <th data-field="price">Akcje</th>' +
                '       </tr>' +
                '   </thead>' +
                '   <tbody>';

            for (var i = 0; i < data.length; i++) {
                html += '   <tr>' +
                    '           <td>' + data[i].CarId + '</td>' +
                    '           <td>' + data[i].Brand + ' ' + data[i].Model + '</td>' +
                    '           <td>' + data[i].Lon + '</td>' +
                    '           <td><button onclick="autoControl.map.event.centerOnMarker(' + data[i].CarId + ')" ' +
                    'class="btn">Pokaż</button></td>' +
                    '       </tr>';
            }

            html += '   </tbody>' +
                '</table>';

            autoControl.carsInfo.jqueryMap.mainWrapper.html(html);
        }
    },

    template: '' +
    '<h5>Informacje o pojazdach</h5>' +

    '<table class="bordered centered">' +
    '   <thead>' +
    '       <tr>' +
    '           <th data-field="id">Numer pojazdu</th>' +
    '           <th data-field="name">Model</th>' +
    '           <th data-field="price">Status</th>' +
    '           <th data-field="price">Akcje</th>' +
    '       </tr>' +
    '   </thead>' +

    '   <tbody>' +
    '       <tr>' +
    '           <td>Alvin</td>' +
    '           <td>Eclair</td>' +
    '           <td>Eclair</td>' +
    '           <td>$0.87</td>' +
    '       </tr>' +
    '       <tr>' +
    '               <td>Alan</td>' +
    '               <td>Jellybean</td>' +
    '               <td>Jellybean</td>' +
    '               <td>$3.76</td>' +
    '       </tr>' +
    '   </tbody>' +

    '</table>'
};
