angular.module('solar-system').component('venus', {

    templateUrl: './views/venus.html',

    controller: function ($interval, mainService, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = async () => {
            that.show = true;
            that.index = 0;
            let response = await mainService.venusText();
            that.venusText = response.data[0].info1;
            $interval(() => {
                $timeout(() => {
                    that.text += that.venusText[that.index];
                    that.index++;
                }, 500)
            }, 30, that.venusText.length);
        };
    }
});
