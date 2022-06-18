// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives

let age: number;

// int float don't give error, string declaration below do

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: {
    name: string; 
    age: number; 
};

person = {
    name: 'Max',
    age: 32
};


let people: {
    name: string;
    age: number;
} [];

// [] denotes here an array of such objects


// Type inference

let course = 'React - The Complete Guide';

// course = 12341;

// Union types

let co: string | number = 'React - The Complete Guide';

co = 12341;

// Type definition
// Type aliases

type Person = {
    name: string;
    age: number;
}


let per: Person;

person = {
    name: 'Max',
    age: 32
};


let pers: Person [];

// Function & types

function addition(a: number, b: number): number{
    return a+b;
}

function print(value:any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');
