"use strict";
// let client =confirm ("Вы постоянный клиент ? ");
// let discount = client ? 30 : 10 ;
// alert (` skidon ${discount} %`);

// /**
//  * Функция приветствует тебя или посылает в зависимости от твоего выбора ответа на вопрос.
//  * @returns {string} Строку приветствия вернет
//  */
// function sayHello(){
//     let hi = confirm("Привет , давай дружить? ");
//     let answer = hi ? 'Хороший выбор': 'Ну и пошел ты нахер';
//     // alert (answer);
//     return answer;
// }
// alert(sayHello());

// /**
//  * 
//  * @param {number} a Первое слогаемое 
//  * @param {nunber} b  Второе слогаемое
//  * @returns Вернет сумму двух слогаемых )
//  */
// function sum (a ,b){
//     return a+b;
// }

// let a=1, b=1 ,c,d;
// c =  ++a;
// console.log (c) ;

// d =2 + b++;
// console.log (d) ;
// let a = 2;
// let x = 1 + (a *= 2);
// console.log();


// let a = -5;
// let b = 8;
// function chose(a , b ) {
//     if (a >0 && b>0){return a- b;}
//     else if (a<0 && b<0){return a*b}
//     else {return a+b }
// }
// console.log (chose(a,b)); 

function summ (a,b){
    return a+b;
}

function negtive (a,b){
    return a-b;
} 

function multi (a,b){
    return a*b;
}

function div (a,b){
    if (b==0) return "Деление на ноль";
    else return a/b ;    
}

function mathOperator(arg1, arg2, operation){
    switch (operation){
        case "Сложение": return summ(arg1,arg2) ; break;
        case "Вычитание" : return negtive (arg1,arg2);break;
        case "Умножение" : return multi (arg1,arg2);break;
        case "Деление" :return  div(arg1,arg2); break;
        default : return "Не понял что мне надо сделать";
    }

}
let arg1 = prompt ("Введите 1 аргумент");
let arg2 =  prompt ("Введите 2 аргумент");
let operation = prompt ("Введите операцию : Сложение, Вычитание, Умножение, Деление");

console.log(mathOperator(arg1, arg2, operation));