//Ex Lista de compras

let listaDeCompras = []  // 1. var para criar um array com todos os itens   
let item = '';  // 2. var string para que o usuário possa digitar os itens
let fim = 'fim'; // 3. var para encerrar o prompt, finalizando a lista de compras


//Para fazer o loop
while(item != fim){
    item = prompt('Digite um item. Para finalizar escreva fim!');

    if(item != fim){
        listaDeCompras.push(item);//método para adicionar cada item no fim da lista, enquanto não é a palavra fim
    }
}


//para verificar o array criado
for(element of listaDeCompras) { // para interagir com o nome dos itens
    console.log(element); //imprimi os itens
}


//adicional ao exercício
alert('Parabéns. Sua lista de compras está finalizada!')






