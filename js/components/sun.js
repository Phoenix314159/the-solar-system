angular.module('solar-system').component('sun', {

    templateUrl: './views/sun.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";

        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.sunText = mainService.sunText;
            $interval(function () {
                $timeout(function () {
                    that.text += that.sunText[that.index]
                    that.index++;
                }, 400)


            }, 25, that.sunText.length);

        };
    }
});

