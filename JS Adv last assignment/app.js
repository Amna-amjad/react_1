// Q - 1 We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']
/*
let cities = ['Lahore', 'Karachi', 'Islamabad', 'Abbottabad'];
let city1 = cities[0];
let city2 = cities[1];
let city3 = cities[2];
let city4 = cities[3];

console.log(city1, city2, city3, city4);

*/


// Q - 2 We have a student object. Assign each property in different and individual variable in JS {name:'Marry',age:20,rollNo:2}
/*
let stdObj = {
    name : 'Amna',
    age : 36,
    rollNo : 20
}

let names = stdObj['name']
console.log(names);
let aGe = stdObj['age']
console.log(aGe);
let rollNum = stdObj['rollNo']
console.log(rollNum);

*/

// Q - 3 A function is taking 5 arguments and You have to pass it through an array.

/*
let arr = [function numbers(a, b, c, d, e) {

    a =1
    b = 2
    c = 3
    d = 4
    e = 5    

    numbers()
}]
console.log(arr);

 */




// Q - 4 Given an array of firstname and an array of last name. First check both array size is equal or not, if equal then make third new array which has first last name concat value

/*
let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
let lastNames = ['khan', 'ayub', 'aziz', 'yasin']

let chk = firstNames.length
console.log(chk);
let chk2 = lastNames.length
console.log(chk2);

if(chk == chk2){
    console.log(['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']);
}else{
    console.log('Array is not equal');
}

*/



// Q - 5 Create an arrow function that takes array as an input and make each element double and then return an array 
/*
const num = [1, 2, 3, 4, 5]
let newNum = num.map((val) => {
    return val*2
} )
console.log(newNum);
*/


// Q - 6 Create an arrow function that takes a number and return square of a number

/*
const num = [5]   
let num1 = num.map((val) => {
 return   val*5
 
})
console.log(num1);
*/


// Q - 7 = var authenticated = true;
// var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed')) 
// which alert will run?

// Ans - You are allowed will run!!!



// Q - 8   What is the value of canDrive
        // var age = 12;
        // var canDrive = age > 18 ? 'yes' : 'no';
        // console.log(canDrive);
    
        //  ['12', '18', 'yes', 'no'];
//        which is correct answer??

// Ans - 'no'



// Q - 9 : 
// const dog='snickers'
// function logdog(dog){
//     console.log(dog)
// }
// logdog(dog);
//          function go(){
//              const dog='sunny';
//              logdog(dog)
//             }
//             go()
            
        //answer: ['snickers sunny']



// Q - 10 
// let text = `He's often called "Johnny"`;
// console.log(text)
// write the answer here(He's often called "Johnny")

 
// function welcomeMsg(name = "Everyone") {
//     let msg = "Welcome " + name
//     console.log(msg)
// }
//  welcomeMsg("Faiza")
//  welcomeMsg()
//I have called funtion twice , share the answer what is printed each time

// Answer = Welcome Faiza Welcome Everyone



//make a promise that resolves after 5 sec. Use setTimeOut for resolve.
/*
setTimeout(()=>{
    Promise.resolve().then(r => console.log('Hey how are you'))
}, 5000)
*/