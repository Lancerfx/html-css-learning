console.log("Even numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("divisible by 3 and 4");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

let i = 1;
let sum = 0;

while (i <= 100) {
  sum += i;
  i++;
}

console.log("While loop from 1 to 100" + sum);

// WAP to print even numbers from 1 to 50.

// WAP to count how many numbers between 1 to 100 are divisible by both 3 and 5.

// WAP to print the multiplication table of a given number using for loop.

const multi = (number) => {
  console.log("Multiply");
  for (let i = 1; i < 11; i++) {
    console.log(`${i} X ${number} = ${i * number}`);
  }
};

multi(2);

// WAP to print the sum of numbers from 1 to 100 using a while loop.
// console.log("Using for loop to print multiplication.");
