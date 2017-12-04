angular.module('solar-system').component('earth', {
    templateUrl: './views/earth.html',

    controller: function (mainService, $interval, $timeout) {
        let vm = this;
        vm.show = false;
        vm.text = "";
        vm.displayText = async () => {
            vm.show = true;
            vm.index = 0;
            let response = await mainService.earthText();
            vm.earthText = response.data[0].info1;
            $interval(() => { //464
                $timeout(() => {
                    vm.text += vm.earthText[that.index];
                    vm.index++;
                }, 1000)
            }, 25, vm.earthText.length);
        }
    }
});
