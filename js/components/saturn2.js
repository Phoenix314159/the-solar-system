angular.module('solar-system').component('saturn2', {
    template: `<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.saturnText2 = mainService.saturnText2;
            var textAnim = $interval(function () {
                $timeout(function () {
                    that.text += that.saturnText2[that.index]
                    that.index++;
                }, 500);


            }, 18, that.saturnText2.length);
            that.stop = function () {
                $interval.cancel(textAnim);

            }
        }

        $timeout(function () {
            that.displayText2();
        }, 1800)

    }
})
