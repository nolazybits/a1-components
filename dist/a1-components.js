(function (angular) {
    'use strict';
    angular.module('nolazybits.ui.subselect', [])
        .directive('nlbSubselect', function()
        {
            return {
                restrict: 'E',
                scope: true,
               template:
               'This is a directive' +
                '<div>' +
                '<div>TITLE</div>' +
                '<div ng-repeat="category in selectedCategory track by category.id">' +
                '<span>{{category.name}}</span>' +
                '</div>' +
                '</div>',
                link: function($scope, $element, $attr, ngModel)
                {

                }
            };
        });
}(window.angular));