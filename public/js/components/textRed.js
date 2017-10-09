angular.module('solar-system').directive('textRed', function ($timeout) {
    return {
        restrict: "E",
        link: function (scope, element) {
            let box = element.children()[0];
            $(box).on("click", function () {
                $(this).css({"background-color": "red"});
                $timeout(function () {
                    $(box).fadeOut('slow', function () {
                    });
                }, 200)
            });
        }
    }
});
