// explicit types   -> variable data type is assign when the variable is decalred 
var character;
var age;
var isLoggedIn;
//age = 'sanda';   -> age is number
age = 30;
// isLoggedIn = 25;  -> isLoggedIn boolean
isLoggedIn = false;
//Explicit Typing for Variables:
var age_1 = 25; // 'age' is explicitly typed as a number
var name_2 = 'Sanda'; // 'name' is explicitly typed as a string
// Explicit Typing for Arrays:
var numbers_1 = [1, 2, 3, 4, 5];
console.log("Numbers array:", numbers_1);
//Explicit Typing for Function Parameters and Return Types:
function add(a, b) {
    return a + b; // The return type is explicitly declared as 'number'
}
var result = add(10, 20); // The 'result' variable is also explicitly typed as a 'number'
console.log("Result:", result); //// This will print the result to the console  
//arrays 
var ninjas = [];
ninjas.push('tom');
ninjas.push("Hansi");
console.log('end:', ninjas);
console.log('end:', ninjas.length);
// union types 
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
// mixed.push(undefined);  // this is not assigned in the array 
console.log(mixed);
var uid; // this is not a array 
uid = '123';
uid = 123;
// objects 
var ninjaOne; // explicitly defined this as an object
ninjaOne = {
    name: 'yoshi',
    age: 30,
    // age_3: 'string'  -> we can put age as string because, type is not dclared expilictitly
};
console.log("ninjaOne: ", ninjaOne);
//
//
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black'
};
console.log("ninjaTwo: ", ninjaTwo);
