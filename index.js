// const app = require('./app')
// // console.log(app.z());

// // var x=20;
// const arr=[2,4,7,1,3,8,3];

// let result=arr.filter((item)=>{
//     // return item ===3;
//     return item>=3
//     // console.log(item);
// })
// console.log(result);

// const fs=require('fs');
// // fs.writeFileSync("hello2.txt","Jai shree ram");
// console.log(__filename);

//server

// send server to browser 1
// const http=require('http')
// function dataControl(req,resp){
    
//     resp.write("<h1>Hello this is Amarjeet Obroy</h1>");
//     resp.write("<h2> Hii, I am Amarjeet kumar</h2>")
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);

// send server to browser 2 from arrow function

// const http = require('http');
// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello this is Amarjeet kumar</h1>");
//     resp.end();
// }).listen(4500);

//package.json

// npm=> node package manager

// console.log("package.json");
const colors = require('colors')
console.log("package.json".green);




