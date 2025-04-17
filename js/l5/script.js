"use strict";

/**** Поиск по ИД*/

// let one = document.getElementById('one');
// console.log(one);
// console.dir(one);

/*******Поиск по тегу */

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);
 
/**************ПО классу */

// let product = document.getElementsByClassName("class");
// let csss= document.querySelectorAll('p');
// console.log(csss);


/**загрузка всего документа как реди  */
document.addEventListener('DOMContentLoaded', function(){
    console.log("Документ Загружен");
})


/**Событие клика */
// let div=document.createElement('div');
// div.innerText="Новый див создан";
// div.className="color";

// let btn= document.querySelector("button");
// btn.addEventListener('click',(event)=>{
//     console.log("click");
//     document.body.append(div);
// })

/**событие нажаьия на клавишу */
window.addEventListener('keydown',(event)=>{
    console.log(event);
})