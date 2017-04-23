angular.module('solar-system').component('mercury', {

    templateUrl: './views/mercury.html',

    controller: function ($interval, mainService, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.mercuryText().then(response => {
                that.mercuryText = response.data[0].info1;
                $interval(function () { //542
                    $timeout(function () {
                        that.text += that.mercuryText[that.index]
                        that.index++;
                    }, 480);
                }, 35, that.mercuryText.length);
            });
        }
        that.displayTextReverse = function () {
            that.show = true;
            mainService.mercuryText().then(response => {
                that.mercuryText = response.data[0].info1;
                that.index = that.mercuryText.length - 1;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.mercuryText[that.index]
                        that.index--;
                    }, 500);
                }, 50, 483);
            });
        }
    }
});

