angular.module('solar-system').service('mainService', function ($http) {
    let serverUrl = 'http://localhost:3023';
    this.sunText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/suninfo'
        });
    };
    this.mercuryText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/mercuryinfo1'
        });
    };
    this.mercuryText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/mercuryinfo2'
        });
    };
    this.venusText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/venusinfo1'
        });
    };
    this.venusText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/venusinfo2'
        });
    };
    this.earthText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/earthinfo1'
        });
    };
    this.earthText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/earthinfo2'
        });
    };
    this.marsText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/marsinfo1'
        });
    };
    this.marsText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/marsinfo2'
        });
    };
    this.jupiterText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/jupiterinfo1'
        });
    };
    this.jupiterText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/jupiterinfo2'
        });
    };
    this.saturnText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/saturninfo1'
        });
    };
    this.saturnText2 = function () {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/saturninfo2'
        });
    };
    this.uranusText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/uranusinfo1'
        });
    };
    this.uranusText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/uranusinfo2'
        });
    };
    this.neptuneText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/neptuneinfo1'
        });
    };
    this.neptuneText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/neptuneinfo2'
        });
    };

});
