angular.module('solar-system').component('earth', {
    templateUrl: './views/earth.html',

    controller: function (mainService, $interval, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.earthText = mainService.earthText;
            $interval(function () { //464
                $timeout(function () {
                    that.text += that.earthText[that.index]
                    that.index++;
                }, 1000)

                console.log(that.index);
            }, 25, that.earthText.length);


        }
    }
})
