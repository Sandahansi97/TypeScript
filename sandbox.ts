// compile typescript 

const character = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');   
//const inputs = ["name 1", "name 2", "name 3"] 

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
}); 


// tsc filename.ts -  ts file eka js file ekata complie krnwa
// tsc filename.ts -w  ->  watch mode ->  save karaddi automatically cmpile wenwa output eka 
