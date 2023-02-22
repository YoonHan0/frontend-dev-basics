/*  null과 undefined */

var myVar1 = undefined; // 명시적으로 indefined 대입
var myVar2;             // 암시적으로 indefined 대입
var myVar3 = null;

console.log(myVar1, myVar2, myVar3);

// undefined와 null의 동치(equal) 비교
console.log(typeof(myVar1), typeof(myVar3));
console.log(myVar1 == myVar3);      // 값 비교
console.log(myVar1 === myVar3);     // 값 비교 + 타입 비교


console.log(" \n======================================== ");

// == : equality, 값의 동치성, 형 변환
console.log('4' == 4);
console.log(false == 0);
console.log('abc' == new String('abc'));

console.log(true + 10);
console.log('abc'  + new String('abc'));
console.log(1 + '11');  // 111
console.log('11' + 1);  // 111

console.log(" \n======================================== ");
// ===
//  1. 타입의 동일성
//  2. 타입이 같은 경우
//      2-1 primitive tpye: 갑의 동일성
//      2-2 obejct tpye: 객체의 동일성

console.log('4' === 4);
console.log(false === 0);
console.log(4 === 2);
console.log(new Number(10) === new Number(2));