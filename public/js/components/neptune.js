angular.module('solar-system').component('neptune', {

    templateUrl: './views/neptune.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = async () => {
            that.show = true;
            let response = await mainService.neptuneText();
            that.neptuneText = response.data[0].info1;
            that.index = 0;
            $interval(() => {
                $timeout(() => {
                    that.text += that.neptuneText[that.index];
                    that.index++;
                }, 500);
            }, 30, that.neptuneText.length);
        }
    }
});
