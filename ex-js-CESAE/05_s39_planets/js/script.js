//Ex04 slide 39 - arrays

//Ex Planetas 
let nameOfPlanets = ['Mercúrio', 'Vénus', 'Terra', 'Mart', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Plutão'];

 nameOfPlanets[3] = 'Marte';//É somente selecionar a posição do array e digitar novamente para modificar a posição.
 console.log(nameOfPlanets);

 nameOfPlanets.pop();
 console.log(nameOfPlanets);//Para remover o Plutão que está na última posição, basta fazer o método pop()

 nameOfPlanets.unshift('Fabri');
 console.log(nameOfPlanets);//Para incluir um novo planeta no início, basta fazer o método unshift()


