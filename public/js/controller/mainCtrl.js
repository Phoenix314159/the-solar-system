angular.module('solar-system').controller('mainCtrl', function ($location, $scope) {
    $scope.show2 = true;

    $scope.isActive = function (des) {
        return des === $location.path();
    }
})