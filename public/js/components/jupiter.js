angular.module('solar-system').component('jupiter', {

    templateUrl: './views/jupiter.html',

    controller: function ($interval, mainService, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.showMe = true;
        that.displayText = async () => {
            that.show = true;
            that.index = 0;
            let response = await mainService.jupiterText();
            that.jupiterText = response.data[0].info1;

            let textAnim = $interval(() => { //461
                $timeout(() => {
                    that.text += that.jupiterText[that.index];
                    that.index++;
                }, 570);
            }, 26, that.jupiterText.length);
            that.stop = () => {
                $interval.cancel(textAnim);
                that.showMe = false;
            }
        }
    }
});
