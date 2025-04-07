"use strict";

    // function Post (auth, text){
    //     this.autor = auth;
    //     this.text= text;
    // } 

    
    // const post1 = new Post ("Admin", "Lorem ipsum1");

    // console.log(post1.auth);
    // console.log (post1.text);

    // let transport ={
    //     color : "grey",
    // };

    // function Car (model , color){
    //     this.model = model;
    //     this.color = color;

    // }

    // Car.prototype = transport;

//     function UserRole(){
//         this.rights=['create',"edit"]
//     }

//     function ModeratorRole(){
//         UserRole.call(this)
//         this.rights.push('delete')
//     }
//     function AdminRole(){
//         ModeratorRole.call(this);
//         this.rights.push('block')
//     }


// const moderRole1= new AdminRole();
//     console.table(moderRole1)

// const post_parent={
//     role: 'user',
//     UserName: null,
//     showRole: function(){
//         console.log(this.role);
//     }
// };
// let post1_child = Object.create(post_parent);


 /**************** ПО новой ES 6 */

 class Person{
    constructor(name,age,gender){
        this.name= name;
        this.age = age;
        this.gender=gender;
    }

    incrementAge(){
        this.age+=1;
    }
 }
const person1= new Person ('Alex' , 25, "male");
person1.incrementAge();
console.log(person1);