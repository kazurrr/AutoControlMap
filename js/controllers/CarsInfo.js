if (!autoControl.carsInfo)
    autoControl.carsInfo = {};

autoControl.carsInfo = {
    jqueryMap: {
        mainWrapper: $('#content-main')
    },

    event: {
        initModule: function () {
            // autoControl.carsInfo.jqueryMap.mainWrapper.append("<h1>A</h1>");

        },

        render: function () {

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
