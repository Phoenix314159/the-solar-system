angular.module('solar-system', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('sun', {
                url: '/sun',
                template: '<sun></sun>',
                component: 'sun'
            })
            .state('mercury', {
                url: '/mercury',
                template: '<mercury></mercury>',
                component: 'mercury'
            })
            .state('venus', {
                url: '/venus',
                template: '<venus></venus>',
                component: 'venus'
            })
            .state('earth', {
                url: '/earth',
                template: '<earth></earth>',
                component: 'earth'
            })
            .state('mars', {
                url: '/mars',
                template: '<mars></mars>',
                component: 'mars'
            })
            .state('jupiter', {
                url: '/jupiter',
                template: '<jupiter></jupiter>',
                component: 'jupiter'
            })
            .state('saturn', {
                url: '/saturn',
                template: '<saturn></saturn>',
                component: 'saturn'
            })
            .state('uranus', {
                url: '/uranus',
                template: '<uranus></uranus>',
                component: 'uranus'
            })
            .state('neptune', {
                url: '/neptune',
                template: '<neptune></neptune>',
                component: 'neptune'
            })
            .state('solar-system', {
                url: '/solar-system',
                templateUrl: './views/solar-system.html'
            });
        $urlRouterProvider.otherwise('/');

    })
angular.module('solar-system').component('astronaut', {
    templateUrl: './views/astronaut.html',
    controller: function () {
        this.show3 = true;
    }
});





angular.module('solar-system').component('earth', {
    templateUrl: './views/earth.html',

    controller: function (mainService, $interval, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.earthText().then(response => {
                that.earthText = response.data[0].info1;
                $interval(function () { //464
                    $timeout(function () {
                        that.text += that.earthText[that.index]
                        that.index++;
                    }, 1000)
                }, 25, that.earthText.length);
            });
        }
    }
})

angular.module('solar-system').component('earth2', {
    template: `<div>{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
             mainService.earthText2().then(response => {
                that.earthText2 = response.data[0].info2;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.earthText2[that.index];
                        that.index++;
                    }, 500);
                }, 15, that.earthText2.length);
            });
        }
        $timeout(function () {
            that.displayText2();
        }, 1500)

    }
})

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

angular.module('solar-system').component('jupiter2', {
    template: `<div ng-click="$ctrl.stop()" ng-show="$ctrl.showMe">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.showMe = true;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.jupiterText2().then(response => {
                that.jupiterText2 = response.data[0].info2;

                let textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.jupiterText2[that.index]
                        that.index++;
                    }, 500);
                }, 11, that.jupiterText2.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                    that.showMe = false;
                }
            });
            that.start = function () {
                that.displayText2();
            }
        }
        $timeout(function () {
            that.displayText2();

        }, 1000)

    }
})

angular.module('solar-system').component('mars', {

    templateUrl: './views/mars.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.marsText().then(response => {
                that.marsText = response.data[0].info1;
                $interval(function () {
                    $timeout(function () {
                        $timeout(function () {
                            that.text += that.marsText[that.index]
                            that.index++;
                        }, 20)
                        ;
                    }, 500);

                }, 30, that.marsText.length);
            })
        }
    }
});

angular.module('solar-system').component('mars2', {
    template: `<div>{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
             mainService.marsText2().then(response => {
                that.marsText2 = response.data[0].info2;

                $interval(function () {
                     $timeout(function () {
                         that.text += that.marsText2[that.index]
                         that.index++;
                     }, 700);


                 }, 18, that.marsText2.length);
            });
        }
        $timeout(function () {
            that.displayText2();
        }, 1700)

    }
})

angular.module('solar-system').component('mercury', {

    templateUrl: './views/mercury.html',

    controller: function ($interval, mainService, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.mercuryText().then(response => {
                that.mercuryText = response.data[0].info1;
                $interval(function () { //542
                    $timeout(function () {
                        that.text += that.mercuryText[that.index]
                        that.index++;
                    }, 480);
                }, 35, that.mercuryText.length);
            });
        }
        that.displayTextReverse = function () {
            that.show = true;
            mainService.mercuryText().then(response => {
                that.mercuryText = response.data[0].info1;
                that.index = that.mercuryText.length - 1;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.mercuryText[that.index]
                        that.index--;
                    }, 500);
                }, 50, 483);
            });
        }
    }
});


angular.module('solar-system').component('mercury2', {
    template: `<div ng-click="$ctrl.displayTextReverse()">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.mercuryText2().then(response => {
                that.mercuryText2 = response.data[0].info2;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.mercuryText2[that.index]
                        that.index++;
                    }, 700);
                }, 22, that.mercuryText2.length);
            });
        }
        that.displayTextReverse = function () {
            that.show = true;
            mainService.mercuryText2().then(response => {
                that.mercuryText2 = response.data[0].info2;
                    that.index = that.mercuryText2.length - 1;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.mercuryText2[that.index]
                        that.index--;
                        console.log(that.text);
                    }, 500);
                }, 5, 483);
            });
        }
        $timeout(function () {
            that.displayText2();
        }, 1500)
    }
})

angular.module('solar-system').component('neptune', {

    templateUrl: './views/neptune.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";

        that.displayText = function () {
            that.show = true;
            mainService.neptuneText().then(response => {
                that.neptuneText = response.data[0].info1;
                 // console.log(response.data[0].info1);
                that.index = 0;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.neptuneText[that.index]
                        that.index++;
                    }, 500);


                }, 30, that.neptuneText.length);
            });


        }

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
    }
});

angular.module('solar-system').component('neptune2', {
    template: `<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
             mainService.neptuneText2().then(response => {
                that.neptuneText2 = response.data[0].info2;
                 let textAnim = $interval(function () {
                     $timeout(function () {
                         that.text += that.neptuneText2[that.index]
                         that.index++;
                     }, 700);
                 }, 12, that.neptuneText2.length);

                 that.stop = function () {
                     $interval.cancel(textAnim);

                 }
            });

        }

        $timeout(function () {
            that.displayText2();
        }, 1700)

    }
})

angular.module('solar-system').component('saturn', {

    templateUrl: './views/saturn.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.saturnText().then(response => {
                that.saturnText = response.data[0].info1;

                let textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.saturnText[that.index]
                        that.index++;
                    }, 580);


                }, 35, that.saturnText.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                }
                that.displayTextReverse = function () {
                    that.show = true;
                     mainService.saturnText().then(response => {
                        that.saturnText = response.data[0].info1;

                        that.index = that.saturnText.length - 1;
                         $interval(function () {
                             $timeout(function () {
                                 that.text += that.saturnText[that.index]
                                 that.index--;

                             }, 500);

                         }, 5, 483);
                    });


                }
            })



        }
    }
});

angular.module('solar-system').component('saturn2', {
    template: `<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.saturnText2().then(function(response) {
                that.saturnText2 = response.data[0].info2;
                 console.log(response.data)
                let textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.saturnText2[that.index]
                        that.index++;
                    }, 500);


                }, 18, that.saturnText2.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                }
            });
        }
        $timeout(function () {
            that.displayText2();
        }, 1800)
    }
})

angular.module('solar-system').component('sun', {

    templateUrl: './views/sun.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            mainService.sunText().then(response => {
                that.sunText = response.data[0].info1;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.sunText[that.index]
                        that.index++;
                    }, 400)
                }, 25, that.sunText.length);
            });
        };
    }
});


angular.module('solar-system').directive('text', function ($timeout) {
    return {
        restrict: "E",
        link: function (scope, element, attributes) {
            var box = element.children()[0];
            $(box).on("click", function () {
                $(this).css({"background-color": "orange"});
                $timeout(function () {
                    $(box).fadeOut('slow');
                }, 500)
            });

        }
    }
})







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

angular.module('solar-system').directive('textRed', function ($timeout) {
    return {
        restrict: "E",
        link: function (scope, element, attributes) {
            var box = element.children()[0];
            $(box).on("click", function () {
                $(this).css({"background-color": "red"});
                $timeout(function () {
                    $(box).fadeOut('slow', function () {

                    });
                }, 200)
            });

        }
    }
})

angular.module('solar-system').component('uranus', {

    templateUrl: './views/uranus.html',

    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.show = false;
        that.index = 0;
        that.text = "";
        that.displayText = function () {
            that.show = true;

             mainService.uranusText().then(response => {
                that.uranusText = response.data[0].info1;
                let textAnim = $interval(function () { //460
                     $timeout(function () {
                         that.text += that.uranusText[that.index]
                         that.index++;
                         if (that.text == undefined) {
                             that.show = false;
                         }
                     }, 470)

                 }, 20, that.uranusText.length);
                 that.stop = function () {
                     $interval.cancel(textAnim);

                 }
            })


        }
    }
});

angular.module('solar-system').component('uranus2', {
    template: `<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.index = 0;

        that.displayText2 = function () {
            that.show = true;
            that.showMe = true;
            mainService.uranusText2().then(response => {
                console.log(response.data);
                that.uranusText2 = response.data[0].info2;
                let textAnim = $interval(function () {
                    $timeout(function () {
                        that.text += that.uranusText2[that.index]
                        that.index++;
                    }, 700);


                }, 13, that.uranusText2.length);
                that.stop = function () {
                    $interval.cancel(textAnim);
                }
                that.start = function () {

                    $interval(function () {
                        $timeout(function () {

                            that.text += that.text[that.index]
                            that.index--;
                        }, 500);
                        if (that.text === undefined) {
                            that.stop();

                        }
                    }, 100, that.uranusText2.length / 1.5);
                }

            });
        }
        $timeout(function () {
            that.displayText2();
        }, 1550)
    }
})
angular.module('solar-system').component('venus', {

    templateUrl: './views/venus.html',

    controller: function ($interval, mainService, $timeout) {
        let that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
             mainService.venusText().then(response => {
                that.venusText = response.data[0].info1;
                 $interval(function () {
                     $timeout(function () {
                         that.text += that.venusText[that.index]
                         that.index++;
                     }, 500)
                 }, 30, that.venusText.length);
            });
        };
    }
})

angular.module('solar-system').component('venus2', {
    template: `<div>{{$ctrl.text}}</div>`,
    controller: function ($interval, $timeout, mainService) {
        let that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            mainService.venusText2().then(response => {
                that.venusText2 = response.data[0].info2;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.venusText2[that.index]
                        that.index++;
                    }, 700);


                }, 18, that.venusText2.length);
            });
        }
        $timeout(function () {
            that.displayText2();
        }, 1700)

    }
})

angular.module('solar-system').controller('mainCtrl', function ($location, $scope) {
    $scope.show2 = true;

    $scope.isActive = function (des) {
        return des === $location.path();
    }
})
angular.module('solar-system').service('mainService', function ($http) {
    let serverUrl = 'http://localhost:3023';
    this.sunText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/suninfo'
        });
    };
    this.mercuryText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/mercuryinfo1'
        });
    };
    this.mercuryText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/mercuryinfo2'
        });
    };
    this.venusText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/venusinfo1'
        });
    };
    this.venusText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/venusinfo2'
        });
    };
    this.earthText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/earthinfo1'
        });
    };
    this.earthText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/earthinfo2'
        });
    };
    this.marsText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/marsinfo1'
        });
    };
    this.marsText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/marsinfo2'
        });
    };
    this.jupiterText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/jupiterinfo1'
        });
    };
    this.jupiterText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/jupiterinfo2'
        });
    };
    this.saturnText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/saturninfo1'
        });
    };
    this.saturnText2 = function () {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/saturninfo2'
        });
    };
    this.uranusText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/uranusinfo1'
        });
    };
    this.uranusText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/uranusinfo2'
        });
    };
    this.neptuneText = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/neptuneinfo1'
        });
    };
    this.neptuneText2 = () => {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/neptuneinfo2'
        });
    };

});

//# sourceMappingURL=bundle.js.map
