const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits () {
  reader.question("Would you like some tea?", function(tea) {
    console.log('You replied ${res}.');

    reader.question("Would you like some biscuits?", function(biscuits) {
      console.log(`You replied ${biscuits.}`);

      const first = (tea === 'yes') ? 'do' : 'don\'t';
      const second = (biscuits === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${first} want tea and you ${second} want biscuits.`);
      reader.close();
    });
  });
};
