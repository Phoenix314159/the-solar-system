angular.module('solar-system').component('uranus', {

    templateUrl: './views/uranus.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.index = 0;
        that.text = "";
        that.displayText = function () {
            that.show = true;

            that.uranusText = mainService.uranusText;
            var textAnim = $interval(function () { //460
                $timeout(function () {
                    that.text += that.uranusText[that.index]
                    that.index++;
                    if (that.text == undefined) {
                        that.show = false;
                    }
                }, 470)

            }, 20, that.uranusText.length);
            that.stop = function () {
                $interval.cancel(textAnim);

            }

        }
    }
});
