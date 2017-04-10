angular.module('solar-system').component('neptune2', {
    template: `<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.neptuneText2 = mainService.neptuneText2;
            var textAnim = $interval(function () {
                $timeout(function () {
                    that.text += that.neptuneText2[that.index]
                    that.index++;
                }, 700);
            }, 12, that.neptuneText2.length);

            that.stop = function () {
                $interval.cancel(textAnim);

            }
        }

        $timeout(function () {
            that.displayText2();
        }, 1700)

    }
})
