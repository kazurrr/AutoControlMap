if (!autoControl.cars)
    autoControl.cars = {};

autoControl.cars = {
    data: [],

    state: {},

    event: {

        initModule: function () {
            var server_1 = 'http://91.232.102.190:8080/api/cars/getall';
            $.getJSON("js/testResponses/allCars.json", function (infoData) {
                $.getJSON("js/testResponses/allDetails.json", function (data) {
                    autoControl.cars.data = data;
                    autoControl.cars.event.setAdditionalCarInfo(infoData);
                    autoControl.map.event.updateCars(autoControl.cars.data);
                });
            });
        },

        setAdditionalCarInfo: function (carInfo) {
            for (var i = 0; i < autoControl.cars.data.length; i++) {
                var info = autoControl.cars.event.getSpecifiedCarInfo(autoControl.cars.data[i].CarId, carInfo);

                if (info != null) {
                    autoControl.cars.data[i].VIN = info.VIN;
                    autoControl.cars.data[i].Brand = info.Brand;
                    autoControl.cars.data[i].Model = info.Model;
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