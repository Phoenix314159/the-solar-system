angular.module('solar-system').component('earth2', {
    template: '<div>{{$ctrl.text}}</div>',
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = async () => {
            that.show = true;
            that.index = 0;
            let response = await mainService.earthText2();
            that.earthText2 = response.data[0].info2;
            $interval(() => {
                $timeout(() => {
                    that.text += that.earthText2[that.index];
                    that.index++;
                }, 500);
            }, 15, that.earthText2.length);
        };
        $timeout(() => {
            that.displayText2();
        }, 1500)
    }
});
