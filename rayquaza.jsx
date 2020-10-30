var rayquaza = require('robotjs');

// function that performs wait for a thread/process/program
function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  // console.log('sleeping for ' + ms + ' ms');
}

// function that displays game tick
function tick() {
  console.log('1tick');
  sleep(611);
}

//function that returns random interger between floor and ceiling with
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Outrage() {
  while (true) {
    var time = 0;
    var arbitrairy = getRandomInt(100, 200);
    //    randomlly 100,200 cycle interval
    while (time < arbitrairy) {
      time++;

      // top left

      var X_firstHalf = [
        getRandomInt(576, 586),
        getRandomInt(616, 630),
        getRandomInt(656, 670),
        getRandomInt(699, 716),
        getRandomInt(576, 586),
        getRandomInt(616, 630),
        getRandomInt(656, 670),
        getRandomInt(699, 716),
        getRandomInt(576, 586),
        getRandomInt(616, 630),
        getRandomInt(656, 670),
        getRandomInt(699, 716),
        getRandomInt(576, 586),
        getRandomInt(616, 630),
      ];
      var X_secondHalf = [
        getRandomInt(656, 670),
        getRandomInt(699, 716),
        getRandomInt(576, 586),
        getRandomInt(616, 630),
        getRandomInt(656, 670),
        getRandomInt(699, 716),
        getRandomInt(576, 586),
        getRandomInt(616, 630),
        getRandomInt(656, 670),
        getRandomInt(699, 716),
        getRandomInt(576, 586),
        getRandomInt(616, 630),
        getRandomInt(656, 670),
        getRandomInt(699, 716),
      ];
      var Y_firstHalf = [
        getRandomInt(247, 258),
        getRandomInt(247, 258),
        getRandomInt(247, 258),
        getRandomInt(247, 258),
        getRandomInt(283, 296),
        getRandomInt(283, 296),
        getRandomInt(283, 296),
        getRandomInt(283, 296),
        getRandomInt(321, 332),
        getRandomInt(321, 332),
        getRandomInt(321, 332),
        getRandomInt(321, 332),
        getRandomInt(358, 371),
        getRandomInt(358, 371),
      ];
      var Y_secondHalf = [
        getRandomInt(358, 371),
        getRandomInt(358, 371),
        getRandomInt(389, 406),
        getRandomInt(389, 406),
        getRandomInt(389, 406),
        getRandomInt(389, 406),
        getRandomInt(431, 444),
        getRandomInt(431, 444),
        getRandomInt(431, 444),
        getRandomInt(431, 444),
        getRandomInt(463, 479),
        getRandomInt(463, 479),
        getRandomInt(463, 479),
        getRandomInt(463, 479),
      ];

      // random mousemovement
      // rayquaza.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

      var x = 3;
      var y = 3;
      // movemouse to the 3rd row,7th column 381, 198

      var xlocation = getRandomInt(381 - x, 381 + x);
      var ylocation = getRandomInt(198 - y, 198 + y);
      rayquaza.moveMouse(xlocation, ylocation);

      rayquaza.mouseClick('right');

      tick(getRandomInt(700, 800));
      rayquaza.moveMouseSmooth(xlocation, ylocation + 85);
      rayquaza.mouseClick();

      tick(getRandomInt(700, 800));
      rayquaza.moveMouse(
        getRandomInt(429 - 4, 429 + 4),
        getRandomInt(198 - 3, 198 + 3)
      );
      rayquaza.mouseClick();

      // a1
      closeBank();
      tick(getRandomInt(700, 800));

      var counter = 0;
      while (counter < 13) {
        var destiny = getRandomInt(0, 13);
        if (X_firstHalf[destiny] != 0 && Y_firstHalf[destiny] != 0) {
          // time complexity applied, just coen 352, from data structures, from algorithm
          rayquaza.moveMouse(X_firstHalf[destiny], Y_firstHalf[destiny]);
          rayquaza.mouseClick();
          rayquaza.moveMouse(X_secondHalf[destiny], Y_secondHalf[destiny]);
          rayquaza.mouseClick();
          X_firstHalf[destiny] = 0;
          Y_firstHalf[destiny] = 0;
          sleep(getRandomInt(100, 200));
          counter++;
        }
      }

      /* random mousemovement
      rayquaza.moveMouseSmooth(
        getRandomInt(0, 560),
        getRandomInt(0, 332) + 534
      );*/

      sleep(getRandomInt(2200, 2400));
      console.log('sleeping for an interval');
      rayquaza.moveMouseSmooth(
        getRandomInt(234, 234 + 107),
        getRandomInt(190, 190 + 53)
      );
      rayquaza.mouseClick();
      sleep(getRandomInt(634, 780));
      tick(getRandomInt(700, 800));
      rayquaza.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
      rayquaza.mouseClick();

      sleep(getRandomInt(1200, 2000));

      console.log(time + '700 exp gained');
    }
  }
}

function closeBank() {
  rayquaza.moveMouseSmooth(getRandomInt(551, 556), getRandomInt(111, 125));

  for (var i = 0; i < getRandomInt(1, 2); i++) {
    rayquaza.mouseClick();
    sleep(231);
  }
}

Outrage();
