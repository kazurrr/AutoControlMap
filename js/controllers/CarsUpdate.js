if (!autoControl.carsUpdate)
    autoControl.carsUpdate = {};

autoControl.carsUpdate = {
    data: [],

    state: {},

    event: {

        initModule: function () {
            var server_1 = 'http://91.232.102.190:8080/api/cars/getall';
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

function Car(id, vin, brand, model) {
    this.id = id;
    this.vin = vin;
    this.brand = brand;
    this.model = model;
}