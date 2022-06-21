const results = document.querySelector('#results');
const roundNumber = document.querySelector('#display-count');

function round() {
    for (let i = 1; i < 6; i++) {
        // let round = i;
        // round ++;
        results.textContent += `Round: ${i}\n`;
        console.log("Round:", i);
    }
    results.textContent += '\nGame Over';
}   

const startBtn = document.querySelector("#count");
const clearBtn = document.querySelector("#clear");
const countBtn = document.querySelector("#countBtn");

startBtn.addEventListener('click', round);
clearBtn.addEventListener('click', () => {
    results.textContent = '';
    counter = 0;
    roundNumber.textContent = `Round ${counter}`;
    console.clear();
});

let counter = 0;

countBtn.addEventListener('click', () => {
    counter++;
    document.querySelector('#display-count').innerHTML = `Round ${counter}`;
    console.log(`Round ${counter}`);
});

// let roundCount = 0;
// const btn = document.getElementById("clickme");
// const disp = document.getElementById("clicked");
// const amount = document.getElementsById("amount");

// btn.onclick = function() {
//     roundCount ++;
//     disp.innerHTML = counting;
//     const number =+ amount.value;
// }

// const cats = ['Pete', 'Biggles', 'Jasmine'];

// let myFavoriteCats = 'My cats are called';

// for (let i = 0; i < cats.length; i++) {
//     if (i === cats.length -1) { // End of array
//         myFavoriteCats = `${myFavoriteCats} and ${cats[i]}.`
//     } else {
//         myFavoriteCats = `${myFavoriteCats} ${cats[i]},`
//     }
// }

// console.log(myFavoriteCats);