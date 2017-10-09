angular.module('solar-system').component('sun', {

    templateUrl: './views/sun.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = async () => {
            that.show = true;
            that.index = 0;
            let response = await mainService.sunText();
            that.sunText = response.data[0].info1;
            $interval(() => {
                $timeout(() => {
                    that.text += that.sunText[that.index];
                    that.index++;
                }, 400)
            }, 25, that.sunText.length);
        };
    }
});

