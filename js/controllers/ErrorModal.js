if (!autoControl.errorModal)
    autoControl.errorModal = {};

autoControl.errorModal = {
    jqueryMap: {
        modalWindow: $('#error-modal-main')
    },

    state: {
        open: false
    },

    event: {
        initModule: function () {
            autoControl.errorModal.jqueryMap.modalWindow.modal({
                    dismissible: false,
                    opacity: .5, // Opacity of modal background
                    in_duration: 300, // Transition in duration
                    out_duration: 200, // Transition out duration
                    starting_top: '4%', // Starting top style attribute
                    ending_top: '10%', // Ending top style attribute
                    ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                        // alert("Ready");
                        console.log(modal, trigger);
                    },
                    complete: function () {
                        autoControl.errorModal.event.closed();
                        // alert('Closed');
                    } // Callback for Modal close
                }
            );

        },

        openModal: function (data) {
            console.log('data', data);
            if (autoControl.errorModal.state.open == false) {
                var car = autoControl.map.carsQuery.getCarInfoByCarId(data);

                console.log(car);
                console.log('bla');

                autoControl.errorModal.jqueryMap.modalWindow.html(autoControl.errorModal.event.renderModal(car));
                autoControl.errorModal.state.open = true;
                autoControl.errorModal.event.renderModal();
                autoControl.errorModal.jqueryMap.modalWindow.modal('open');
            } else {
                console.log('Modal is already open')
            }
        },

        closed: function () {
            autoControl.errorModal.state.open = false;
        },

        renderModal: function (carInfo) {
            console.log(carInfo);

            var a = '<div class="modal-content">' +
                '   <h4>' + carInfo.Brand + ' ' + carInfo.Model + ' - ' + carInfo.VIN + '</h4>' +
                '   <p>A bunch of text</p>' +
                '</div>' +
                '<div class="modal-footer">' +
                '    <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Zamknij</a>' +
                '</div>';

            return a;

        }
    }
};