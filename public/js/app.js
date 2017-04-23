angular.module('solar-system', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('sun', {
                url: '/sun',
                template: '<sun></sun>',
                component: 'sun'
            })
            .state('mercury', {
                url: '/mercury',
                template: '<mercury></mercury>',
                component: 'mercury'
            })
            .state('venus', {
                url: '/venus',
                template: '<venus></venus>',
                component: 'venus'
            })
            .state('earth', {
                url: '/earth',
                template: '<earth></earth>',
                component: 'earth'
            })
            .state('mars', {
                url: '/mars',
                template: '<mars></mars>',
                component: 'mars'
            })
            .state('jupiter', {
                url: '/jupiter',
                template: '<jupiter></jupiter>',
                component: 'jupiter'
            })
            .state('saturn', {
                url: '/saturn',
                template: '<saturn></saturn>',
                component: 'saturn'
            })
            .state('uranus', {
                url: '/uranus',
                template: '<uranus></uranus>',
                component: 'uranus'
            })
            .state('neptune', {
                url: '/neptune',
                template: '<neptune></neptune>',
                component: 'neptune'
            })
            .state('solar-system', {
                url: '/solar-system',
                templateUrl: './views/solar-system.html'
            });
        $urlRouterProvider.otherwise('/');

    })