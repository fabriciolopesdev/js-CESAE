//1. Escreva uma função chamada multiply que receba dois valores e retorne o resultado da multiplicação dos mesmos. 
function multiply(num1, num2) {
   return num1*num2;
};

/*2. O tempo está incerto e eu não sei se deva vestir calções ou calças, ajude-me a decidir. 
     Escreva uma função chamada isShortsWeather que aceite um argumento a que podemos chamar temperature. 
     Se a temperatura for maior que 25, retorna verdadeiro. Se não, retorna falso.*/
  function isShortsWeather(temperature) {
    if (temperature > 25) {
       return "true";
    } else {
        return "false";
    }
  }

/*3. Escreva uma função chamada lastElement que aceite um array.
     Essa função deve retornar o último elemento do array (sem o remover). 
     Se o array for vazio, a função deve retornar null.*/
     function lastElement(arr) {
      if (!arr.length) {
        return null;
      }
    }


/*4. Escreva uma função chamada capitalize que aceite um argumento string e
 retorne uma nova string com a primeira letra em maiúscula*/
 
    function capitalize(hello) {
    const firstLetterCapitalized = hello[0].toUpperCase();
    const restOfTheString = hello.slice(1);
    return firstLetterCapitalized + restOfTheString;
  }


  /*5. Escreva uma função chamada sumArray que aceite um array de números.
  A função deve retornar a soma de todos os números do array. */
        
  function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
      total += num;
    }
    return total;
  }
  

  /*6. Escreva uma função chamada returnDay. A função aceita um parâmetro de 1 a 7 e retorna o dia
  correspondente: 1, retorna Segunda, 2, retorna Terça, etc....
  Se o número for menor que 1 ou maior que 7, a função deve retornar null.*/

  function returnDay(num) {
    const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
      return null;
    } else {
      return days[num];
    }
  }