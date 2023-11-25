import { config } from "./config.js";
import { isValid } from "./isValid.js";
import { shuffle } from "./shuffle.js";

const { limits, participants } = config;

let round1: string[] = [];
while (!isValid(participants, round1)) {
    round1 = shuffle(participants);
}

let round2: string[] = [];
while (!isValid(participants, round1, round2)) {
    round2 = shuffle(participants);
}

console.log('We will do two rounds of gifts this year.')
console.log('')
console.log('Spending limits:')
console.log(`  Round 1: $${limits.round1}`)
console.log(`  Round 2: $${limits.round2}`)
console.log('')
console.log('Gift assignments:')
participants.forEach((participant, index) => {
    console.log(`  ${participant}: ${round1.at(index)}, ${round2.at(index)}`)
})