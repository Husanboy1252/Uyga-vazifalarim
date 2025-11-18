// const { error } = require("console")
const fs = require("fs");
// html papka yaratish------------------------------------------
// fs.mkdir("html",(err) =>{
//     if(err) throw new Error
// })
// ichkifayil------------------------------------------
// fs.appendFileSync("html/.index.html","a")

// static papka ochish--------------------
//  fs.mkdirSync("static")
//  static ichki fayillar------------------------------------
// fs.appendFileSync("static/.script.js","a")
// fs.appendFileSync("static/.script.ts","a")
// fs.appendFileSync("static/.style.css","a")
// fs.appendFileSync("static/.go.mod","a")
// fs.appendFileSync("static/.go.sum","a")
// fs.appendFileSync("static/.golang-todo-app","a")
// fs.appendFileSync("static/.main.go","a")
// fs.appendFileSync("static/.README.md","a")
// fs.appendFileSync("static/.tsconfig.json","a")

// comon.js moduli==============================

// math papkasini ulash============================
// const a =require("./math")
// console.log(a(2,4,5));

// const b=require("./minmath")
// console.log(b(90,10));



// fs.mkdirSync("bo'luv.js")
// fs.mkdirSync('add')

// fs.rmdirSync("add")
// fs.rmdirSync("bo'luv.js")

// const exp =require("exp")

// fs moduli yordamida fayilyaratib o'qish va matin qo'shish==========


fs.writeFileSync("info.html","Salom Dunyo")
const a =fs.readFileSync("info.html","utf-8")
console.log(a);


