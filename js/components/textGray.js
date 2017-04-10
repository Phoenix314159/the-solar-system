angular.module('solar-system').directive('textGray', function ($timeout) {
    return {
        restrict: "E",
        link: function (scope, element, attributes) {
            var box = element.children()[0];
            $(box).on("click", function () {
                $(this).css({"background-color": "gray"});
                $timeout(function () {
                    $(box).fadeOut('slow', function () {
                        $(this).slideDown('slow');
                    });
                }, 500)
            });

        }
    }
})
