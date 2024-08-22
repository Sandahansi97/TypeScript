// Type Basics 

let character = 'mario';
let age = 30;
let isBlackBelt = false;

//character = 20;               // compile ts for build JS File (tsc fileName -> tsc sandbox.ts)
character = 'lgui';            // compile and watch -> ts file changes update in the js file (tsc fileName -w)

//age = 'yoshi';
age = 40;

//isBlackBelt = 'yes';
isBlackBelt = true; 

const circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(7.5));  