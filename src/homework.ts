// test
console.log(`Log Test`);

// homework1-1 (내가 작성한 코드)
const n: number = 3;
if (n >= 2 && n <= 9) {
  for (let i = 1; i < 10; i = i + 1) {
    console.log(`${n} X ${i} = ${n * i}`);
  }
}
console.log(`================`);

// homework1-1 (GPT의 도움을 받아 작성한 코드)
const printMultiplicationTableGPT: (n: number) => void = (n: number): void => {
  if (n >= 2 && n <= 9) {
    for (let i = 1; i <= 9; i++) {
      console.log(`${n} X ${i} = ${n * i}`);
    }
  }
};

printMultiplicationTableGPT(5);
console.log(`================`);

// homework1-2 (내가 작성한 코드)
const printMultiplicationAllTable: () => void = (): void => {
  for (let n = 2; n < 10; n = n + 1) {
    for (let i = 1; i < 10; i = i + 1) {
      console.log(`${n} X ${i} = ${n * i}`);
    }
  }
};

printMultiplicationAllTable();
console.log(`================`);

// homework1-2 (GPT의 도움을 받아 작성한 코드)
for (let i = 2; i <= 9; i++)
  for (let j = 1; j <= 9; j++) console.log(`${i} X ${j} = ${i * j}`);

console.log(`================`);

// homework 1-3
const numberArrayReturn: (n: number) => number[] = (n: number): number[] => {
  const arrayAnswer: number[] = [];
  while (arrayAnswer.length < 5) {
    arrayAnswer.push(Math.floor(Math.random() * n + 1));
      // 소수에 n을 곱하면 무조건 n보다 작음
      // + 1 은 1 이상을 리턴하기위함
  }
  return arrayAnswer;
};

console.log(numberArrayReturn(10));
console.log(`================`);