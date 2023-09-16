//Ex - inverter classes (add e remove)

const allLi = document.querySelectorAll('li'); //trouxe toda a lista para manipular as duas coisas: adicionar e remover
console.log(allLi)

for(let e of allLi){ // lopp para todas lis
    if(e.classList.contains('highlight')){ //condição onde tem classes existentes 
         e.classList.remove('highlight'); //condição onde remove todas as classes existentes
    }else{
        e.classList.add('highlight');// else para add nos removidos
     }
}