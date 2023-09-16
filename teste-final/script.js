// Fabrício Lopes

//Ex 01 
/*
É uma linguagem de script com base na linguagem de programação ECMAScript;
É o padrão em linguagem “client side” para qualquer browser; 
Dá movimento ao nosso site.

Serve para:
Validação de formulários​
Galerias de fotos​
Janelas de aviso​
Banners​
Janelas de publicidade​
Menus pop-up
Animações
*/

//Ex02
/*
O elemento input será criado no HTML o que será feito é uma prevenção para que o utilizador
não vá para o outro lado e saia do nosso website.
Será como:

const form = document.querySelector('form');

form.addEventListener("submit", function(e){
    e.preventDefault();
})

Com isso, quando o utilizador clicar em submetido, ele continuará onde parou e o
seus dados irá então para o back-end.
*/



//Ex03
// let num1 = '5';
// let num2 = '3';
// let jsDone = true;

// function helloStudent(name, age) {
//     console.log('ola' + name);
//     return age;
// }
// let hello = helloStudent('Rita', 31);
// let age = helloStudent('Rita', 31)

/*
1.1 false
1.2 false
1.3 false
1.4 true
1.5 15 (number)
1.6  false
1.7 num1 = 16
1.8 boolean
*/

//Ex04
// let passwords = [1234, 'sara1986', 2023];
// let userPassword = prompt('Qual é a password?');
  
// //  passwords.push('front-end')
//     if(userPassword != passwords) {  
//         alert('Password incorreta!')   
//     } else {
//         alert('Password correta!')    
//     }
 
// for(element of passwords) { 
//     console.log(element); 1234
// }


//EX05

const studentGrades = [
    {
        'studentName': 'Rita',
        'grade': 16,      
    },
    {
        'studentName': 'Luís',
        'grade': 20
    },
    {
        'studentName': 'João',
        'grade': 18
    },
    {
        'studentName': 'André',
        'grade': 15
    },
    {
        'studentName': 'Luísa',
        'grade': 19
    },
]

studentGrades.forEach(function (students) {
    console.log(` A nota do aluno ${students.studentName} é ${students.grade}`)
})

// 5.2: Não há a posição [5].

//5.3: Sim


//6.1
let myh2 = document.querySelector('.achievements')
  
myh2.innerText = 'Os meus ensinamentos para a vida';


//6.2
 let myLearned = document.querySelector('#myList')


 function aprendido(){

    for(let item of myLearned ){
        item.append('com sucesso');
    }
}



//Ex 07
"https://swapi.dev/api/vehicles/14/",
"https://swapi.dev/api/vehicles/30/"
