// number

let a : number = 10;
let a1 : number;
a1 = 20;
let a2 = 10;

//string
let b : string = "abc";
let b1 : string;
b1 = "abc";
let b2 = "abc";
b2 = "bcd";

//boolean
let isDone : boolean = false;
let isDone1 = true;

//
let d : "a" | "b" | "c";
let e : 1 | 2 | 3 | 4 | 5;

//any

let f : any = 4;
f = "abc";
f  = {};
f = {name : "hello"};
f = false;

f = "abc";

let f1 : string;
f1 = f;

