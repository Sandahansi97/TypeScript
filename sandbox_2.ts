// objects and arrays 

// arrays

let names: string[] = ['Sanda', 'Hansi', 'Paba'];                                                      
names.push('Kasun');                // push -> add a value end of the array  // pop -> remove end value from the array list 
console.log("names: ", names);


let numbers: number[] = [10, 20, 30, 40];
numbers.push(25);
console.log("numbers: " , numbers); 


let mixed = ['Sanda', 10, 'kalum', 20 , 'Hansi', 30, 40];
mixed.push('Sonu');
mixed.push(50);
mixed[0] = 5; 
console.log("mixed: " , mixed); 

// object 

 let ninja = {
    name: 'mario',
    belt: 'black',       // object declare between the {} brackets only 
    age: 30
};

ninja.age = 40;
ninja.name = 'asu';

console.log("age: " , ninja.age);    // showing output as age: 40 
console.log("name :" , ninja.name);   // showing output as name: asu 