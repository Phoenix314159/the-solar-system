angular.module('solar-system').component('saturn', {

    templateUrl: './views/saturn.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.saturnText().then(response => {
                that.saturnText = response.data[0].info1;

                let textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.saturnText[that.index]
                        that.index++;
                    }, 580);


                }, 35, that.saturnText.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                }
                that.displayTextReverse = function () {
                    that.show = true;
                     mainService.saturnText().then(response => {
                        that.saturnText = response.data[0].info1;

                        that.index = that.saturnText.length - 1;
                         $interval(function () {
                             $timeout(function () {
                                 that.text += that.saturnText[that.index]
                                 that.index--;

                             }, 500);

                         }, 5, 483);
                    });


                }
            })



        }
    }
});
