angular.module('solar-system').component('neptune', {

    templateUrl: './views/neptune.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";

        that.displayText = function () {
            that.show = true;
            that.neptuneText = mainService.neptuneText;
            that.index = 0;
            $interval(function () {
                $timeout(function () { //483
                    that.text += that.neptuneText[that.index]
                    that.index++;
                }, 500);


            }, 30, that.neptuneText.length);

        }

        //     that.displayTextReverse = function () {
        //         that.show = true;
        //         that.neptuneText = mainService.neptuneText;
        //         that.index = that.neptuneText.length -1;
        //         $interval(function () {
        //             $timeout(function () {
        //                 that.text += that.neptuneText[that.index]
        //                 that.index--;
        //             },500);
        //
        //
        //         }, 5, 483);
        //
        //     }
    }
});
