// var suspectCards = ['Colonel Mustard', 'Professor Plum', 'Mr Green', 'Mrs Peacock', 'Miss Scarlet', 'Dr Orchid'];
// var weaponCards = ['Knife', 'Candlestick', 'Revolver', 'Rope', 'Lead pipe', 'Spanner'];
// var roomCards = ['Hall', 'Lounge', 'Dining room', 'Kitchen', 'Ballroom', 'Conservatory', 'Billiard room', 'Library', 'Study'];

const scenario = {
  room: 'Ballroom',
  suspect: 'Colonel Mustard',
  weapon: 'Knife',
};

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.suspect = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(suspect) {
      if (scenario.suspect === suspect) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Professor Plum');
  }
  plotTwist('Lounge');

  const changeScenario = function(weapon) {
    if (scenario.weapon === weapon) {
      scenario.room = 'Hall';
    }
  }


const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
