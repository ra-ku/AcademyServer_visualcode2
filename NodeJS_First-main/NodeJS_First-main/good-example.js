// 이 파일은 ESLint와 Prettier 규칙을 준수합니다!

const name = '철수';

function greet(userName) {
  console.log('안녕하세요, ' + userName + '님!');
}

const numbers = [1, 2, 3, 4, 5];

const user = {
  name: '김영희',
  age: 25,
  city: '서울',
};

greet(name);

// 긴 줄은 자동으로 나눠집니다
const longText =
  '이것은 매우 매우 매우 매우 매우 매우 긴 텍스트입니다. ' +
  'Prettier가 이것을 여러 줄로 나눠줄 것입니다.';

console.log(numbers);
console.log(user);
console.log(longText);
