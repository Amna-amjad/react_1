// Q - 1 write a function which returns array. call the function and destructure array values and print the value

/*function arr() {
    return [0, 1, 2, 3];
  }
  
  let a, b, c, d;
  [a, b, c, d] = arr();
  console.log(a); 
  console.log(b); 
 console.log(c);
 console.log(d);
 */

 // Q - 2 Make a car object with model, year, color. display all the values by destructuring

 /*

 let  car = {
    model: "Mercedes",
    year: 2000,
    color: "black"
 }

let carInfo = {model, year, color} = car;
console.log(carInfo);

*/

// Q - 3 Use three variable name, greeting and display value using template literals.
/*
let greetings= `Many many happy returns of the day \n May you live long and \n have many many more....`
console.log(greetings);
*/


// Q -4  use array [1,2,3,4,5,6,7,8,9,10] assign first three values in seperate variables and all remaining in one element as an array

/*
let arr = [1,2,3,4,5,6,7,8,9,10];


let arr1 = arr[0] 
console.log(arr1);
let arr2 = arr[1]
console.log(arr2);
let arr3 = arr[2]
console.log(arr3);
let arr4 = [arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]]
console.log(arr4);
*/

// Q - 5  if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display 
// " car speed is moderate" and if greater than 120 display "car speed is fast"

/*
let carSpeed = prompt("Enter the car speed");
let speed = (carSpeed <= 80) ? "car speed is slow " : (carSpeed >= 80  && carSpeed <= 120) ? "Car speed is moderate" : (carSpeed >= 120) ? "Car speed is fast" : "nothing"
console.log(speed);
*/





















