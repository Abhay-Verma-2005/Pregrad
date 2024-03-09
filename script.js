// (versatile programming language) -->NOT FOR DSA
// jayascript is a dynamic language
//ES-5 --> Ecmascript (version 4,5)
var m=10

// constant value
//ES-6
let q=10
const r=20
q="hlo"
//dynamic typing -->variable data type decided by RunTime not compile time
// camel case:
        //oneTwoThree
//pascal case:
        // OneTwoThree
console.log(typeof q)
let fname ='Abhay'
let lname ='Verma'
console.log("f_name:"+fname)        //string concatination
console.log("l_name:"+lname)
console.log(`hi, ${fname} ${lname}!`) //backtick --> ( ` ) insert variables dynamically
// 1. Primitive dt
        //String
        //Number
        //Boolean
        //undefined --> don't exist 
        //null      -->Value is empty
// 2. Secondary dt
        //objects , array ,functions

//Object  --> key : pair
let data={
    name: "Abhay",
    age: 18,
    occupation: "Developer",
    location: "Mathura",
};
console.log(data)
console.log("Age is: ", data.age)

//ARRAY --> LIST   
let arr=[1,2,3,4,true,"hi",[5,6]];
console.log(arr.length)   
console.log(arr) 
console.log("THIS IS A 5TH ELEMENT:",arr[4]) 

//ArrOfObject
let arrofobj=[{name: "Abhay",age: 18,occupation: "Developer",location: "Mathura",},
{name: "Aditya",age: 17,occupation: "Developer",location: "Kashganj",},
{name: "Ankur",age: 18,occupation: "Developer",location: "Rajisthan",}];
console.log(arrofobj)   
console.log("Data is: ",arrofobj[1].location) 

//function
function funcName(name){
    let t="hi " + name;
    console.log(t);
    console.log(typeof t)
}
funcName("rahul")
funcName(1)
funcName(true)

//prompt
// let pr=prompt("Enter your name:");

//Alert method
// alert("THIS IS GIVE A MESSAGE !")

//Add element in list
let l1=['red','blue'];
l1[2]=4
l1[4]=55
console.log(l1.length);


//Comparision operator { == or != and === or !== and <,> >=,<=}
let x='10'
let y=10
console.log(x==y);
console.log(x===y); // also check the datatype of that variable

// Logical operator ( && , || , !)
console.log(x&&y);

// Logical operators with non boolean vallue (falsey)--> number ,none,undefined  and  (truthy)--> string

//Bitwise(& , | , ^ , << , >> )





//Function defination
function maxArray(nameOfArray){
        let max = 0;
        for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] >= max) {
        max = arr1[i];}
        }
        console.log(max);        
        }
        
        //taken a sample array like:
        let arr1 = [-1, 31, 51, 6, 7];
        maxArray(arr1) // calling the function
        //desired output: 51

// dom manupulation , functions
//Object
function creatReactangle(length , breadth)
{return{length,
        breadth,
        area(){
                console.log("Area: ", length*breadth)
        }}
}
const rect1=creatReactangle(5,11);
rect1.area();4