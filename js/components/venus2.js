angular.module('solar-system').component('venus2', {
    template: `<div>{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.venusText2 = mainService.venusText2;
            $interval(function () {
                $timeout(function () {
                    that.text += that.venusText2[that.index]
                    that.index++;
                }, 700);


            }, 18, that.venusText2.length);
        }
        $timeout(function () {
            that.displayText2();
        }, 1700)

    }
})
