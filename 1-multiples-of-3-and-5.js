let multiples = [];
const n = 1000;
      reducer = (accumulator, currentValue) => accumulator + currentValue;

for(i = 1; i < n; i++) {

    if( !(i % 3) || !(i % 5)) {
        multiples.push(i);
    }

}

console.log(multiples.reduce(reducer));