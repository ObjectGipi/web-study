const email: string = "study@example.com";
const age: number = 20;
const password: string = "12345678";
const isAdult: boolean = false;

console.log(
  `my email is ${email}, my age is ${age}, my password is ${password}`,
);

type UserType = {
  email: string;
  age: number;
  password: string;
  isAdult: boolean;
};

const user1: UserType = {
  email, // 키와 값이 둘 다 선언해놓은 내용과 같으면 하나만 쓰는 축약법
  age,
  password,
  isAdult,
};

const user2: UserType = {
  email: "study2@example.com",
  age: 22,
  password: "1234",
  isAdult: true,
};

const users: UserType[] = []; // [] 배열
users.push(user1);
users.push(user2);
console.log(users[0]);

console.log(
  `user1: my email is ${users[0].email}, my age is ${users[0].age}, my password is ${users[0].password}`,
);
console.log(
  `user2: my email is ${users[1].email}, my age is ${users[1].age}, my password is ${users[1].password}`,
);

let x: number = 1; // const = 상수
x = x + 1; // = x++ & x+=1
x = x * 2; // = x*=2
x++; // x = x + 1 (잘 안씀)
x += 1;
x *= 2;
console.log(x);

// === (같다/다르다)
if (users[0].isAdult === true) {
  console.log(
    `user1: my email is ${users[0].email}, my age is ${users[0].age}, my password is ${users[0].password}, 
        i am Adult`,
  );
} else {
  console.log(`user1: my email is ${users[0].email}, my age is ${users[0].age}, my password is ${users[0].password}, 
      i am not Adult`);
}

if (users[1].isAdult === true) {
  console.log(
    `user2: my email is ${users[1].email}, my age is ${users[1].age}, my password is ${users[1].password}, 
        i am Adult`,
  );
} else {
  console.log(`user2: my email is ${users[1].email}, my age is ${users[1].age}, my password is ${users[1].password}, 
      i am not Adult`);
}

let i: number = 0;
while (i < 10) {
  console.log(i);
  i = i + 1;
}

let j: number = 0;
while (true) {
  console.log(j);
  j = j + 1;
  if (j < 10) {
    break;
  }
}

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}

let k: number = 1;
let sum: number = 0;
while (k < 11) {
  sum = sum + k;
  k = k + 1;
}
console.log(`총합: ${sum}`);

// 똑같이 생겼지만 명확한 의미가 다름 -> (user: UserType) => string = (user: UserType): string
const getUserProfile: (user: UserType) => string = (user: UserType): string => {
  if (user.isAdult === true) {
    return `user: my email is ${user.email}, my age is ${user.age}, my password is ${user.password},
        i am Adult`;
  } else {
    return `user: my email is ${user.email}, my age is ${user.age}, my password is ${user.password}, 
      i am not Adult`;
  }
};

for (let i = 0; i < 2; i = i + 1) {
  console.log(getUserProfile(users[i]));
}

