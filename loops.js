function listele(name){
    console.log("hi"+name)
}
l=["a","i","e"];
for(let i of l){
    console.log(i);
}
for(let i=0 ; i < l.length ; i++){
    console.log(l[i] +" "+ i);
}


//MAX ELEMENT IN ARRAY
a=[1,12,3,4,55,7];
let x=a[0];
for(let i of a){
    
    if (x<i){
        x=i;
    }
}
console.log(x);
// PRINT EVEN ELEMENT FROM ARRAY
a = [10, 12, 30, 4, 55, 7];
b = [];

for (let i of a) {
    if (i % 2 == 0) {
        b.push(i);
    }
}

console.log(b);
//PRINT SQUARE OF ELEMENT 
a = [10, 12, 30, 4, 55, 7];
for(let i=0 ; i < a.length ; i++){
    a[i]=a[i]**2;
    }
console.log(a);

//SUM OF ELEMENT IN ARRAY
a=[100, 144, 900, 16, 3025, 49,25];
sum=0
for (let i of a) {
    sum+=i
}
console.log(sum);
// Factorial
let u = 6;
let fact=1;
while (u>0) {
    fact=fact*u;
    u=u-1;
}
console.log(fact);

// Positive or  negative or zero
let g=1;
if (g>0)
    console.log("positive")

else if (g==0)
    console.log("zero")

else
    console.log("negative")
// MAX and MIN
function max(x,y){
    if (x>=y) z=x;
    else z=y
    console.log(z)
}
function min(x,y){
    if (x<y) z=x;
    else z=y;
    console.log(z);
}
max(a.length,b.length)
min(a.length,b.length)

