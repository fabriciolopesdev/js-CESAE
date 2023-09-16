//Métodos For Each: aceita uma função de callback, c
const daysOfWeek = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo'
]

daysOfWeek.forEach(function(n) {
    console.log(n);
});

//ex 2
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
    console.log(n * n)
})



//ex 3
nums.forEach(function (el) {
    if (el % 2 === 0) { //se o el(elemento) for par
        console.log(el)
    }
})


//ex 4
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title}) - ${movie.score}/100`)
})