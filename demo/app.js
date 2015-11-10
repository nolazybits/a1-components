/**
 * Created by nolazybits on 9/11/15.
 */
(function () {
    'use strict';

    angular.module('demo', ['nolazybits.ui.subselect'])
        .controller('DemoCtrl', ['$scope', function($scope)
        {
            $scope.selectedCategory = null;
            $scope.categories = [
                {
                    id: 1,
                    name : 'sport',
                    parent_id: null
                },
                {
                    id: 2,
                    name : 'entertainement',
                    parent_id: null
                },
                {
                    id: 3,
                    name : 'water',
                    parent_id: 1
                },
                {
                    id: 4,
                    name : 'Table Tennis',
                    parent_id: 1
                },
                {
                    id: 5,
                    name : 'surf',
                    parent_id: 3
                },
                {
                    id: 6,
                    name : 'Cinema',
                    parent_id: 2
                },
                {
                    id: 7,
                    name : 'Circus',
                    parent_id: 2
                }
            ];
        }]);
}());
