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

// homework 1-3 (GPT의 도움을 받아 작성한 코드)
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

// homework 2-1 (내가 작성한 코드)
const numberSum: (n: number) => number = (n: number): number => {
  let sum: number = 0;
  while (sum < n) {
    sum = sum + 1;
  }
  return sum;
};

console.log(numberSum(5));
console.log(`================`);

// homework 2-1 (GPT의 도움을 받아 작성한 코드)
const numberSumGPT: (n: number) => number = (n: number): number => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum = sum + i;
    i = i + 1;
  }
  return sum;
};

console.log(numberSumGPT(5));
console.log(`================`);

//homework 2-2 (내가 작성한 코드)
const oddNumberSum: (n: number) => number = (n: number): number => {
  let sum: number = 0;
  let i: number = 1;
  while (i <= n) {
    if (i % 2 === 1) {
      sum = sum + i;
    }
    i = i + 1;
  }
  return sum;
};

console.log(oddNumberSum(6));
console.log(`================`);

// homework 2-3 (GPT의 도움을 받아 작성한 코드)
// 2부터 n - 1 까지의 정수중에서 n을 나눌 수 있는 정수가 있는지 판단 -> 없다면 소수
const checkPrimeNumber: (n: number) => boolean = (n: number): boolean => {
  let i: number = 2;
  let result: boolean = true;

  while (i < n) {
    // 이 결과를 result에 담고싶음
    if (n % i === 0) {
      result = false;
    }
    i = i + 1;
  }
  return result;
};

let testNumber: number = 4;
console.log(`Is ${testNumber} a prime number? ` + checkPrimeNumber(testNumber));
console.log(`================`);

// homework 2-4 (내가 작성한 코드)
// 소수인지 체크하고 배열에 넣고 리턴을 배열의 갯수로 하면 될듯?
const countPrimeNumber: (n: number) => number = (n: number): number => {
  let i: number = 2;
  let primeNumberList: number[] = [];
  while (i < n) {
    if (n % i === 0) {
      primeNumberList.push(i);
    }
    i = i + 1;
  }

  return primeNumberList.length;
};

console.log(countPrimeNumber(6));
// 2, 3, 5로 소수는 총 3개가 나와야함
// 근데 5를 어떻게 check 해야할지 잘 모르겠습니다.