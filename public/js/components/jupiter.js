angular.module('solar-system').component('jupiter', {

    templateUrl: './views/jupiter.html',

    controller: function ($interval, mainService, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.showMe = true;
        that.displayText = function () {
            that.show = true;
            that.index = 0;
             mainService.jupiterText().then(response => {
                that.jupiterText = response.data[0].info1;

                let textAnim = $interval(function () { //461
                     $timeout(function () {
                         that.text += that.jupiterText[that.index]
                         that.index++;

                     }, 570);


                 }, 26, that.jupiterText.length);
                 that.stop = function () {
                     $interval.cancel(textAnim);
                     that.showMe = false;
                 }

             });

        }

    }

})
