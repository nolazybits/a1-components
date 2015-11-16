(function () {
    'use strict';

    angular.module('nolazybits.ui.subselect', [])
        .directive('nlbSubselect', ['$parse', subSelectDirective]);

    function subSelectDirective($parse)
    {
        var uniqueId = 1;
        return {
            restrict: 'E',
            require: ['ngModel'],
            scope: {
                options: '=',
                label: '@',
                placeholder: '@'
            },
            templateUrl: '../src/templates/subselect.tpl.html',
            link: {
                post: postLink
            }
        };

        function postLink(scope, element, attr, ctrls) {
            // if ngModel is not defined, we don't need to do anything
            var ngModelCtrl = ctrls[0];
            if (ngModelCtrl === undefined) return;

            var lookupOptions = {};

            var createBreadcrumbs = function(id)
            {
                scope.breadcrumbs = [];
                while(id)
                {
                    if( lookupOptions[id] )
                    {
                        scope.breadcrumbs.push(lookupOptions[id]);
                        id = lookupOptions[id].parentId;
                    }
                    //  there was an error
                    else
                    {
                        throw new Error('Couldn\'t find the option with id ' + id );
                    }
                }
                scope.breadcrumbs = scope.breadcrumbs.reverse();
            };

            var createLookup = function()
            {
                lookupOptions = {};
                scope.options.forEach(function(option, index, array)
                {
                    lookupOptions[option.id] = option;
                }, this);
            };

            //  recreate the lookup array if the options changes
            var optionsWatcher = scope.$watch('options', function(options)
            {
                createLookup();
            }, true);

            //  callback from the list of options. Clicking on one will display parents if any
            scope.selectOption = function(id)
            {
                scope.selectedOption = id;
                createBreadcrumbs(id);
            };

            scope.getSelectedOption = function()
            {
                if(scope.selectedOption)
                {
                    return lookupOptions[scope.selectedOption];
                }
                return {name: scope.placeholder, id: null, parentId: null};
            };

            //  remove the watcher when the scope is destroyed
            scope.$on('$destroy', function()
            {
                optionsWatcher();
            });

            createLookup();
            scope.showSubselect = false;
            scope.selectedOption = null;
            scope.breadcrumbs = [];
        }
    }
}());