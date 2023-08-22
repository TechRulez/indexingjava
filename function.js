// let Maths={
//     add: function(){
//         console.log();
//     },
//     sub: function(){
//         console.log();
//     }
// }
// console.log(Maths);
// console.log(Math);
// let arr = [122,121,2323,3423]
// console.log(Math.max(122,121,2323,3423));
// console.log(Math.random());
let rnd = Math.random() 
let whole = rnd*7+1
let up = Math.ceil(whole)
let down = Math.floor(whole)
// console.log(whole);
// console.log(up);
console.log(down);
function rolled(){
    let num = Math.floor(Math.random() *6)+1
    console.log(num);
}

rolled()
// rolls()
//Function
let addition =(x, y)=> x+y
console.log(addition(3,5));
//function
let bod = x => x+3
console.log(bod(4));

function greet (name, age, car)  {
    return(`my name is ${name}, i am ${age}, and i have a ${car}`)
}
//object
let person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
  };
console.log(person.age);
  