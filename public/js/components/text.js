angular.module('solar-system').directive('text', function ($timeout) {
    return {
        restrict: "E",
        link: function (scope, element) {
            let box = element.children()[0];
            $(box).on("click", function () {
                $(this).css({"background-color": "orange"});
                $timeout(function () {
                    $(box).fadeOut('slow');
                }, 500)
            });
        }
    }
});






