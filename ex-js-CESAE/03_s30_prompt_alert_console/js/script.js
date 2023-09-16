/*EX 03 Console.log, Alert e Prompt */

// const primeiroNome = prompt("Qual é o seu primeiro nome?")
// const ultimoNome = prompt("E o seu último nome?");
// //console.log(primeiroNome+" "+ultimoNome)// apenas para conferir 

// const nomeDaPessoa = primeiroNome+" "+ultimoNome;
// console.log(nomeDaPessoa);

// alert('Olá'+" "+nomeDaPessoa);


/*Outra forma de fazer, sem criar uma variável nova*/
// const primeiroNome = prompt("Qual é o seu primeiro nome?")
// const ultimoNome = prompt("E o seu último nome?");
// console.log(primeiroNome+" "+ultimoNome)//apenas para conferir 

// alert('Olá'+" "+primeiroNome+" "+ultimoNome);


/*Continuação da matéria: Decision Making (Condicionais)*/
const ageOfConsent = 18;
let userAge = parseInt(prompt('Que idade tens?'));

if (userAge >= 18){
    alert('Ok');
}else {
    alert('Não tem idade para aceder a este conteúdo!');
}



