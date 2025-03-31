"use strict";

    // function Post (auth, text){
    //     this.autor = auth;
    //     this.text= text;
    // } 

    
    // const post1 = new Post ("Admin", "Lorem ipsum1");

    // console.log(post1.auth);
    // console.log (post1.text);

    let transport ={
        color : "grey",
    };

    function Car (model , color){
        this.model = model;
        this.color = color;

    }

    Car.prototype = transport;