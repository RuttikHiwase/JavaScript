
//Types of Strigs in Javascript

let str1="Hello,world";

let str2='This is the string';

let str3='123';

// To check the type of data
console.log(typeof str1,typeof str2,typeof str3);


console.log(`1 + 2 = ${1+2}`); //  o/p-> 1 + 2 = 3;


//To find out length of string using length property
console.log(str2.length);


//to get element at some position
console.log(str2[3]);

//Strings are immutable in javascript
//-----------------------------------------------------------------

//String Manupulation in javascript

let str4='How';
let str5='are';
let str6='you';

//1.Using '+'
let res=str4 + " "+ str5 + " " + str6;
console.log(res);

//2.Concatenation - concat()
let res2=str4.concat(" ",str5);
console.log(res2);



//3.Substring - portion string to be extract - substring()
let str7="hello ,how are you";
let res3=str7.slice(3,7);
let res4=str7.substring(3,7);
console.log(res3);
console.log(res4);
