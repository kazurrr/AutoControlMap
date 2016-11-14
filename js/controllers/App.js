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
            console.log("Init App component");
            console.log("App", this);

            autoControl.app.event.resize();
            $(window).resize(function () {
                autoControl.app.event.resize()
            });
        },

        resize: function () {
            console.log("REsize");

            var navbar_height = autoControl.app.jqueryMap.navbar.height();
            var elementsToChange = document.getElementsByClassName('height-full');

            for (var i = 0; i < elementsToChange.length; i++) {
                elementsToChange[i].style.height = window.innerHeight - navbar_height + "px";
            }
        }
    },

    action: {
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
