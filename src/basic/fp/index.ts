// 함수 = 일급 객체
const addOne = (x: number): number => {
    return x + 1;
}
const y = addOne(10)
console.log(y);

// 함수 간단하게 쓰기
const addTwo = (x: number) => x * 2;

// 함수의 합성
let numbers: number[] = [1, 2, 3, 4, 5];

// 대표적인 합성의 예시: map
export const fakeMap = <T>(inputList: Iterable<T>, callback: (item: T) => T) => {
    let outputList = [];
    for (const item of inputList) {
        outputList.push(callback(item));
    }
    return outputList;
}
console.log(fakeMap(numbers, (x) => {return x * 2}));
console.log(numbers.map(x => {return x * 2}));

// 대표적인 합성의 예시: filter
export const fakeFilter = <T>(inputList: Iterable<T>, callback: (item: T) => boolean) => {
    let outputList = [];
    for (const item of inputList) {
        if (callback(item)) {
            outputList.push(item);
        }
    }
    return outputList;
}
console.log(fakeFilter(numbers, (x) => {return x < 10}));
console.log(numbers.filter(x => {return x < 10}));

// 대표적인 합성의 예시: reduce
export const fakeReduce = <T>(inputList: Iterable<T>, callback: (acc: T, x: T) => T, acc: T) => {
    for (let item of inputList) {
        acc = callback(acc, item);
    }
    return acc;
}
console.log(fakeReduce(numbers, (acc, x) => {return acc + x}, 0));
console.log(numbers.reduce((acc, x) => {return acc + x}, 0));

// 평가 지연: curry = 함수의 실행 시점을 미루자
const minusOneDelay = (x: number) => {
    return () => {return x - 1};
}
const exe = minusOneDelay(10);
console.log(exe);
console.log(exe());
