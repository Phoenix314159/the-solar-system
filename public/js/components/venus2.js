angular.module('solar-system').component('venus2', {
    template: `<div>{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = async () => {
            that.show = true;
            that.index = 0;
            let response = await mainService.venusText2();
            that.venusText2 = response.data[0].info2;
            $interval(() => {
                $timeout(() => {
                    that.text += that.venusText2[that.index];
                    that.index++;
                }, 700);
            }, 18, that.venusText2.length);
        };
        $timeout(() => {
            that.displayText2();
        }, 1700)
    }
});
