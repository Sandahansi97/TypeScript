// Type Basics 
var character = 'mario';
var age = 30;
var isBlackBelt = false;
//character = 20;               // compile ts for build JS File (tsc fileName -> tsc sandbox.ts)
character = 'lgui'; // compile and watch -> ts file changes update in the js file (tsc fileName -w)
//age = 'yoshi';
age = 40;
//isBlackBelt = 'yes';
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));