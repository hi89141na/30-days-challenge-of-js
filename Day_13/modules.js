//? Modules.js
//todo Task 1: create module and export it 
export function add(a, b){
    return a+b;
}
//todo Task 2: create module and export it 
export const person ={
    name:"Hina", 
    age:18,
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} of age`);
    }

}
//Todo Task 3:

export function product(a, b){
    return a*b;
} 
export function difference(a, b){
    return a-b;
}
export default function day(a){
    switch(a){
        case 1:
            return "Monday";
            break;
        
        case 2:
            return "Tuesday";
            break;
        
        case 3:
            return "Wednesday";
            break;
        
        case 4:
            return "Thursday";
            break;
        
        case 5:
            return "Friday";
            break;
        
        case 6:
            return "Saturday";
            break;
        case 7:
            return "Sunday";
            break;
            default:
                return "Invalid";

    }
}