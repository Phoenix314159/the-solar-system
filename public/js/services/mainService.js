angular.module('solar-system').service('mainService', function ($http) {
    this.sunText = () => {
        return $http({
            method: 'GET',
            url: '/api/suninfo'
        });
    };
    this.mercuryText = () => {
        return $http({
            method: 'GET',
            url: '/api/mercuryinfo1'
        });
    };
    this.mercuryText2 = () => {
        return $http({
            method: 'GET',
            url: '/api/mercuryinfo2'
        });
    };
    this.venusText = () => {
        return $http({
            method: 'GET',
            url: '/api/venusinfo1'
        });
    };
    this.venusText2 = () => {
        return $http({
            method: 'GET',
            url: '/api/venusinfo2'
        });
    };
    this.earthText = () => {
        return $http({
            method: 'GET',
            url: '/api/earthinfo1'
        });
    };
    this.earthText2 = () => {
        return $http({
            method: 'GET',
            url: '/api/earthinfo2'
        });
    };
    this.marsText = () => {
        return $http({
            method: 'GET',
            url: '/api/marsinfo1'
        });
    };
    this.marsText2 = () => {
        return $http({
            method: 'GET',
            url: '/api/marsinfo2'
        });
    };
    this.jupiterText = () => {
        return $http({
            method: 'GET',
            url: '/api/jupiterinfo1'
        });
    };
    this.jupiterText2 = () => {
        return $http({
            method: 'GET',
            url: '/api/jupiterinfo2'
        });
    };
    this.saturnText = () => {
        return $http({
            method: 'GET',
            url:  '/api/saturninfo1'
        });
    };
    this.saturnText2 = function () {
        return $http({
            method: 'GET',
            url: '/api/saturninfo2'
        });
    };
    this.uranusText = () => {
        return $http({
            method: 'GET',
            url: '/api/uranusinfo1'
        });
    };
    this.uranusText2 = () => {
        return $http({
            method: 'GET',
            url: '/api/uranusinfo2'
        });
    };
    this.neptuneText = () => {
        return $http({
            method: 'GET',
            url: '/api/neptuneinfo1'
        });
    };
    this.neptuneText2 = () => {
        return $http({
            method: 'GET',
            url: '/api/neptuneinfo2'
        });
    };

});
