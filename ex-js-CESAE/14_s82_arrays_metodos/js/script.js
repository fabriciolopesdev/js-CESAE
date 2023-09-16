//criar o array fullNames e criar um novo array somente com os first names.

const fullNames = [{
    first: 'Albus', 
    last: 'Dumbledore'
},
{
    first: 'Harry', 
    last: 'Potter'
},
{
    first: 'Hermione', 
    last: 'Granger'
},
{
    first: 'Ron', 
    last: 'Weasley'
}, 
{
    first: 'Rubeus', 
    last: 'Hagrid'
}, 
{
    first: 'Minerva', 
    last: 'McGonagall'
}, 
{
    first: 'Severus', 
    last: 'Snape'
    
}];

const firstNames = fullNames.map(function (first){ //var firstNames = nome do array (fullNames) + metodo map e aplica a função na propriedade first
    return first.first; //retorna o primeiro nome com a alteração solicitada

}) //Resumindo: vai no array, aplica o mapeia ele com o método map e retorna um novo array com a função aplicada na propriedade nome.
   // Por fim, retorna esssa solicitação aplicada na propriedade que eu pedi (first)

//na consola firstNames = (7) ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']

