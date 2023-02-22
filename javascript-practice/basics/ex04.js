/*
변수의 스코드(scope)

    1. 자바스크립트는 코드에서 변수의 범위를 알 수 있다. (정적 스코프)
    2. 자바스크립트 전역 범위
    3. ES6 이전
        - 자바와 같은 블록({}) 범위를 지원하지 않았음
        - 함수 범위'만' 지원했다!!
        - var 키워드를 사용해서 함수 범위를 가진다 -> var 키워드를 사용하지 않으면 모두 전역 변수로 생성된다!
    4. ES6 이후(ES6 ~ 현재(ES2023))
        - 자바와 같은 블록 스코프를 지원한다.
        - let 키워드를 사용해서 블록 범위를 가지게 한다.
        - const 키워드는 블록 범위에 있는 상수를 정의할 때 사용한다.

    5. 결론
        const/let만 사용하고 둘 중에 하나를 반드시 붙이자!! -> 안 붙이면 전역 범위가 된다. hoisting
*/
var i = 30;
f = function() {
    var i = 20;     // 함수 범위
    j = 100;        // 전역 범위

    console.log(i);
    i = j - i;
}
f();
console.log(i);
console.log(j);

console.log("\n ======= var 키워드는 '함수 블록'에서만 함수 범위를 만든다. ======= ");
if(90 + 10 === 100) {
    var k = 10;
}
console.log(k);     // 에러 안 뜸

console.log("\n ======= let을 이용해서 블록 단위를 만들 수 있다 ======= ");
{
    let x = 1000;
    const PI = 3.14;

    x = 100;
    // PI = 0;         // error: assign error
}
// console.log(x);     // error: x is not defined
// console.log(PI);    // error: PI is not defined
