if (!autoControl.app)
    autoControl.app = {};

autoControl.app = {
    jqueryMap: {
        progressBarIndeterminate: $('#header-progress-indeterminate'),
        progressBarDeterminate: $('#header-progress-determinate'),
        progressBarDeterminate_Bar: $('#header-progress-determinate-bar'),
        navbar: $('#main-navbar')
    },

    state: {
        progressBarIndeterminateVisible: false,
        progressBarDeterminateVisible: false
    },

    event: {
        initModule: function () {
            autoControl.app.event.resize();
            $(window).resize(function () {
                autoControl.app.event.resize()
            });
            autoControl.app.event.initAppModules();
        },

        resize: function () {
            var navbar_height = autoControl.app.jqueryMap.navbar.height();
            var elementsToChange = document.getElementsByClassName('height-full');

            for (var i = 0; i < elementsToChange.length; i++) {
                elementsToChange[i].style.height = window.innerHeight - navbar_height + "px";
            }
        },

        initAppModules: function () {
            autoControl.app.action.initExternalModule("CarsInfo", autoControl.carsInfo.event.initModule);
        }
    },

    action: {
        initExternalModule: function (name, initFunction) {
            //ToDo add to menu
            //ToDo add div

            initFunction();
        },

        showProgress: function (percentage) {
            if (typeof percentage !== 'undefined') {
                autoControl.app.jqueryMap.progressBarDeterminate.show();
                autoControl.app.jqueryMap.progressBarDeterminate_Bar.css("width", percentage + "%");
                autoControl.app.state.progressBarDeterminateVisible = true;
            }
        },

        hideProgress: function () {
            autoControl.app.jqueryMap.progressBarDeterminate.hide();
            autoControl.app.state.progressBarDeterminateVisible = false;
        },

        showProgressIndeterminate: function () {
            autoControl.app.jqueryMap.progressBarIndeterminate.show();
            autoControl.app.state.progressBarIndeterminateVisible = true;
        },

        hideProgressIndeterminate: function () {
            autoControl.app.jqueryMap.progressBarIndeterminate.hide();
            autoControl.app.state.progressBarIndeterminateVisible = false;
        }
    }
};
