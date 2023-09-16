 //Ex Aceder Arrays como Matriz (Nested Arrays)
 
 //EX43 - Incluir o meu nome no voo
 const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
]

airplaneSeats[3][1] = 'Fabrício';
console.log(airplaneSeats);