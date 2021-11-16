// 1.ways to print in  javascript
// alert("me"); mainly todaY's javascript alert is not used 
// id is only one and unique but class is many  
// document .write("this is document write")

//2. javascript console API
/*console.log("hello I'm Megha");
console.warn("this is warning");
console.error("this is an error");*/

//3. javascript variables
// containers to stores data values 
/*multi 
line
comment*/
/*var number1 = 23;
var number2 = 34;
console.log(number1 + number2);*/

// data types in javascript 
// numbers
/*var num1 = 222;
var num2 = 123.34;
// string
var str1 = "this is a string";
var str2 = "this is also string";

// objects
var marks = {
    ravi: 34,
    sam: 56,
    megha:100.12,
}
console.log(marks);
// Booleans 
var a = true;
var b = false;
console.log(a,b);

// var und = undefined 
/*var und;
console.log(und);*/

/*var n = null;
console.log(n);*/

/*At a very high level , there are two types of datatypes in javascripts
1 primitive data types:undefined , null,number,string,boolean,symbol
2 reference data types:arrays and objects
*/

/*var arr = [1,2,3,4,5,'megha']
console.log(arr)*/

// operators in javascripts 
// arithmetic operators

/*var a = 34;
var b = 24;
console.log("the value of a + b is ",a+b);
console.log("the value of a - b is ",a-b);
console.log("the value of a * b is ",a*b);
console.log("the value of a / b is ",a/b);*/

// Assignment operators: these operators works to assign one value into another value 
/*var c = b;
c *= 3 ;
c += 3 ;
c -= 3 ;
c /= 3 ;
console.log(c);*/

// comparision operators: compare two values
/*var x = 20;
var y = 30;
console.log(x == y)
console.log(x >= y)
console.log(x <= y)*/

//logical AND operators
// AND: when both are true 
/*console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)*/


// logical OR operators
// when  one condition is true all are true and both are false result is false 
/*console.log(true ||true )
console.log(true ||false)
console.log(false||true)
console.log(false||false)*/

// logical NOT operators
/*console.log(!false);
console.log(!true);*/

//function in javascript 
// /*function avg(a,b){
//     c=(a+b)/2;
//     return c; 
// }

// c1 = avg(4,6);
// c2 = avg(14,16);
// console.log(c1,c2);*/

// /*function cgpa(a,b,c,d,e){
//     total=(a+b+c+d+e)/2;
//     return total; 
// }

// total = cgpa(10,20,30,40,50);

// console.log(total);*/

// //conditionals in javascripts

// // if (age > 18){
// //     console.log('you are eligible to vote ');
// // }
// // else{
// //     console.log('you are not eligible to vote');
// // }

// // if-else laddder

// /*if(age > 18){
//     console.log('you are eligible for married');
// }
// else if(age > 24){
//     console.log('you are  married');
// }
// else if(age > 35){
//     console.log('they are married couple');
// }
// else if(age > 40){
//     console.log('new  married couple');
// }
// else{
//     console.log('they are not married couple');
// }
// console.log('end of ladder');*/

// //var arr = [1, 2, 3, 4, 5, 6, 7];
// //console.log(arr);
// // // using for loop with break & continue statements
// //  for(i=0;i<arr.length;i++){
// //      if(i==3){
// //          //break;
// //          continue;
// //      }
// //      console.log(arr[i]);
// //  }
// // arr.forEach(function(element){
// //  console.log(element)
// // })

//  //let j = 10;
// // while(j < arr.length){
// //     console.log(arr[j]);
// //     j++;
// // }

// // do{
// //     console.log(arr[j]);
// //     j++;
// // }while (j<arr.length);

// //array method

// //let myArr = ["Fan" , "cake" , "pizza" , "coffee" , 94, true ]
// //console.log(myArr.length);
// //myArr.pop();
// //console.log(myArr);
// //myArr.push("megha")
// //console.log(myArr);
// //const newlen = myArr.unshift("megha")
// //console.log(newlen);
// //myArr.shift()
// //console.log(myArr);
// //const newlen = (myArr);

// //String methods in javascript
// let myLovelyString = "Megha is a good girl  and good";
// // console.log(myLovelyString.length);
// // console.log(myLovelyString.indexOf("Megha"))
// // console.log(myLovelyString.lastIndexOf("Megha"))

// //console.log(myLovelyString.slice(2,4))
// //replace method occures only first position letter's replace
// // d = myLovelyString.replace("Megha" , "Neha" );
// // d = d.replace("good" , "preety")
// // console.log(d,myLovelyString)
// let myDate = new Date();
// // console.log(myDate.getTime());
// // console.log(myDate.getFullYear());
// // console.log(myDate.getDay());
// // console.log(myDate.getMinutes());
// // console.log(myDate.getMonth());
// // console.log(myDate.getHours());

// // DOM Manipulation  
// let elem = document.getElementById('click');
// // console.log(elem);

// let elemClass = document.getElementsByClassName("container")
// // console.log(elemClass);
// //elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// // console.log(elem.innerHTML);
// // console.log(elem.innerText);
// // console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName("button")
// console.log(tn);
// tn = document.getElementsByTagName("div")
// console.log(tn);
// CreatedElement = document.createElement('p');
// CreatedElement.innerText = "this is a created para";
// tn[0].appendChild(CreatedElement);
// CreatedElement2 = document.createElement('b');
// CreatedElement2.innerText = "this is a bold para";
// tn[0].replaceChild(CreatedElement2, CreatedElement);
// //removeChild(Element); --> removes an element
// // selecting using Query 
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

// function clicked() {
//     console.log('The button was clicked')
// }
// window.onload = function () {
//     console.log('the document was loaded')
// }
// Events in javascriptd
//firstcontainer.addEventListener('click' ,function(){
//console.log("click hua")
// })
//  firstcontainer.addEventListener('click' ,function(){   
//      document.querySelectorAll('.container')[1].innerHTML= "<b> we have clicked</b>"
//       console.log("clicked on container")
// })
// firstcontainer.addEventListener('mouseover' ,function(){
//     console.log("mouse on container")
// })

// firstcontainer.addEventListener('mouseout' ,function(){
//      console.log("mouse out container")
//  })

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstcontainer.addEventListener('mouseup', function () {
//     document.querySelectorAll(".container")[1].innerHTML = prevHTML;
//     console.log("mouse up when clicked on  container")
// })

// firstcontainer.addEventListener('mousedown', function () {
//     document.querySelectorAll(".container")[1].innerHTML = "<b> we have clicked</b>"
//     console.log("mouse down when clicked on  container")
// })

// Arrow function 
// function sum(a,b){
//     return a+b;
// }

// sum = (a,b)=>{
//     return a+b;
// }
// setTimeout and setintervals

//  logKaro = ()=>{
//      document.querySelectorAll('.container')[1].innerHTML= "<b> setInterval fired</b>"
//      console.log("I am your log")
//  }
//clr = setTimeout(logKaro , 5000);
//use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
//clr = setInterval(logKaro , 2000);

//local storagejavascript
// localStorage.setItem('name' ,'megha')
// localStorage
// localStorage.getItem('name')
//localStorage.removeItem('name')
//localstorage.clear()

// // Json 
// obj = {name: "megha" , length: 1, a:{this:'tha"t'}}
// jso = JSON.stringify(obj)
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name": "megha" , "length": 1, "a":{"this":"that"}}`)
// console.log(parsed);

// template literals -Backticks
a = 23;
console.log(`this is ${a}`)


