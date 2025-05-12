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
    // 소수에 n을 곱해도 결과값은 무조건 n보다 작음
    // + 1은 1 이상을 리턴하기위함
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

  while (i < n) {
    if (n % i === 0) {
      return false;
    }
    i = i + 1;
  }
  return true;
};

let testNumber: number = 4;
console.log(`Is ${testNumber} a prime number? ` + checkPrimeNumber(testNumber));
console.log(`================`);

// homework 2-4 (내가 작성한 코드)
// 소수인지 체크하고 배열에 넣고 배열의 원소 갯수 리턴하는 함수
// 위에서 소수인지 체크하는 함수를 활용
const countPrimeNumber: (n: number) => number = (n: number): number => {
  let i: number = 2;
  let primeNumberList: number[] = [];

  while (i <= n) {
    if (checkPrimeNumber(i)) {
      primeNumberList.push(i);
    }
    i = i + 1;
  }
  return primeNumberList.length;
};

console.log(countPrimeNumber(6));
console.log(`================`);
// 2, 3, 5로 소수는 총 3개가 나와야함

// Practice
// 1 ~ n의 각 숫자가 소수인지 체크하고, 소수면 배열에 넣고, 최종 배열의 갯수를 리턴 하는 함수
const countPrimeNumberPlus = (n: number): number => {
  let i: number = 2;
  let primeNumberList: number[] = [];

  while (i <= n) {
    let j: number = 2;
    let isPrime: boolean = true;

    while (j < i) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
      j = j + 1;
    }

    if (isPrime) {
      primeNumberList.push(i);
    }

    i = i + 1;
  }

  return primeNumberList.length;
};

console.log(countPrimeNumberPlus(8));
console.log(`================`);

// Practice 2
// 자연수 n이 주어질 때,
// 1부터 n까지의 수 중 3의 배수를 제외한 모든 수의 합을 반환하는 함수
// 이때 continue 를 사용해 3의 배수일 때 루프의 남은 부분을 건너뛰도록 구현
// continue: 아래 코드를 무시하고, 즉시 조건 검사 -> 다음 반복
const sumExcludingMultiplesOfThree = (n: number): number => {
  let sum: number = 0;

  for (let i: number = 1; i <= n; i = i + 1) {
    if (i % 3 === 0) {
      continue;
    }
    sum = sum + i;
  }
  return sum;
};

console.log(sumExcludingMultiplesOfThree(10));
console.log(`================`);

// Practice 3
// 정수 배열 nums가 주어질 때,
// 배열을 앞에서부터 순회하며 음수(negative number)가 처음 등장하는 인덱스를 반환하는 함수
// 음수가 하나도 없으면 -1을 반환하며, 음수를 찾자마자 break 로 반복문을 즉시 종료
// break: 실행 위체에서 반복문을 즉시 빠져나가, 남은 반복은 전부 건너뛰고 다음 코드로 이동
// i < n.length ➡️ 배열의 마지막 원소까지 확인
const firstNegativeIndex = (n: number[]): number => {
  let foundIndex: number = -1;

  for (let i: number = 0; i < n.length; i = i + 1) {
    if (n[i] < 0) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
};

console.log(firstNegativeIndex([1, 2, 3, -2, 4, 5]));
