angular.module('solar-system').component('saturn', {

    templateUrl: './views/saturn.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.saturnText = mainService.saturnText;
            var textAnim = $interval(function () {   //488
                $timeout(function () {
                    that.text += that.saturnText[that.index]
                    that.index++;
                }, 580);
                console.log(that.index);


            }, 35, that.saturnText.length);
            that.stop = function () {
                $interval.cancel(textAnim);

            }
            that.displayTextReverse = function () {
                that.show = true;
                that.saturnText = mainService.saturnText;
                that.index = that.saturnText.length - 1;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.saturnText[that.index]
                        that.index--;
                        console.log(that.text);
                    }, 500);

                }, 5, 483);
            }

        }
    }
});
