angular.module('solar-system').component('mercury2', {
    template: `<div ng-click="$ctrl.displayTextReverse()">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = async () => {
            that.show = true;
            that.index = 0;
            let response = await mainService.mercuryText2();
            that.mercuryText2 = response.data[0].info2;
            $interval(() => {
                $timeout(() => {
                    that.text += that.mercuryText2[that.index]
                    that.index++;
                }, 700);
            }, 22, that.mercuryText2.length);
        };
        that.displayTextReverse = async () => {
            that.show = true;
            let response = await  mainService.mercuryText2();
            that.mercuryText2 = response.data[0].info2;
            that.index = that.mercuryText2.length - 1;
            $interval(() => {
                $timeout(() => {
                    that.text += that.mercuryText2[that.index]
                    that.index--;
                }, 500);
            }, 5, 483);
        };
        $timeout(() => {
            that.displayText2();
        }, 1500)
    }
});
