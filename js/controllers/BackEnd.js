if (!autoControl.backEnd)
    autoControl.backEnd = {};

autoControl.backEnd = {
    get: {
        allCars: function () {
            var response = $.getJSON("js/testResponses/allCars.json", function () {
                console.log("Success: get all cars");
            });

            return response;
        },

        errorsForCar: function (carId) {
            return $.getJSON("js/testResponses/allErrors.json");
        }
    }
};
