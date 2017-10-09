angular.module('solar-system').component('mars', {

    templateUrl: './views/mars.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = async () => {
            that.show = true;
            that.index = 0;
            let response = await mainService.marsText();
            that.marsText = response.data[0].info1;
            $interval(function () {
                $timeout(function () {
                    $timeout(function () {
                        that.text += that.marsText[that.index]
                        that.index++;
                    }, 20)
                }, 500);
            }, 30, that.marsText.length);
        }
    }
});
