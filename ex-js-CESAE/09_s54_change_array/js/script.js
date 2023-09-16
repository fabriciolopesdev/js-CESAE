//Ex loop

//Ex 01 ALTERAR NOMES DE ARRAY PARA MAIÚSCULAS
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++){

    //para alterar o nome para maiúsculas
    people[0] = "SCOOBY", 
    people[1] = "VELMA",
    people[2] = "DAPHNE",
    people[3] = "SHAGGY",
    people[4] = "FRED"  
}
console.log(people);//Para executar o array, lembrar que é console.log fora do bloco {}


//continuação da matéria

//For of - interage com o NOME das propriedades
for(let element of people) {
    console.log(element)//imprimiu os nomes
}

//For in - interage com o VALOR das propriedades
for(let element in people) {
    console.log(element)//imprimiu as posições que estão
}