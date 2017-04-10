angular.module('solar-system').component('uranus2', {
    template: `<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.index = 0;

        that.displayText2 = function () {
            that.show = true;
            that.showMe = true;
            that.uranusText2 = mainService.uranusText2;
            var textAnim = $interval(function () {
                $timeout(function () {
                    that.text += that.uranusText2[that.index]
                    that.index++;
                }, 700);


            }, 13, that.uranusText2.length);
            that.stop = function () {
                $interval.cancel(textAnim);
            }
        }
        that.start = function () {

            $interval(function () {
                $timeout(function () {

                    that.text += that.text[that.index]
                    that.index--;
                }, 500);
                if (that.text === undefined) {
                    that.stop();

                }


            }, 100, that.uranusText2.length / 1.5);
        }

        $timeout(function () {
            that.displayText2();
        }, 1550)

    }
})