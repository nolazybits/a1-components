/**
 * Created by nolazybits on 9/11/15.
 */
(function () {
    'use strict';

    angular.module('demo', ['nolazybits.ui.subselect'])
        .controller('DemoCtrl', ['$scope', function($scope)
        {
            $scope.categories = [
                {
                    id: 1,
                    name : 'sport',
                    parentId: null
                },
                {
                    id: 2,
                    name : 'entertainement',
                    parentId: null
                },
                {
                    id: 3,
                    name : 'water',
                    parentId: 1
                },
                {
                    id: 4,
                    name : 'Table Tennis',
                    parentId: 1
                },
                {
                    id: 5,
                    name : 'surf',
                    parentId: 3
                },
                {
                    id: 6,
                    name : 'Cinema',
                    parentId: 2
                },
                {
                    id: 7,
                    name : 'Circus',
                    parentId: 2
                }
            ];
        }]);
}());
