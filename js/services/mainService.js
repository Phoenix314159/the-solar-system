angular.module('solar-system').service('mainService', function () {
    this.sunText = `The sun lies at the heart of the solar system, where it is by far the largest object. 
                    It holds 99.8 percent of the solar system's mass and is roughly 109 times the diameter 
                    of the Earth — about one million Earths could fit inside the sun. The visible part of the 
                    sun is about 10,000 degrees Fahrenheit (5,500 degrees Celsius), while temperatures in the 
                    core reach more than 27 million F (15 million C), driven by nuclear reactions.`;

    this.mercuryText = `Mercury is the smallest and innermost planet in 
                      the Solar System. Its orbital period around the 
                      Sun of 88 days is the shortest of all the planets 
                      in the Solar System. It is named after the Roman deity 
                      Mercury, the messenger to the gods. Mercury's axis has the smallest 
                      tilt of any of the Solar System's planets (about  1/30 degree), and its 
                      orbital eccentricity is the largest of all known planets in the Solar System.`;
    this.mercuryText2 = `Mercury's core has a higher iron content than that of any other major planet 
                        in the Solar System, and several theories have been proposed to explain this. 
                        The theory is that Mercury originally had a metal–silicate 
                        ratio similar to common chondrite meteorites, thought to be typical of the Solar 
                        System's rocky matter, and a mass approximately 2.25 times its current mass. Early in the 
                        Solar System's history, Mercury may have been struck by a planetesimal of approximately 1/6 
                        that mass and several thousand kilometers across.`
    this.venusText = `Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. 
                    It has the longest rotation period (243 days) of any planet in the Solar System 
                    and rotates in the opposite direction to most other planets. It has no natural 
                    satellite. It is named after the Roman goddess of love and beauty. It is the 
                    second-brightest natural object in the night sky after the Moon, reaching an 
                    apparent magnitude of −4.6.`;
    this.venusText2 = `Much of the Venusian surface appears to have been shaped by volcanic activity. 
                        Venus has several times as many volcanoes as Earth, and it has 167 large 
                        volcanoes that are over 100 km (62 mi) across. The only volcanic complex of this 
                        size on Earth is the Big Island of Hawaii. Venusian craters range from 3 to 280 km 
                        (2 to 174 mi) in diameter. No craters are smaller than 3 km, because of the effects 
                        of the dense atmosphere on incoming objects. Objects with less than a certain kinetic 
                        energy are slowed down so much by the atmosphere that they do not create an impact crater.`
    this.earthText = `Earth is the third planet from the Sun and the only object 
                      in the Universe known to harbor life. It is the densest planet 
                      in the Solar System and the largest of the four terrestrial planets. 
                      Within the first billion years of Earth's history, life appeared in 
                      the oceans and began to affect the Earth's atmosphere and surface, leading 
                      to the proliferation of aerobic and anaerobic organisms.`;
    this.earthText2 = `The oldest material found in the Solar System is dated to 4.5672±0.0006 billion years ago. 
                       By 4.54±0.04 Gya the primordial Earth had formed. The formation and evolution of Solar System 
                       bodies occurred along with the Sun. In theory, a solar nebula partitions a volume out of a 
                       molecular cloud by gravitational collapse, which begins to spin and flatten into a circumstellar 
                       disk, and then the planets grow out of that disk along with the Sun. A nebula contains gas, 
                       ice grains, and dust (including primordial nuclides).`
    this.marsText = `Mars is the fourth planet from the Sun and the second-smallest planet in the 
                      Solar System, after Mercury. Named after the Roman god of war, it is often 
                      referred to as the "Red Planet". There are ongoing investigations assessing the 
                      past habitability potential of Mars, as well as the possibility of extant life. 
                      Future astrobiology missions are planned, including the Mars 2020 and ExoMars rovers.`;
    this.marsText2 = `Mars is a terrestrial planet that consists of minerals containing silicon and oxygen, metals, 
                        and other elements that typically make up rock. The surface of Mars is primarily composed of 
                        tholeiitic basalt, although parts are more silica-rich than typical basalt and may be similar 
                        to andesitic rocks on Earth or silica glass. Although Mars has no evidence of a structured global 
                        magnetic field, observations show that parts of the planet's crust have been magnetized, suggesting 
                        that alternating polarity reversals of its dipole field have occurred in the past. `
    this.jupiterText = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. 
                      It is a giant planet with a mass one-thousandth that of the Sun, but two and 
                      a half times that of all the other planets in the Solar System combined. Jupiter 
                      is primarily composed of hydrogen with a quarter of its mass being helium, though 
                      helium comprises only about a tenth of the number of molecules.`;
    this.jupiterText2 = `Although Jupiter would need to be about 75 times as massive to fuse hydrogen and become a star, 
                         the smallest red dwarf is only about 30 percent larger in radius than Jupiter. Despite this, 
                         Jupiter still radiates more heat than it receives from the Sun; the amount of heat produced 
                         inside it is similar to the total solar radiation it receives. Jupiter is thought to consist of 
                         a dense core with a mixture of elements, a surrounding layer of liquid metallic hydrogen with 
                         some helium, and an outer layer predominantly of molecular hydrogen.`
    this.saturnText = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after 
                      Jupiter. It is a gas giant with an average radius about nine times that of Earth. 
                      Although it has only one-eighth the average density of Earth, with its larger volume Saturn 
                      is just over 95 times more massive. Saturn has a prominent ring system that consists of nine 
                      continuous main rings and three discontinuous arcs.`;
    this.saturnText2 = `Like Jupiter, Saturn is made mostly of hydrogen and helium. At Saturn's center is a dense core of rock, 
                        ice, water, and other compounds made solid by the intense pressure and heat. It is enveloped by liquid 
                        metallic hydrogen, inside a layer of liquid hydrogen -- similar to Jupiter's core but considerably smaller. 
                        As a gas giant, Saturn doesn't have a true surface. The planet is mostly swirling gases and liquids. 
                        While a spacecraft would have nowhere to land on Saturn, it wouldn't be able to fly through unscathed either.`

    this.uranusText = `Uranus is the seventh planet from the Sun. It has the third-largest planetary radius
                     and fourth-largest planetary mass in the Solar System. Uranus is similar in composition 
                     to Neptune, and both have different bulk chemical composition from that of the larger gas 
                     giants Jupiter and Saturn. Uranus's atmosphere is similar to Jupiter's and Saturn's in its 
                     primary composition of hydrogen and helium.`;
    this.uranusText2 = `Uranus orbits the Sun once every 84 years. Its average distance from the Sun is roughly 
                        20 AU (3 billion km; 2 billion mi). The difference between its minimum and maximum distance 
                        from the Sun is 1.8 AU, larger than that of any other planet. The rotational period of the interior 
                        of Uranus is 17 hours, 14 minutes. As on all the giant planets, its upper atmosphere experiences 
                        strong winds in the direction of rotation. At some latitudes, visible features of the atmosphere 
                        move much faster, making a full rotation in as little as 14 hours.`
    this.neptuneText = `Neptune is the eighth and farthest known planet from the Sun in the Solar System. 
                      In the Solar System, it is the fourth-largest planet by diameter, the 
                      third-most-massive planet, and the densest giant planet. Neptune is 17 times the 
                      mass of Earth and is slightly more massive than its near-twin Uranus, which is 
                      15 times the mass of Earth and slightly larger than Neptune. Neptune orbits 
                      the Sun once every 164.8 years.`;
    this.neptuneText2 = `Neptune's blue color is largely the result of absorption of red light by methane in the atmosphere 
                         but there is some additional as-yet-unidentified chromophore which gives the clouds their rich blue tint.
                         Like Jupiter and Saturn, Neptune has an internal heat source -- it radiates more than twice as much energy as 
                         it receives from the Sun. Neptune also has rings. Like Uranus and Jupiter, Neptune's rings are very dark but 
                         their composition is unknown. Neptune's magnetic field is, like Uranus', oddly oriented and probably generated 
                         by motions of conductive material.`

});
