angular.module('solar-system').component('earth2', {
    template: `<div>{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.earthText2 = mainService.earthText2;
            $interval(function () {
                $timeout(function () {
                    that.text += that.earthText2[that.index]
                    that.index++;
                }, 500);
            }, 15, that.earthText2.length);
        }
        $timeout(function () {
            that.displayText2();
        }, 1500)

    }
})
