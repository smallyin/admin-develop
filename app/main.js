'use strict';
require.config({
    baseUrl: '',
    urlArgs: 'bustcache=' + (new Date()).getTime(),
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',

        angular: '../bower_components/angular/angular',
        uiRouter: '../bower_components/ui-router/release/angular-ui-router',
        ocLazyLoad: '../bower_components/ocLazyLoad/dist/ocLazyLoad',

        ngCookies: '../bower_components/angular-cookies/angular-cookies',
        ngBreadcrumb: '../bower_components/angular-breadcrumb/dist/angular-breadcrumb',
        ngSlimScroll: '../bower_components/ngSlimscroll/src/js/ngSlimscroll',
        blockUI: '../bower_components/angular-block-ui/dist/angular-block-ui',

        decorator: '../app/boot/app.decorator',
        constant: '../app/boot/app.constant',
        config: '../app/boot/app.config',
        locale: '../app/boot/app.locale',
        router: '../app/boot/app.router',
        directive: '../app/boot/app.directive',
        filter: '../app/boot/app.filter',
        controller: '../app/boot/app.controller',
        service: '../app/boot/app.service',
        application: '../app/boot/app'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        angular: {
            exports: 'angular'
        },
        uiRouter: {
            deps: ['angular'],
            exports: 'uiRouter'
        },
        ocLazyLoad: {
            deps: ['angular'],
            exports: 'ocLazyLoad'
        },
        ngCookies: {
            deps: ['angular'],
            exports: 'ngCookies'
        },
        ngBreadcrumb: {
            deps: ['angular', 'uiRouter'],
            exports: 'ngBreadcrumb'
        },
        ngSlimScroll: {
            deps: ['angular'],
            exports: 'ngSlimScroll'
        },
        blockUI: {
            deps: ['angular'],
            exports: 'blockUI'
        },
        decorator: {
            exports: 'decorator'
        },
        constant: {
            exports: 'constant'
        },
        config: {
            exports: 'config'
        },
        locale: {
            exports: 'locale'
        },
        router: {
            exports: 'router'
        },
        directive: {
            exports: 'directive'
        },
        filter: {
            exports: 'filter'
        },
        controller: {
            exports: 'controller'
        },
        service: {
            exports: 'service'
        },
        application: {
            exports: 'application'
        }
    },
    config: {
        'app/plugins/requirejs/i18n': {
            // language support
            // [
            //      ''           // English, default language
            //      'zh-cn',     // Simplified Chinese
            //      'zh-hk',     // HK Traditional Chinese
            // ]
            locale: localStorage.getItem('locale') || ''
        }
    },
    callback: function () {
        require(['jquery', 'application'], function ($, application) {
            application.bootstrap();
        });
    }
});
