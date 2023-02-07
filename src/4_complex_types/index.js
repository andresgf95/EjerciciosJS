/**
 * There are some kinds of "data" types in JavaScript composed
 * by smaller data pieces.
 * - arrays - are ordered lists of values of any kind represented by [],
 * like ["apple", "orange", "banana"]
 * - objects - are values grouped by lavels or names called "properties", represented by {}, like
 * {
 *   name: "Daniel"
 *   age: 42
 *   enrolled: true
 * }
 * 
 * Exercice:
 * - Declare a variable named "odd" and assign to it
 * a array containin the four first odd numbers.
 * - Declare a variable named "pet" and assign to it an
 * object with the properties name, birthYear and vaccined.
 * - Assign values "KitKat", 1983 and true to the properties.
 */

// Write your code here.
let odd 
odd = [1,3,5,7]
let pet
pet = {
    name: "KitKat",
    birthYear: 1983,
    vaccined: true
}
/**
 * Don't to change next lines.
 */
module.exports = {
    odd,
    pet,
}