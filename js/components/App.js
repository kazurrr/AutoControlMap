/**
 * Created by karol on 1§3.11.2016.
 */

autoControl = {
        modules: {
            map: Map
        },

        jqueryMap: {
            progressBarIndeterminate: $('#header-progress-indeterminate'),
            progressBarDeterminate: $('#header-progress-determinate'),
            progressBarDeterminate_Bar: $('#header-progress-determinate-bar')
        },

        state: {
            progressBarIndeterminateVisible: false,
            progressBarDeterminateVisible: false
        },

        event: {
            initModule: function () {
                console.log("Init App component");
                console.log("App", this);
            }
        },

        action: {
            showProgress: function (percentage) {
                if (typeof percentage !== 'undefined') {
                    autoControl.jqueryMap.progressBarDeterminate.show();
                    autoControl.jqueryMap.progressBarDeterminate_Bar.css("width", percentage + "%");
                    autoControl.state.progressBarDeterminateVisible = true;
                }
            },

            hideProgress: function () {
                autoControl.jqueryMap.progressBarDeterminate.hide();
                autoControl.state.progressBarDeterminateVisible = false;
            },

            showProgressIndeterminate: function () {
                if (typeof percentage !== 'undefined') {
                    autoControl.jqueryMap.progressBarIndeterminate.show();
                    autoControl.state.progressBarIndeterminateVisible = true;
                }
            },

            hideProgressIndeterminate : function () {
                autoControl.jqueryMap.progressBarIndeterminate.hide();
                autoControl.state.progressBarIndeterminateVisible = false;
            }
        }
    };
