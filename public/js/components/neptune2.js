angular.module('solar-system').component('neptune2', {
    template: `<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = async () => {
            that.show = true;
            that.index = 0;
            let response = await mainService.neptuneText2();
            that.neptuneText2 = response.data[0].info2;
            let textAnim = $interval(() => {
                $timeout(() => {
                    that.text += that.neptuneText2[that.index]
                    that.index++;
                }, 700);
            }, 12, that.neptuneText2.length);
            that.stop = () => {
                $interval.cancel(textAnim);
            }
        };
        $timeout(() => {
            that.displayText2();
        }, 1700)
    }
});
