'use strict';

angular.module('solar-system', ['ui.router']).config(function ($urlRouterProvider, $stateProvider) {
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
});
'use strict';

angular.module('solar-system').service('mainService', function () {
                  this.sunText = 'The sun lies at the heart of the solar system, where it is by far the largest object. \n                    It holds 99.8 percent of the solar system\'s mass and is roughly 109 times the diameter \n                    of the Earth \u2014 about one million Earths could fit inside the sun. The visible part of the \n                    sun is about 10,000 degrees Fahrenheit (5,500 degrees Celsius), while temperatures in the \n                    core reach more than 27 million F (15 million C), driven by nuclear reactions.';

                  this.mercuryText = 'Mercury is the smallest and innermost planet in \n                      the Solar System. Its orbital period around the \n                      Sun of 88 days is the shortest of all the planets \n                      in the Solar System. It is named after the Roman deity \n                      Mercury, the messenger to the gods. Mercury\'s axis has the smallest \n                      tilt of any of the Solar System\'s planets (about \u200A1/30 degree), and its \n                      orbital eccentricity is the largest of all known planets in the Solar System.';
                  this.mercuryText2 = 'Mercury\'s core has a higher iron content than that of any other major planet \n                        in the Solar System, and several theories have been proposed to explain this. \n                        The theory is that Mercury originally had a metal\u2013silicate \n                        ratio similar to common chondrite meteorites, thought to be typical of the Solar \n                        System\'s rocky matter, and a mass approximately 2.25 times its current mass. Early in the \n                        Solar System\'s history, Mercury may have been struck by a planetesimal of approximately 1/6 \n                        that mass and several thousand kilometers across.';
                  this.venusText = 'Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. \n                    It has the longest rotation period (243 days) of any planet in the Solar System \n                    and rotates in the opposite direction to most other planets. It has no natural \n                    satellite. It is named after the Roman goddess of love and beauty. It is the \n                    second-brightest natural object in the night sky after the Moon, reaching an \n                    apparent magnitude of \u22124.6.';
                  this.venusText2 = 'Much of the Venusian surface appears to have been shaped by volcanic activity. \n                        Venus has several times as many volcanoes as Earth, and it has 167 large \n                        volcanoes that are over 100 km (62 mi) across. The only volcanic complex of this \n                        size on Earth is the Big Island of Hawaii. Venusian craters range from 3 to 280 km \n                        (2 to 174 mi) in diameter. No craters are smaller than 3 km, because of the effects \n                        of the dense atmosphere on incoming objects. Objects with less than a certain kinetic \n                        energy are slowed down so much by the atmosphere that they do not create an impact crater.';
                  this.earthText = 'Earth is the third planet from the Sun and the only object \n                      in the Universe known to harbor life. It is the densest planet \n                      in the Solar System and the largest of the four terrestrial planets. \n                      Within the first billion years of Earth\'s history, life appeared in \n                      the oceans and began to affect the Earth\'s atmosphere and surface, leading \n                      to the proliferation of aerobic and anaerobic organisms.';
                  this.earthText2 = 'The oldest material found in the Solar System is dated to 4.5672\xB10.0006 billion years ago. \n                       By 4.54\xB10.04 Gya the primordial Earth had formed. The formation and evolution of Solar System \n                       bodies occurred along with the Sun. In theory, a solar nebula partitions a volume out of a \n                       molecular cloud by gravitational collapse, which begins to spin and flatten into a circumstellar \n                       disk, and then the planets grow out of that disk along with the Sun. A nebula contains gas, \n                       ice grains, and dust (including primordial nuclides).';
                  this.marsText = 'Mars is the fourth planet from the Sun and the second-smallest planet in the \n                      Solar System, after Mercury. Named after the Roman god of war, it is often \n                      referred to as the "Red Planet". There are ongoing investigations assessing the \n                      past habitability potential of Mars, as well as the possibility of extant life. \n                      Future astrobiology missions are planned, including the Mars 2020 and ExoMars rovers.';
                  this.marsText2 = 'Mars is a terrestrial planet that consists of minerals containing silicon and oxygen, metals, \n                        and other elements that typically make up rock. The surface of Mars is primarily composed of \n                        tholeiitic basalt, although parts are more silica-rich than typical basalt and may be similar \n                        to andesitic rocks on Earth or silica glass. Although Mars has no evidence of a structured global \n                        magnetic field, observations show that parts of the planet\'s crust have been magnetized, suggesting \n                        that alternating polarity reversals of its dipole field have occurred in the past. ';
                  this.jupiterText = 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. \n                      It is a giant planet with a mass one-thousandth that of the Sun, but two and \n                      a half times that of all the other planets in the Solar System combined. Jupiter \n                      is primarily composed of hydrogen with a quarter of its mass being helium, though \n                      helium comprises only about a tenth of the number of molecules.';
                  this.jupiterText2 = 'Although Jupiter would need to be about 75 times as massive to fuse hydrogen and become a star, \n                         the smallest red dwarf is only about 30 percent larger in radius than Jupiter. Despite this, \n                         Jupiter still radiates more heat than it receives from the Sun; the amount of heat produced \n                         inside it is similar to the total solar radiation it receives. Jupiter is thought to consist of \n                         a dense core with a mixture of elements, a surrounding layer of liquid metallic hydrogen with \n                         some helium, and an outer layer predominantly of molecular hydrogen.';
                  this.saturnText = 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after \n                      Jupiter. It is a gas giant with an average radius about nine times that of Earth. \n                      Although it has only one-eighth the average density of Earth, with its larger volume Saturn \n                      is just over 95 times more massive. Saturn has a prominent ring system that consists of nine \n                      continuous main rings and three discontinuous arcs.';
                  this.saturnText2 = 'Like Jupiter, Saturn is made mostly of hydrogen and helium. At Saturn\'s center is a dense core of rock, \n                        ice, water, and other compounds made solid by the intense pressure and heat. It is enveloped by liquid \n                        metallic hydrogen, inside a layer of liquid hydrogen -- similar to Jupiter\'s core but considerably smaller. \n                        As a gas giant, Saturn doesn\'t have a true surface. The planet is mostly swirling gases and liquids. \n                        While a spacecraft would have nowhere to land on Saturn, it wouldn\'t be able to fly through unscathed either.';

                  this.uranusText = 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius\n                     and fourth-largest planetary mass in the Solar System. Uranus is similar in composition \n                     to Neptune, and both have different bulk chemical composition from that of the larger gas \n                     giants Jupiter and Saturn. Uranus\'s atmosphere is similar to Jupiter\'s and Saturn\'s in its \n                     primary composition of hydrogen and helium.';
                  this.uranusText2 = 'Uranus orbits the Sun once every 84 years. Its average distance from the Sun is roughly \n                        20 AU (3 billion km; 2 billion mi). The difference between its minimum and maximum distance \n                        from the Sun is 1.8 AU, larger than that of any other planet. The rotational period of the interior \n                        of Uranus is 17 hours, 14 minutes. As on all the giant planets, its upper atmosphere experiences \n                        strong winds in the direction of rotation. At some latitudes, visible features of the atmosphere \n                        move much faster, making a full rotation in as little as 14 hours.';
                  this.neptuneText = 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. \n                      In the Solar System, it is the fourth-largest planet by diameter, the \n                      third-most-massive planet, and the densest giant planet. Neptune is 17 times the \n                      mass of Earth and is slightly more massive than its near-twin Uranus, which is \n                      15 times the mass of Earth and slightly larger than Neptune. Neptune orbits \n                      the Sun once every 164.8 years.';
                  this.neptuneText2 = 'Neptune\'s blue color is largely the result of absorption of red light by methane in the atmosphere \n                         but there is some additional as-yet-unidentified chromophore which gives the clouds their rich blue tint.\n                         Like Jupiter and Saturn, Neptune has an internal heat source -- it radiates more than twice as much energy as \n                         it receives from the Sun. Neptune also has rings. Like Uranus and Jupiter, Neptune\'s rings are very dark but \n                         their composition is unknown. Neptune\'s magnetic field is, like Uranus\', oddly oriented and probably generated \n                         by motions of conductive material.';
});
'use strict';

angular.module('solar-system').controller('mainCtrl', function ($location, $scope) {
    $scope.show2 = true;

    $scope.isActive = function (des) {
        return des === $location.path();
    };
});
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

    controller: function controller(mainService, $interval, $timeout) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.earthText = mainService.earthText;
            $interval(function () {
                //464
                $timeout(function () {
                    that.text += that.earthText[that.index];
                    that.index++;
                }, 1000);

                console.log(that.index);
            }, 25, that.earthText.length);
        };
    }
});
'use strict';

angular.module('solar-system').component('earth2', {
    template: '<div>{{$ctrl.text}}</div>',
    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.earthText2 = mainService.earthText2;
            $interval(function () {
                $timeout(function () {
                    that.text += that.earthText2[that.index];
                    that.index++;
                }, 500);
            }, 15, that.earthText2.length);
        };
        $timeout(function () {
            that.displayText2();
        }, 1500);
    }
});
'use strict';

angular.module('solar-system').component('jupiter', {

    templateUrl: './views/jupiter.html',

    controller: function controller($interval, mainService, $timeout) {
        var that = this;
        that.show = false;
        that.text = "";
        that.showMe = true;
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.jupiterText = mainService.jupiterText;
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
        };
    }

});
'use strict';

angular.module('solar-system').component('jupiter2', {
    template: '<div ng-click="$ctrl.stop()" ng-show="$ctrl.showMe">{{$ctrl.text}}</div>',
    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.showMe = true;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.jupiterText2 = mainService.jupiterText2;
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
        };
        that.start = function () {
            that.displayText2();
        };

        $timeout(function () {
            that.displayText2();
        }, 1000);
    }
});
'use strict';

angular.module('solar-system').component('mars', {

    templateUrl: './views/mars.html',

    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.marsText = mainService.marsText;

            $interval(function () {
                //471

                $timeout(function () {
                    $timeout(function () {
                        that.text += that.marsText[that.index];
                        that.index++;
                    }, 20);
                }, 500);
                console.log(that.index);
            }, 30, that.marsText.length);
        };
    }
});
'use strict';

angular.module('solar-system').component('mars2', {
    template: '<div>{{$ctrl.text}}</div>',
    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.marsText2 = mainService.marsText2;
            $interval(function () {
                $timeout(function () {
                    that.text += that.marsText2[that.index];
                    that.index++;
                }, 700);
            }, 18, that.marsText2.length);
        };
        $timeout(function () {
            that.displayText2();
        }, 1700);
    }
});
'use strict';

angular.module('solar-system').component('mercury', {

    templateUrl: './views/mercury.html',

    controller: function controller($interval, mainService, $timeout) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.mercuryText = mainService.mercuryText;
            $interval(function () {
                //542
                $timeout(function () {
                    that.text += that.mercuryText[that.index];
                    that.index++;
                }, 480);
            }, 35, that.mercuryText.length);
        };
        that.displayTextReverse = function () {
            that.show = true;
            that.mercuryText = mainService.mercuryText;
            that.index = that.mercuryText.length - 1;
            $interval(function () {
                $timeout(function () {
                    that.text += that.mercuryText[that.index];
                    that.index--;
                }, 500);
            }, 50, 483);
        };
    }
});
'use strict';

angular.module('solar-system').component('mercury2', {
    template: '<div ng-click="$ctrl.displayTextReverse()">{{$ctrl.text}}</div>',
    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.mercuryText2 = mainService.mercuryText2;
            $interval(function () {
                $timeout(function () {
                    that.text += that.mercuryText2[that.index];
                    that.index++;
                }, 700);
            }, 22, that.mercuryText2.length);
        };
        that.displayTextReverse = function () {
            that.show = true;
            that.mercuryText2 = mainService.mercuryText2;
            that.index = that.mercuryText2.length - 1;
            $interval(function () {
                $timeout(function () {
                    that.text += that.mercuryText2[that.index];
                    that.index--;
                    console.log(that.text);
                }, 500);
            }, 5, 483);
        };
        $timeout(function () {
            that.displayText2();
        }, 1500);
    }
});
'use strict';

angular.module('solar-system').component('neptune', {

    templateUrl: './views/neptune.html',

    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.show = false;
        that.text = "";

        that.displayText = function () {
            that.show = true;
            that.neptuneText = mainService.neptuneText;
            that.index = 0;
            $interval(function () {
                $timeout(function () {
                    //483
                    that.text += that.neptuneText[that.index];
                    that.index++;
                }, 500);
            }, 30, that.neptuneText.length);
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
    }
});
'use strict';

angular.module('solar-system').component('neptune2', {
    template: '<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>',
    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.neptuneText2 = mainService.neptuneText2;
            var textAnim = $interval(function () {
                $timeout(function () {
                    that.text += that.neptuneText2[that.index];
                    that.index++;
                }, 700);
            }, 12, that.neptuneText2.length);

            that.stop = function () {
                $interval.cancel(textAnim);
            };
        };

        $timeout(function () {
            that.displayText2();
        }, 1700);
    }
});
'use strict';

angular.module('solar-system').component('saturn', {

    templateUrl: './views/saturn.html',

    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.saturnText = mainService.saturnText;
            var textAnim = $interval(function () {
                //488
                $timeout(function () {
                    that.text += that.saturnText[that.index];
                    that.index++;
                }, 580);
                console.log(that.index);
            }, 35, that.saturnText.length);
            that.stop = function () {
                $interval.cancel(textAnim);
            };
            that.displayTextReverse = function () {
                that.show = true;
                that.saturnText = mainService.saturnText;
                that.index = that.saturnText.length - 1;
                $interval(function () {
                    $timeout(function () {
                        that.text += that.saturnText[that.index];
                        that.index--;
                        console.log(that.text);
                    }, 500);
                }, 5, 483);
            };
        };
    }
});
'use strict';

angular.module('solar-system').component('saturn2', {
    template: '<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>',
    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.saturnText2 = mainService.saturnText2;
            var textAnim = $interval(function () {
                $timeout(function () {
                    that.text += that.saturnText2[that.index];
                    that.index++;
                }, 500);
            }, 18, that.saturnText2.length);
            that.stop = function () {
                $interval.cancel(textAnim);
            };
        };

        $timeout(function () {
            that.displayText2();
        }, 1800);
    }
});
'use strict';

angular.module('solar-system').component('sun', {

    templateUrl: './views/sun.html',

    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.sunText = mainService.sunText;
            $interval(function () {
                $timeout(function () {
                    that.text += that.sunText[that.index];
                    that.index++;
                }, 400);
            }, 25, that.sunText.length);
        };
    }
});
'use strict';

angular.module('solar-system').directive('text', function ($timeout) {
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
});
'use strict';

angular.module('solar-system').directive('textGray', function ($timeout) {
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
});
'use strict';

angular.module('solar-system').directive('textRed', function ($timeout) {
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
});
'use strict';

angular.module('solar-system').component('uranus', {

    templateUrl: './views/uranus.html',

    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.show = false;
        that.index = 0;
        that.text = "";
        that.displayText = function () {
            that.show = true;

            that.uranusText = mainService.uranusText;
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
        };
    }
});
'use strict';

angular.module('solar-system').component('uranus2', {
    template: '<div ng-click="$ctrl.stop()">{{$ctrl.text}}</div>',
    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.index = 0;

        that.displayText2 = function () {
            that.show = true;
            that.showMe = true;
            that.uranusText2 = mainService.uranusText2;
            var textAnim = $interval(function () {
                $timeout(function () {
                    that.text += that.uranusText2[that.index];
                    that.index++;
                }, 700);
            }, 13, that.uranusText2.length);
            that.stop = function () {
                $interval.cancel(textAnim);
            };
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

        $timeout(function () {
            that.displayText2();
        }, 1550);
    }
});
'use strict';

angular.module('solar-system').component('venus', {

    templateUrl: './views/venus.html',

    controller: function controller($interval, mainService, $timeout) {
        var that = this;
        that.show = false;
        that.text = "";
        that.displayText = function () {
            that.show = true;
            that.index = 0;
            that.venusText = mainService.venusText;
            $interval(function () {
                //505
                $timeout(function () {
                    that.text += that.venusText[that.index];
                    that.index++;
                }, 500);
            }, 30, that.venusText.length);
        };
    }
});
'use strict';

angular.module('solar-system').component('venus2', {
    template: '<div>{{$ctrl.text}}</div>',
    controller: function controller($interval, $timeout, mainService) {
        var that = this;
        that.text = "";
        that.displayText2 = function () {
            that.show = true;
            that.index = 0;
            that.venusText2 = mainService.venusText2;
            $interval(function () {
                $timeout(function () {
                    that.text += that.venusText2[that.index];
                    that.index++;
                }, 700);
            }, 18, that.venusText2.length);
        };
        $timeout(function () {
            that.displayText2();
        }, 1700);
    }
});
//# sourceMappingURL=bundle.js.map
