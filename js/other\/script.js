"use strict";
// const name = "Вова";
// const age = 40;
// const testObject = {
//     name,
//     age,
//     male(){
//         console.log('Краткая функция');
//     },
// // }
// const testObject1 =Object.assign({},testObject);
// console.log(testObject.name );
// testObject.name = "Кто то другой";
// console.log(testObject);

// testObject.male= "men";
// console.log(testObject);
// delete testObject.name;
//  console.log(testObject);
 //testObject.male();
//  let jsonObject=JSON.stringify(testObject);
//  console.log(jsonObject);
//  console.dir(testObject1);

// function printMyName(){
//     console.log("Vova");
// }
// console.log("Start");
// setTimeout (printMyName,5000)

// let a ;
// let b ; 
    
// function myFn(){
//   //   b
//     a = true;
//     const  b =10 ;
//     console.log(b)
// }
// myFn();
// console.log(a);
// console.log(b);

// const button ={
//     width:200,
//     text: 'Buy'
// }

// console.table(button);


// const newPost =( post, addedAt= Date() )=>({
//     ...post,
//     addedAt,    
// });
// const firstPOst = {
//     id:1,
//     author: 'Vladimir',
// }

// console.table(newPost(firstPOst));




// const fnWithError=()=> {
//     throw new Error ('Some Error');
// }
// try {
//     fnWithError()
// } catch (error) {
//     console.error(error);
//     console.log(error.message);
// }

// const myAray = [1, 2, 3]; 
// console.table(myAray);

// const newArray = myAray.map((el)=>{
// return el * 3 ;
// })

// console.log(newArray);
// console.log(myAray);


// class Comment{
//     constructor(text){
//         this.text=text
//         this.votesQty = 0
//     }

//     upvote(){
//         this.votesQty+=1
//     }
// }

// const firstComment = new Comment("First comment")

// console.table(firstComment);

// firstComment.upvote()
// console.table(firstComment);

// class NubersArray extends Array {
//     sum(){
//         return this.reduce((el,acc)=> acc+= el, 0)
//     }
// }

// const myAray = new NubersArray(1,5,7)


// const myPromise = new Promise((resolve, reject) =>{
//     .then ((value) =>{

//     });

//     .caches((error)=>{

//     });


// });

// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response =>response.json())
//       .then(json => console.log(json))
//       .catch(error => console.log(error.message))

// const timerPromis =() => 
//       new Promise((resolve,reject) =>
//             setTimeout(() =>resolve(), 2000))
// const asyncFn= async()=>{
//       console.log('Timer starts')
//       await timerPromis ()
//       console.log('Timer end')
// }
// asyncFn()