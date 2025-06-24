import {fakeFilter, fakeMap, fakeReduce} from "./index";

// 2배를 하고, 10보다 작은 값만 얻어서, 전부 곱하면?
let items = [1, 2, 3, 4, 5];

console.log("-----")
items = fakeMap(items, x => {return x * 2});
console.log(items)
items = fakeFilter(items, (x) => {return x < 10});
console.log(items)
const result = fakeReduce(items, (acc, x) => {return acc * x}, 1);
console.log(result);
