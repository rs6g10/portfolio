'use strict';

//Menu service used for managing  menus
angular.module('variables.configuration').service('ConfigurationData', [
    '$http', function ($http) {
        var _this = this;
        var configData = [];
        $http.get('variablesconfig').then(function (response) {
            if (response.data) {
                response.data.forEach(function (x) {
                    configData.push(x);
                })
            }
        });
        _this._data = configData;

        return _this._data;

    }
]);