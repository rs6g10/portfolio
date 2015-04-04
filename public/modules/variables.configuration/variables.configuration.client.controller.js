'use strict';

angular.module('variables.configuration').controller('Variables.ConfigurationController', ['$scope', '$stateParams', '$location', 'Authentication', '$http', 'ConfigurationData', 'httpq', 'uiGridConstants',
    function ($scope, $stateParams, $location, Authentication, $http, ConfigurationData, httpq, uiGridConstants) {
        $scope.authentication = Authentication;
        var configData = [];

        $scope.gridOptions = {
            enableFiltering: true,
            flatEntityAccess: true,
            showGridFooter: false
        };
        //$scope.gridOptions.
        var columnDefs = [
            {name:'Name'},
            {name:'Description'},
            {name:'Category'},
            {name:'Included'},
            {name:'Type'},
            {name:'SegmentBy'},
            {name:'TableAlias'}
        ];
        columnDefs[0].filter = {
            condition: uiGridConstants.filter.CONTAINS
        };

        columnDefs[3].headerCellTemplate = '/modules/variables.configuration/headerTemplate.html';
        // <md-checkbox type="checkbox">

        columnDefs[3].cellTemplate = '<label class="checkbox-label"><md-checkbox type="checkbox" ng-model="row.entity[col.field]" '
        + 'converter="intbool" ng-change="row.entity.unsegmentIfNotIncluded(row.entity)" /></label>';
        columnDefs[5].cellTemplate = '<label class="checkbox-label"><md-checkbox type="checkbox" ng-model="row.entity[col.field]"'
        + ' converter="intbool" ng-change="row.entity.includeIfSegmented(row.entity)" /></label>';

        columnDefs[4].cellTemplate =
            '<div class="btn-group">' +
            '<label class="btn btn-primary" ng-model="row.entity[col.field]" btn-radio="\'D\'">D</label>' +
            '<label class="btn btn-primary" ng-model="row.entity[col.field]" btn-radio="\'I\'">I</label>' +
            '<label class="btn btn-primary" ng-model="row.entity[col.field]" btn-radio="\'P\'">P</label>' +
            '</div>';

        httpq.get('variablesconfig')
            .then(function (data) {
                configData = data;
            })
            .catch(function (data, status) {

            })
            .finally(function () {
                $scope.gridOptions.columnDefs = columnDefs;
                $scope.gridOptions.data = configData;
            });

        httpq.get('socketio')
            .then(function (data) {
                //configData = data;
                console.log('i know there is no data!');
            })
            .catch(function (data, status) {

            })
            .finally(function () {
                //$scope.gridOptions.columnDefs = columnDefs;
                //$scope.gridOptions.data = configData;
            });

    }
]);
