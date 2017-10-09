angular.module('solar-system').component('saturn', {

    templateUrl: './views/saturn.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = async () => {
            that.show = true;
            that.index = 0;
            let response = await mainService.saturnText();
            that.saturnText = response.data[0].info1;

            let textAnim = $interval(() => {
                $timeout(() => {
                    that.text += that.saturnText[that.index]
                    that.index++;
                }, 580);
            }, 35, that.saturnText.length);
            that.stop = () => {
                $interval.cancel(textAnim);
            };
            that.displayTextReverse = async () => {
                that.show = true;
                let response = await mainService.saturnText();
                that.saturnText = response.data[0].info1;
                that.index = that.saturnText.length - 1;
                $interval(() => {
                    $timeout(() => {
                        that.text += that.saturnText[that.index];
                        that.index--;
                    }, 500);
                }, 5, 483);
            }
        }
    }
});
