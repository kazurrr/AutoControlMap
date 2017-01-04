if (!autoControl.carsUpdate)
    autoControl.carsUpdate = {};

autoControl.carsUpdate = {
    data: [],

    state: {
        refreshInterval: 5000,
        autoRefresh: true,
        timeoutObj: 0
    },

    event: {

        initModule: function () {
            autoControl.carsUpdate.event.getData();
            autoControl.carsUpdate.event.toogleAutoRefresh(true);
        },

        toogleAutoRefresh: function (turnOn) {
            if (turnOn) {
                autoControl.carsUpdate.state.timeoutObj = setTimeout(autoControl.carsUpdate.event.getDataWithLoop,
                    autoControl.carsUpdate.state.refreshInterval);
                autoControl.carsUpdate.state.autoRefresh = true;
            } else {
                clearTimeout(autoControl.carsUpdate.state.timeoutObj);
                autoControl.carsUpdate.state.autoRefresh = false;
            }
        },

        getDataWithLoop: function () {
            $.getJSON("js/testResponses/allCars.json", function (infoData) {
                $.getJSON("js/testResponses/allDetails.json", function (data) {
                    autoControl.carsUpdate.data = data;
                    autoControl.carsUpdate.event.setAdditionalCarInfo(infoData);
                    autoControl.map.event.updateCars(autoControl.carsUpdate.data);

                    autoControl.carsUpdate.state.timeoutObj = setTimeout(autoControl.carsUpdate.event.getDataWithLoop,
                        autoControl.carsUpdate.state.refreshInterval);
                });
            });
        },

        getData: function () {
            $.getJSON("js/testResponses/allCars.json", function (infoData) {
                $.getJSON("js/testResponses/allDetails.json", function (data) {
                    autoControl.carsUpdate.data = data;
                    autoControl.carsUpdate.event.setAdditionalCarInfo(infoData);
                    autoControl.map.event.updateCars(autoControl.carsUpdate.data);
                });
            });
        },

        setAdditionalCarInfo: function (carInfo) {
            for (var i = 0; i < autoControl.carsUpdate.data.length; i++) {
                var info = autoControl.carsUpdate.event.getSpecifiedCarInfo(autoControl.carsUpdate.data[i].CarId, carInfo);

                if (info != null) {
                    autoControl.carsUpdate.data[i].VIN = info.VIN;
                    autoControl.carsUpdate.data[i].Brand = info.Brand;
                    autoControl.carsUpdate.data[i].Model = info.Model;
                }
            }
        },

        getSpecifiedCarInfo: function (id, carSet) {
            for (var i = 0; i < carSet.length; i++) {
                if (carSet[i].CarId == id)
                    return carSet[i];
            }

            return null;
        }
    }
};
