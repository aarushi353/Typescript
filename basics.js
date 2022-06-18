// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
//Primitives
var age;
// int float don't give error, string declaration below do
age = 12;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Max',
    age: 32
};
var people;
// [] denotes here an array of such objects
// Type inference
var course = 'React - The Complete Guide';
// course = 12341;
// Union types
var co = 'React - The Complete Guide';
co = 12341;
var per;
person = {
    name: 'Max',
    age: 32
};
var pers;
function add(a, b) {
    return a + b;
}
