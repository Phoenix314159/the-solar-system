angular.module('solar-system').component('venus', {

    templateUrl: './views/venus.html',

    controller: function ($interval, mainService, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.venusText = mainService.venusText;
            $interval(function () { //505
                $timeout(function () {
                    that.text += that.venusText[that.index]
                    that.index++;
                }, 500)

            }, 30, that.venusText.length);

        };
    }
})
