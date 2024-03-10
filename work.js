let circle={
    radius : 2,
    coordinate : {x:1,y:1},
    visible: true
}
console.log(circle.coordinate.x);
console.log(circle.radius);

//factory function(camel : oneTwoThree)
let a=10;
let b=20;
let fun;
let obj={
    a,
    b,
    fun(){
        console.log("ABHAY")
    }
}
console.log(obj);

//factory function
function rectangle(length,breadth){
    return{
            length,
            breadth,
            area() {
                console.log(length*breadth);
        }
    }
}

// contsructor function (pascal :   OneTwoThree)
function Cir(radius){
    this.radius = radius;
    this.draw = function(){
        console.log(3.14 * radius);
    };
}
const another = new Cir(5);

function Rec(length,breadth){
    this.length = length;
    this.breadth =breadth;
    this.area=function(){
        console.log(length*breadth);
    };
}
const place = new Rec(5,2);

//dynamic nature of objects
let circle2={
    radius: 1
}
circle2.color="yellow"
circle2.draw=function(){
    console.log("draw")
}
delete circle2.color

//org variable is not change (copy by value)-->(primuitive dt)
let a1=100;
let copy_a1=a1;

//org obj is change with change in copy_obj (copy by reference)-->pointer(objects)
let obj1={radius:10};
let copy_obj1=obj1;

//loop
circle3={
    radius:1,
    color:"yellow",
    draw: {x:1,y:20},
    solid:0
}
for (let pi in circle3){
    console.log(pi, circle3[pi]);
}
for(let i of Object.keys(circle3)){
    console.log(i);
}
for(let i of Object.values(circle3)){
    console.log(i);
}
for(let i of Object.entries(circle3)){
    console.log(i);
}
