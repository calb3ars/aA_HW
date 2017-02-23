const printCallback = (arr) => {
  arr.forEach((el) => {
    console.log(el);
  });
};


var titleize = (names, callback) {
  let titleized = names.map(name => `Mx\. ${name} Jingleheimer Schmidt`);
  callback(titleized);
  };
};

titleize(["Mary", "Brian", "Leo"], (names) => {
    names.forEach(name => console.log(name));
});

// Constructors, Prototypes
function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRR!!!!!!!!'`);
};

Elephant.prototype.grow = function() {
  this.height = this.height + 12;
};

Elephant.prototype.addTrick = function() {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  trickIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};

Elephant.paradeHelper = function(elephant) {
  console.log(`${elephant.name} is trotting by!`);
}


//Closures
function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function(food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};

dinerBreakfast("hashbrowns");
