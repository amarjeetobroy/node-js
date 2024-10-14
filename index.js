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
// const colors = require('colors')
// console.log("package.json".green);

// console.log("nodemoon");

// Make a simple API

// const http = require('http')
// const data = require('./data')

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();

// })
// .listen(5000);

// Input from command Line

// console.log(process.argv[2]);

// file create from node js

// const fs = require('fs');

// const input = process.argv;
// fs.writeFileSync(input[2],input[3])

// ---------------------------------------------

/* //   add file and remove file


const fs = require('fs');

const input = process.argv;
if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else{
    console.log("invalid input");
}
fs.writeFileSync(input[2],input[3])

cmd for add file = node index.js add fruit.txt 'this is fruit'
cmd for remove file = node index.js remove fruit.txt  */

// -------------------------------------------------------------

// show file List

// -> Make files in Folder 
// -> Use path module
// -> Get file names and print
/*

const fs = require('fs')
const path = require('path');
const dirPath = path.join(__dirname,'files');
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/Amar"+i+".txt","A simple text file")
// }

//read file

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is ",item);
    })

})
*/

// -------------------------------------------------------

// CURD with File System
   
// Make File
// Read File
// Update File
// Rename File
// Delete File
// --------------Make file--------------------

// const { promises } = require('dns');
// const fs = require('fs')
// const path = require('path');
// const dirPath=path.join(__dirname,'curd');
// const filePath=`${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'This is a simple text file');

// ------------------Read file -----------------

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// ---------- Update File ---------------

// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is update");
// })

// ----------- Rename file---------------------------

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated");
// })

// ---------- Delete File--------------------

// fs.unlinkSync(`${dirPath}/fruit.txt`)


// -------------------------------------------------------------------------------

// Asynchronous Basics in node js

// console.log("start exe.......");

// let a=10;
// let b=0;

// setTimeout(()=>{

//     // console.log("logic exe.......");

//     b=20;
// },2000);

// // console.log("complete exe.......");

// console.log(a+b);



// --------------------------------------------------------------------------------

// Handle Asynchronous Data in Node js

// let a=20;
// let b=0;

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },3000)
// })
// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b);
// })



// console.log("starting up");

// setTimeout(()=>{
//     console.log("2 second log");
// },2000);

// setTimeout(()=>{
//     console.log("0 second log");
// },0);
// console.log("finishing up");

// -----------------------------------------------

// ===================> Express js <========================

// -------------creat on server-- get and send-------
// --------request and response----------

// const express = require('express');
// const app = express();

// app.get('',(req,res)=>{
//     console.log("data sent by browser ==>",req.query.name);
//     res.send("welcome => "+req.query.name);
//     res.send('Hello, this is Home page');
// })

// app.get('/about',(req,res)=>{
//     res.send('Hello, this is About page <br> <h2>This is about me</h2>');

// })
// app.get('/help',(req,res)=>{
//     res.send('<h1>Hello, this is Help page</h1> <br><h2>what can i help you</h2>');

// })

// app.listen(5000);


// ----------- Render HTML and JSON -----------------


/* const express = require('express');
const app = express();

app.get('',(req,res)=>{
    // console.log("data sent by browser ==>",req.query.name);
    // // res.send("welcome => "+req.query.name);
    // res.send('<h1>Hello, this is Home page</h1>');
    res.send(`
        <h1> Welcome, to Home Page</h1> <a href="/about" >Go to About Page </a>
        `)
})

app.get('/about',(req,res)=>{
    res.send(`
        <input type="text" placeholder="User name" value="${req.query.name}" />
        <button>Click Me</button> <br>
        <a href="/" >Go to Home Page </a>`);

})
app.get('/help',(req,res)=>{
    res.send([
        {
        name: 'Amarjeet kumar',
        email:'amarjeet@gmail.com'
        },
        {
            name: 'saurabh kumar',
            email: 'saurabh@gmail.com'
        }
]);

})

app.listen(5000);
*/

// -----------------------------------------------------------
//  --------------- Make Html pages--------
// Make folder for HTML file and access it
// make html file
// Load html file

// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath= path.join(__dirname,'public');

// app.use(express.static(publicPath))


// app.listen(5000);

// ------------------------------------------------------------------------

/* Remove extension from URL

-> Apply get method
-> Remove an extenstion from URL
-> Make 404 page
-> Apply 404 page
*/

// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath= path.join(__dirname,'public');

// // app.use(express.static(publicPath))
// app.get('',(req,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('/help',(req,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// })
// app.get('*',(req,resp)=>{
//     resp.sendFile(`${publicPath}/nopage.html`)
// })

// app.listen(5000);


// -----------------------------------------------------------------------------

/* Template Engine*/

