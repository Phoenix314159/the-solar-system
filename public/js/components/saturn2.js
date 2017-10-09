angular.module('solar-system').component('saturn2', {
    template: `<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = async () => {
            that.show = true;
            that.index = 0;
            let response = await mainService.saturnText2();
            that.saturnText2 = response.data[0].info2;
            let textAnim = $interval(() => {
                $timeout(() => {
                    that.text += that.saturnText2[that.index]
                    that.index++;
                }, 500);
            }, 18, that.saturnText2.length);
            that.stop = () => {
                $interval.cancel(textAnim);
            }
        };
        $timeout(() => {
            that.displayText2();
        }, 1800)
    }
});
