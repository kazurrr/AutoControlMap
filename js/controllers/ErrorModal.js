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

        openModal: function () {
            if (autoControl.errorModal.state.open == false) {
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

        renderModal: function () {

        }
    }
};