'use strict';

angular.module('solar-system', ['ui.router']).config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {
    $stateProvider.state('sun', {
        url: '/sun',
        template: '<sun></sun>',
        component: 'sun'
    }).state('mercury', {
        url: '/mercury',
        template: '<mercury></mercury>',
        component: 'mercury'
    }).state('venus', {
        url: '/venus',
        template: '<venus></venus>',
        component: 'venus'
    }).state('earth', {
        url: '/earth',
        template: '<earth></earth>',
        component: 'earth'
    }).state('mars', {
        url: '/mars',
        template: '<mars></mars>',
        component: 'mars'
    }).state('jupiter', {
        url: '/jupiter',
        template: '<jupiter></jupiter>',
        component: 'jupiter'
    }).state('saturn', {
        url: '/saturn',
        template: '<saturn></saturn>',
        component: 'saturn'
    }).state('uranus', {
        url: '/uranus',
        template: '<uranus></uranus>',
        component: 'uranus'
    }).state('neptune', {
        url: '/neptune',
        template: '<neptune></neptune>',
        component: 'neptune'
    }).state('solar-system', {
        url: '/solar-system',
        templateUrl: './views/solar-system.html'
    });
    $urlRouterProvider.otherwise('/');
}]);
'use strict';

angular.module('solar-system').component('astronaut', {
    templateUrl: './views/astronaut.html',
    controller: function controller() {
        this.show3 = true;
    }
});
'use strict';

angular.module('solar-system').component('earth', {
    templateUrl: './views/earth.html',

    controller: ["mainService", "$interval", "$timeout", function controller(mainService, $interval, $timeout) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.earthText().then(function (response) {
                that.earthText = response.data[0].info1;
                $interval(function () {
                    //464
                    $timeout(function () {
                        that.text += that.earthText[that.index];
                        that.index++;
                    }, 1000);
                }, 25, that.earthText.length);
            });
        };
    }]
});
'use strict';

angular.module('solar-system').component('earth2', {
    template: '<div>{{$ctrl.text}}</div>',
    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.earthText2().then(function (response) {
                that.earthText2 = response.data[0].info2;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.earthText2[that.index];
                        that.index++;
                    }, 500);
                }, 15, that.earthText2.length);
            });
        };
        $timeout(function () {
            that.displayText2();
        }, 1500);
    }]
});
'use strict';

angular.module('solar-system').component('jupiter', {

    templateUrl: './views/jupiter.html',

    controller: ["$interval", "mainService", "$timeout", function controller($interval, mainService, $timeout) {
        var that = this;
        that.show = false;
        that.text = "";
        that.showMe = true;
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.jupiterText().then(function (response) {
                that.jupiterText = response.data[0].info1;

                var textAnim = $interval(function () {
                    //461
                    $timeout(function () {
                        that.text += that.jupiterText[that.index];
                        that.index++;
                    }, 570);
                }, 26, that.jupiterText.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                    that.showMe = false;
                };
            });
        };
    }]

});
'use strict';

angular.module('solar-system').component('jupiter2', {
    template: '<div ng-click="$ctrl.stop()" ng-show="$ctrl.showMe">{{$ctrl.text}}</div>',
    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.showMe = true;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.jupiterText2().then(function (response) {
                that.jupiterText2 = response.data[0].info2;

                var textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.jupiterText2[that.index];
                        that.index++;
                    }, 500);
                }, 11, that.jupiterText2.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                    that.showMe = false;
                };
            });
            that.start = function () {
                that.displayText2();
            };
        };
        $timeout(function () {
            that.displayText2();
        }, 1000);
    }]
});
'use strict';

angular.module('solar-system').component('mars', {

    templateUrl: './views/mars.html',

    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.marsText().then(function (response) {
                that.marsText = response.data[0].info1;
                $interval(function () {
                    $timeout(function () {
                        $timeout(function () {
                            that.text += that.marsText[that.index];
                            that.index++;
                        }, 20);
                    }, 500);
                }, 30, that.marsText.length);
            });
        };
    }]
});
'use strict';

angular.module('solar-system').component('mars2', {
    template: '<div>{{$ctrl.text}}</div>',
    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.marsText2().then(function (response) {
                that.marsText2 = response.data[0].info2;

                $interval(function () {
                    $timeout(function () {
                        that.text += that.marsText2[that.index];
                        that.index++;
                    }, 700);
                }, 18, that.marsText2.length);
            });
        };
        $timeout(function () {
            that.displayText2();
        }, 1700);
    }]
});
'use strict';

angular.module('solar-system').component('mercury', {

    templateUrl: './views/mercury.html',

    controller: ["$interval", "mainService", "$timeout", function controller($interval, mainService, $timeout) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.mercuryText().then(function (response) {
                that.mercuryText = response.data[0].info1;
                $interval(function () {
                    //542
                    $timeout(function () {
                        that.text += that.mercuryText[that.index];
                        that.index++;
                    }, 480);
                }, 35, that.mercuryText.length);
            });
        };
        that.displayTextReverse = function () {
            that.show = true;
            mainService.mercuryText().then(function (response) {
                that.mercuryText = response.data[0].info1;
                that.index = that.mercuryText.length - 1;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.mercuryText[that.index];
                        that.index--;
                    }, 500);
                }, 50, 483);
            });
        };
    }]
});
'use strict';

angular.module('solar-system').component('mercury2', {
    template: '<div ng-click="$ctrl.displayTextReverse()">{{$ctrl.text}}</div>',
    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.mercuryText2().then(function (response) {
                that.mercuryText2 = response.data[0].info2;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.mercuryText2[that.index];
                        that.index++;
                    }, 700);
                }, 22, that.mercuryText2.length);
            });
        };
        that.displayTextReverse = function () {
            that.show = true;
            mainService.mercuryText2().then(function (response) {
                that.mercuryText2 = response.data[0].info2;
                that.index = that.mercuryText2.length - 1;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.mercuryText2[that.index];
                        that.index--;
                        console.log(that.text);
                    }, 500);
                }, 5, 483);
            });
        };
        $timeout(function () {
            that.displayText2();
        }, 1500);
    }]
});
'use strict';

angular.module('solar-system').component('neptune', {

    templateUrl: './views/neptune.html',

    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.show = false;
        that.text = "";

        that.displayText = function () {
            that.show = true;
            mainService.neptuneText().then(function (response) {
                that.neptuneText = response.data[0].info1;
                // console.log(response.data[0].info1);
                that.index = 0;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.neptuneText[that.index];
                        that.index++;
                    }, 500);
                }, 30, that.neptuneText.length);
            });
        };

        //     that.displayTextReverse = function () {
        //         that.show = true;
        //         that.neptuneText = mainService.neptuneText;
        //         that.index = that.neptuneText.length -1;
        //         $interval(function () {
        //             $timeout(function () {
        //                 that.text += that.neptuneText[that.index]
        //                 that.index--;
        //             },500);
        //
        //
        //         }, 5, 483);
        //
        //     }
    }]
});
'use strict';

angular.module('solar-system').component('neptune2', {
    template: '<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>',
    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.neptuneText2().then(function (response) {
                that.neptuneText2 = response.data[0].info2;
                var textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.neptuneText2[that.index];
                        that.index++;
                    }, 700);
                }, 12, that.neptuneText2.length);

                that.stop = function () {
                    $interval.cancel(textAnim);
                };
            });
        };

        $timeout(function () {
            that.displayText2();
        }, 1700);
    }]
});
'use strict';

angular.module('solar-system').component('saturn', {

    templateUrl: './views/saturn.html',

    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.saturnText().then(function (response) {
                that.saturnText = response.data[0].info1;

                var textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.saturnText[that.index];
                        that.index++;
                    }, 580);
                }, 35, that.saturnText.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                };
                that.displayTextReverse = function () {
                    that.show = true;
                    mainService.saturnText().then(function (response) {
                        that.saturnText = response.data[0].info1;

                        that.index = that.saturnText.length - 1;
                        $interval(function () {
                            $timeout(function () {
                                that.text += that.saturnText[that.index];
                                that.index--;
                            }, 500);
                        }, 5, 483);
                    });
                };
            });
        };
    }]
});
'use strict';

angular.module('solar-system').component('saturn2', {
    template: '<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>',
    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.saturnText2().then(function (response) {
                that.saturnText2 = response.data[0].info2;
                console.log(response.data);
                var textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.saturnText2[that.index];
                        that.index++;
                    }, 500);
                }, 18, that.saturnText2.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                };
            });
        };
        $timeout(function () {
            that.displayText2();
        }, 1800);
    }]
});
'use strict';

angular.module('solar-system').component('sun', {

    templateUrl: './views/sun.html',

    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.sunText().then(function (response) {
                that.sunText = response.data[0].info1;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.sunText[that.index];
                        that.index++;
                    }, 400);
                }, 25, that.sunText.length);
            });
        };
    }]
});
'use strict';

angular.module('solar-system').directive('text', ["$timeout", function ($timeout) {
    return {
        restrict: "E",
        link: function link(scope, element, attributes) {
            var box = element.children()[0];
            $(box).on("click", function () {
                $(this).css({ "background-color": "orange" });
                $timeout(function () {
                    $(box).fadeOut('slow');
                }, 500);
            });
        }
    };
}]);
'use strict';

angular.module('solar-system').directive('textGray', ["$timeout", function ($timeout) {
    return {
        restrict: "E",
        link: function link(scope, element, attributes) {
            var box = element.children()[0];
            $(box).on("click", function () {
                $(this).css({ "background-color": "gray" });
                $timeout(function () {
                    $(box).fadeOut('slow', function () {
                        $(this).slideDown('slow');
                    });
                }, 500);
            });
        }
    };
}]);
'use strict';

angular.module('solar-system').directive('textRed', ["$timeout", function ($timeout) {
    return {
        restrict: "E",
        link: function link(scope, element, attributes) {
            var box = element.children()[0];
            $(box).on("click", function () {
                $(this).css({ "background-color": "red" });
                $timeout(function () {
                    $(box).fadeOut('slow', function () {});
                }, 200);
            });
        }
    };
}]);
'use strict';

angular.module('solar-system').component('uranus', {

    templateUrl: './views/uranus.html',

    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.show = false;
        that.index = 0;
        that.text = "";
        that.displayText = function () {
            that.show = true;

            mainService.uranusText().then(function (response) {
                that.uranusText = response.data[0].info1;
                var textAnim = $interval(function () {
                    //460
                    $timeout(function () {
                        that.text += that.uranusText[that.index];
                        that.index++;
                        if (that.text == undefined) {
                            that.show = false;
                        }
                    }, 470);
                }, 20, that.uranusText.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                };
            });
        };
    }]
});
'use strict';

angular.module('solar-system').component('uranus2', {
    template: '<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>',
    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.index = 0;

        that.displayText2 = function () {
            that.show = true;
            that.showMe = true;
            mainService.uranusText2().then(function (response) {
                console.log(response.data);
                that.uranusText2 = response.data[0].info2;
                var textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.uranusText2[that.index];
                        that.index++;
                    }, 700);
                }, 13, that.uranusText2.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                };
                that.start = function () {

                    $interval(function () {
                        $timeout(function () {

                            that.text += that.text[that.index];
                            that.index--;
                        }, 500);
                        if (that.text === undefined) {
                            that.stop();
                        }
                    }, 100, that.uranusText2.length / 1.5);
                };
            });
        };
        $timeout(function () {
            that.displayText2();
        }, 1550);
    }]
});
'use strict';

angular.module('solar-system').component('venus', {

    templateUrl: './views/venus.html',

    controller: ["$interval", "mainService", "$timeout", function controller($interval, mainService, $timeout) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.venusText().then(function (response) {
                that.venusText = response.data[0].info1;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.venusText[that.index];
                        that.index++;
                    }, 500);
                }, 30, that.venusText.length);
            });
        };
    }]
});
'use strict';

angular.module('solar-system').component('venus2', {
    template: '<div>{{$ctrl.text}}</div>',
    controller: ["$interval", "$timeout", "mainService", function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.venusText2().then(function (response) {
                that.venusText2 = response.data[0].info2;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.venusText2[that.index];
                        that.index++;
                    }, 700);
                }, 18, that.venusText2.length);
            });
        };
        $timeout(function () {
            that.displayText2();
        }, 1700);
    }]
});
'use strict';

angular.module('solar-system').controller('mainCtrl', ["$location", "$scope", function ($location, $scope) {
    $scope.show2 = true;

    $scope.isActive = function (des) {
        return des === $location.path();
    };
}]);
'use strict';

angular.module('solar-system').service('mainService', ["$http", function ($http) {
    this.sunText = function () {
        return $http({
            method: 'GET',
            url: '/api/suninfo'
        });
    };
    this.mercuryText = function () {
        return $http({
            method: 'GET',
            url: '/api/mercuryinfo1'
        });
    };
    this.mercuryText2 = function () {
        return $http({
            method: 'GET',
            url: '/api/mercuryinfo2'
        });
    };
    this.venusText = function () {
        return $http({
            method: 'GET',
            url: '/api/venusinfo1'
        });
    };
    this.venusText2 = function () {
        return $http({
            method: 'GET',
            url: '/api/venusinfo2'
        });
    };
    this.earthText = function () {
        return $http({
            method: 'GET',
            url: '/api/earthinfo1'
        });
    };
    this.earthText2 = function () {
        return $http({
            method: 'GET',
            url: '/api/earthinfo2'
        });
    };
    this.marsText = function () {
        return $http({
            method: 'GET',
            url: '/api/marsinfo1'
        });
    };
    this.marsText2 = function () {
        return $http({
            method: 'GET',
            url: '/api/marsinfo2'
        });
    };
    this.jupiterText = function () {
        return $http({
            method: 'GET',
            url: '/api/jupiterinfo1'
        });
    };
    this.jupiterText2 = function () {
        return $http({
            method: 'GET',
            url: '/api/jupiterinfo2'
        });
    };
    this.saturnText = function () {
        return $http({
            method: 'GET',
            url: '/api/saturninfo1'
        });
    };
    this.saturnText2 = function () {
        return $http({
            method: 'GET',
            url: '/api/saturninfo2'
        });
    };
    this.uranusText = function () {
        return $http({
            method: 'GET',
            url: '/api/uranusinfo1'
        });
    };
    this.uranusText2 = function () {
        return $http({
            method: 'GET',
            url: '/api/uranusinfo2'
        });
    };
    this.neptuneText = function () {
        return $http({
            method: 'GET',
            url: '/api/neptuneinfo1'
        });
    };
    this.neptuneText2 = function () {
        return $http({
            method: 'GET',
            url: '/api/neptuneinfo2'
        });
    };
}]);
//# sourceMappingURL=bundle.js.map
