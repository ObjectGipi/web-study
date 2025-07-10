// 이터러블 객체: 순회 가능하다면 이터러블 객체로 정의한다.(배열, 셋, 맵, 사용자가 정의한 이터러블 객체, 기타)
// 이터러블 객체는 Symbol.iterator 메소드를 가진다
// Symbol.iterator: 실행하면 새로운 이터레이터를 리턴한다
// 이터레이터: next() 메소드를 실행하면 {value, done} 객체를 리턴
// for of : 이터러블 객체의 Symbol.iterator가 실행되어 새로운 이터레이터가 next()를 실행하고 done = true가 되기 전까지 value를 순회한다

const list1 = [1, 2, 3, 4, 5]; // 이터러블 객체
const iterator1 = list1[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
for (const item of list1) {
  console.log(item);
}