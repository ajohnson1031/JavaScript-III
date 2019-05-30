/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding - As related to the global scope, "this" will always refer to the window/console object.
 * 2. Implicit Binding -  Whenever a function is called by a preceding dot, "this" will refer to the object before the dot.
 * 3. New Binding - For objects created by Constructor Functions, "this" is self-referential to the created object.
 * 4. Explicit Binding - Whenever .call or .apply  methods are used, "this" is explicitly defined within the method call.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function hello(name) {
  console.log(this);
  return `Hello, ${name}`;
}

console.log(hello("Aaron"));

// Principle 2

// code example for Implicit Binding

const myObj = {
  greeting: "Wax on, wax off",
  somebodySan: function(name) {
    console.log(this);
    return `${this.greeting}, ${name}san!`;
  }
};

myObj.somebodySan("Aaron");
console.log(myObj.somebodySan("Daniel"));

// Principle 3

// code example for New Binding

function Classmate(name) {
  (this.greeting = "Hello"),
    (this.name = name),
    (this.greet = function() {
      console.log(`${this.greeting}, ${this.name}. Welcome to Lambda School!`);
    });
}

const gwanda = new Classmate("Gwanda");
const miles = new Classmate("Miles");
gwanda.greet();

// Principle 4

// code example for Explicit Binding

gwanda.greet.apply(miles);
miles.greet.apply(gwanda);
