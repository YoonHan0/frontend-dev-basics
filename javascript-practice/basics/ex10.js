/*
    배열(Array)
*/
console.log(" \n===== 배열 생성1: 내장객체(생성자 함수) 사용하는 방법 ===== ");

var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

/* 생성자 함수의 파라미터가 하나인 경우: 배열의 크기 */
var a2 = new Array(10);
console.log(typeof(a2), a2 instanceof Array, a2.length);
// => 배열의 크기를 지정하는 것은 별 의미가 없다: 동적으로 배열은 늘어난다!
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;    // -> 배열의 크기를 벗어나서 값을 넣었는대도 에러가 나지 않고 길이가 늘어나면서 값이 들어감
console.log(a2, a2.length);

/* 생성자 함수의 파라미터가 두 개 이상인 경우: 초기값 설정 */
var a3 = new Array(0, 2, 4, 6, 8);
console.log(a3, a3.length);

console.log(" \n===== 배열 생성2: 리터럴을 사용하는 방법 ===== ");
var a4 = [];
console.log(typeof(a4), a4 instanceof Array, a4.length);

/* 배열 요소의 타입은 동일하지 않아도 된다. */
var a5 = [10, 'JavaScript', true, undefined, {
    name: '둘리',
    age: 26
}, function() {
    console.log('Hello World!');
}];
console.log(typeof(a5), a5 instanceof Array, a5.length);

console.log("\n ===== 배열의 순회 ===== ");
for(var i = 0; i < a5.length; i++) {
    console.log(a5[i]);
}

console.log("\n ===== Array vs Object ===== ");
var a6 = [];
a6[0] = 0;
a6['1'] = 1;
a6.name = '둘리';
a6.age = 10;

console.log(a6['0'], a6[1], a6['name'], a6.age, "length: " + a6.length);
// -> Object 형태로 초기화하면 (ex/ a6.name = '둘리' or a6.age = 10) 배열의 길이에 영향을 주지 않는다
// ? 왜 그런거지 객체 형태라서 그렇다카면 배열이 어떻게 저장 되는건강

var o6 = {};
o6[0] = 0;
o6['1'] = 1;
o6.name = '둘리';
o6.age = 10;

console.log(o6['0'], o6[1], o6['name'], o6.age, "length: " + o6.length);

/* for ~ in */
console.log(" \n ===== for ~ in: 객체 ===== ");
for(prop in o6) {
    console.log(prop, o6[prop]);
}
console.log(" \n ===== for ~ in: 배열 ===== ");
for(prop in a6) {
    console.log(prop, a6[prop]);
}
console.log("");