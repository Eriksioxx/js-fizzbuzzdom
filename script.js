console.log('JS OK!');

//Per i multipli di 3 stampi “Fizz” al posto del numero e per i 
//multipli di 5 stampi Buzz.

//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

const divSquares = document.querySelector("#squares");

let x;

for (let x = 1; x <= 100; x++) {

    if (x % 3 === 0 && x % 5 === 0) {
        console.log('FizzBuzz');

        let element = `<div class="square square-green">FizzBuzz</div>`;
        divSquares.innerHTML += element;
    }

    else if (x % 3 === 0) {
        console.log('Fizz');

        let element = `<div class="square square-blue">Fizz</div>`;
        divSquares.innerHTML += element;
    }

    else if (x % 5 === 0) {
        console.log('Buzz');

        let element = `<div class="square square-red">Buzz</div>`;
        divSquares.innerHTML += element;
    }

    else {
        console.log(x);

        let element = `<div class="square">${x}</div>`;
        divSquares.innerHTML += element;
    }
}