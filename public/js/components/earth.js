angular.module('solar-system').component('earth', {
    templateUrl: './views/earth.html',

    controller: function (mainService, $interval, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.earthText().then(response => {
                that.earthText = response.data[0].info1;
                $interval(function () { //464
                    $timeout(function () {
                        that.text += that.earthText[that.index]
                        that.index++;
                    }, 1000)
                }, 25, that.earthText.length);
            });
        }
    }
})
