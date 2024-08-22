// Dynamic [any] Types  -> any type assign by value 

let age: any = 25;

age = true;
console.log("boolean age: ", age);
age ='hello';
console.log("string age: ", age);
age = {name: 'Sup'};
console.log("tuple age: ", age); 


let mixed: any[] = [];

mixed.push(5);
mixed.push('Nope');
mixed.push(false);
console.log(mixed);


let ninja: { name: any, age: any};   // tuple declration for any
ninja = { name: 'Kalum', age: 25};   // assign two values for tuples 
console.log(ninja);  

let ninjas: string[] = [];
ninjas.push('tom');
ninjas.push("Hansi");
console.log('end:', ninjas); 


let uid: string|number;    // this is not a array 
uid = '123';
uid = 123;
uid = 'ka';
uid = 'flase'
console.log('uid: ', uid); 
