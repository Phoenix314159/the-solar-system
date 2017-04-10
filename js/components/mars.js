angular.module('solar-system').component('mars', {

    templateUrl: './views/mars.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.marsText = mainService.marsText;

            $interval(function () { //471

                $timeout(function () {
                    $timeout(function () {
                        that.text += that.marsText[that.index]
                        that.index++;
                    }, 20)
                    ;
                }, 500);
                console.log(that.index)
            }, 30, that.marsText.length);


        }
    }
});
