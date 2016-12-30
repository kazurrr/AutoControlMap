if (!autoControl.cars)
    autoControl.cars = {};

autoControl.cars = {
    data: [],

    state: {},

    event: {
        initModule: function () {
            $.getJSON("js/testResponses/allCars.json", function (data) {
                autoControl.cars.data = data;
                // console.log("allCars", autoControl.cars.data);
                autoControl.map.event.updateCars();
            });
        }
    }
};

function Car(id, vin, brand, model) {
    this.id = id;
    this.vin = vin;
    this.brand = brand;
    this.model = model;
}