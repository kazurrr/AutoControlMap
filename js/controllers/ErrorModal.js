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
                    // ending_top: '10%', // Ending top style attribute
                    ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                        // alert("Ready");
                        // console.log(modal, trigger);
                    },
                    complete: function () {
                        autoControl.errorModal.event.closed();
                        // alert('Closed');
                    } // Callback for Modal close
                }
            );

        },

        openModal: function (data) {
            if (autoControl.errorModal.state.open == false) {
                var car = autoControl.map.carsQuery.getCarInfoByCarId(data);

                $.when(autoControl.backEnd.get.errorsForCar(car.CarId)).done(function (errors) {
                    if (errors.length == 0) {
                        autoControl.app.event.showToast("Pojazd nie posiada błędów");
                    } else {
                        autoControl.errorModal.state.open = true;
                        var html = autoControl.errorModal.event.renderModal(car, errors);
                        autoControl.errorModal.jqueryMap.modalWindow.html(html);
                        autoControl.errorModal.jqueryMap.modalWindow.modal('open');
                    }
                })
            } else {
                console.log('Modal is already open')
            }
        },

        closed: function () {
            autoControl.errorModal.state.open = false;
        },

        renderModal: function (carInfo, errors) {
            var noDataError = 'Brak danych';

            function getErrorCode(error) {
                return error.ErrorCode
            }

            function getErrorDescription(error) {
                if (error.ErrorString == null)
                    return noDataError;
                else
                    return error.ErrorString;
            }

            function getErrorDate(error) {
                if (error.CreateDate == null)
                    return noDataError;

                var errorDate = new Date(error.CreateDate);
                var dd = errorDate.getDate();
                var mm = errorDate.getMonth() + 1; //January is 0!
                var yyyy = errorDate.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }

                return dd + '-' + mm + '-' + yyyy;
            }

            var htmlToReturn = '<div class="modal-content">' +
                '   <h4>' + carInfo.Brand + ' ' + carInfo.Model + ' - ' + carInfo.VIN + '</h4>';


            htmlToReturn += '<table class="striped">' +
                '<thead>' +
                '   <tr>' +
                '       <th data-field="id">Kod błędu</th>' +
                '       <th data-field="name">Opis</th>' +
                '       <th data-field="price">Data wystąpienia</th>' +
                '   </tr>' +
                '</thead>' +
                '<tbody>';


            for (var i = 0; i < errors.length; i++) {
                htmlToReturn += '<tr>' +
                    '   <td>' + getErrorCode(errors[i]) + '</td>' +
                    '   <td>' + getErrorDescription(errors[i]) + '</td>' +
                    '   <td>' + getErrorDate(errors[i]) + '</td>' +
                    '</tr>'
            }

            htmlToReturn += '</tbody>' +
                '</table>';


            htmlToReturn += '</div>' +
                '<div class="modal-footer">' +
                '    <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Zamknij</a>' +
                '</div>';

            return htmlToReturn;
        }
    }
};