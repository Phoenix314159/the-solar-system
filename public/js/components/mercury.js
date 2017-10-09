angular.module('solar-system').component('mercury', {

    templateUrl: './views/mercury.html',

    controller: function ($interval, mainService, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = async () => {
            that.show = true;
            that.index = 0;
            let response = await  mainService.mercuryText();
            that.mercuryText = response.data[0].info1;
            $interval(() => { //542
                $timeout(() => {
                    that.text += that.mercuryText[that.index]
                    that.index++;
                }, 480);
            }, 35, that.mercuryText.length);
        };
        that.displayTextReverse = async () => {
            that.show = true;
            let response = await mainService.mercuryText();
            that.mercuryText = response.data[0].info1;
            that.index = that.mercuryText.length - 1;
            $interval(function () {
                $timeout(function () {
                    that.text += that.mercuryText[that.index]
                    that.index--;
                }, 500);
            }, 50, 483);
        }
    }
});

