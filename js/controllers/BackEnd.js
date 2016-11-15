if (!autoControl.backEnd)
    autoControl.backEnd = {};

autoControl.backEnd = {
    commands: {
        allCars: function () {
            var response = $.getJSON("js/testResponses/allCars.json", function () {
                console.log("Success: get all cars");
            });

            return response;
        }
    }
};
