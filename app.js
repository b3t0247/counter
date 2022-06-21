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
//     counter ++;
//     disp.innerHTML = count;
//     const number = +amount.value;
// }