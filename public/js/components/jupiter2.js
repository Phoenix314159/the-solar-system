angular.module('solar-system').component('jupiter2', {
    template: `<div ng-click="$ctrl.stop()" ng-show="$ctrl.showMe">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.showMe = true;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.jupiterText2().then(response => {
                that.jupiterText2 = response.data[0].info2;

                let textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.jupiterText2[that.index]
                        that.index++;
                    }, 500);
                }, 11, that.jupiterText2.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                    that.showMe = false;
                }
            });
            that.start = function () {
                that.displayText2();
            }
        }
        $timeout(function () {
            that.displayText2();

        }, 1000)

    }
})
