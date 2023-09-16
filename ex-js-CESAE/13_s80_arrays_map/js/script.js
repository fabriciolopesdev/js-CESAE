//ex 1
const texts = ['mar', 'céu', 'rio', 'flor', 'sol',];
const caps = texts.map(function(t){
    return t.toUpperCase();
})

//na consola
//texts = ['mar', 'céu', 'rio', 'flor', 'sol',]
//caps = ['MAR', 'CÉU', 'RIO', 'FLOR', 'SOL'] o array capturado com o método upperCase aplicado



//ex 2
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

const titles = movies.map(function (movie){
    return movie.title.toUpperCase();
})

//na consola
// titles =(4) ['AMADEUS', 'STAND BY ME', 'PARASITE', 'ALIEN']0: "AMADEUS"1: "STAND BY ME"2: "PARASITE"3: "ALIEN"length: 4[[Prototype]]: Array(0)
//o array com o método UpperCase aplicado