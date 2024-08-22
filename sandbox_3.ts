// explicit types   -> variable data type is assign when the variable is decalred 

let character: string;
let age: number;
let isLoggedIn: boolean;
//age = 'sanda';   -> age is number
age = 30;         
// isLoggedIn = 25;  -> isLoggedIn boolean
isLoggedIn = false; 


//Explicit Typing for Variables:
let age_1: number = 25;        // 'age' is explicitly typed as a number
let name_2: string = 'Sanda';  // 'name' is explicitly typed as a string

// Explicit Typing for Arrays:
let numbers_1: number[] = [1, 2, 3, 4, 5];
console.log("Numbers array:", numbers_1);

//Explicit Typing for Function Parameters and Return Types:
function add(a: number, b: number): number {     // awsaneta thiyean number eken krnne, a + b gen return krna value eke type ekth number wena oni 
    return a + b;  // The return type is explicitly declared as 'number'
}
let result: number = add(10, 20);  // The 'result' variable is also explicitly typed as a 'number'
console.log("Result:", result);  //// This will print the result to the console  


//arrays 

let ninjas: string[] = [];
ninjas.push('tom');
ninjas.push("Hansi");
console.log('end:', ninjas);
console.log('end:', ninjas.length);

// union types (|) pipe symbol

let mixedArray: (number|string) [] = [1, 'apple', 2, 'Banana'];
console.log('mixedArray: ', mixedArray );


let mixed: (string|number|boolean)[] = []; 
mixed.push('hello');
mixed.push(20);
mixed.push(false);
// mixed.push(undefined);  // this is not assigned in the array 
console.log(mixed); 

let uid: string|number;    // this is not a array 
uid = '123';
uid = 123;
console.log('uid: ', uid); 

// objects 
let ninjaOne: object;   // explicitly defined this as an object
ninjaOne = { 
    name: 'yoshi', 
    age: 30,
    // age: 'string'  -> we can put age as string because, type is not dclared expilictitly
};
console.log("ninjaOne: " , ninjaOne);
//
//
let ninjaTwo: {        // declare 
    name: string,
    age: number,
    beltColour: string, 
};
ninjaTwo = {          // assign
    name: 'mario', 
    age: 20, 
    beltColour: 'black'
};
console.log("ninjaTwo: ", ninjaTwo);   