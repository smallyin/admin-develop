'use strict';
define(
    [
        'angular',
        './controller',
        './directive'
    ],
    function (angular) {
        angular.module('modules.module1', [
            'module1.controller',
            'module1.directive'
        ]);
    }
);
