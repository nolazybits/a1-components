(function () {
    'use strict';

    angular.module('nolazybits.ui.subselect', [])
        .directive('nlbSubselect', ['$parse', subSelectDirective]);

    function subSelectDirective($parse)
    {
        return {
            restrict: 'E',
            require: ['ngModel'],
            scope: {
                options: '='
            },
            template: getTemplate,
            link: {
                post: postLink
            }
        };

        function getTemplate(element, attr)
        {
            return  'This is a directive' +
                    '<div>' +
                        '<div>TITLE</div>' +
                        '<div ng-repeat="option in options track by option.id">' +
                            '<span>{{option.name}}</span>' +
                        '</div>' +
                    '</div>';
        }

        function postLink(scope, element, attr, ctrls) {
            // if ngModel is not defined, we don't need to do anything
            var ngModelCtrl = ctrls[0];
            if (ngModelCtrl === undefined) return;

            function findObject(id) {
                //return ngModelCtrl.
            }

            function selectObject(id) {

            }
        }
    }
}());