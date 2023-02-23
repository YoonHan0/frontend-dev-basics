/*
    JavaScript 함수: function 타입의 객체
*/

console.log("\n === 함수를 생성하는 방법1: 함수 리터럴 === ");

function f1(a, b) {
    return a + b;
}
console.log(typeof(f1), f1 instanceof Function, f1(10, 20));


console.log("\n === 함수를 생성하는 방법2: 함수 리터럴 === ");
var f2 = function(a, b) {
    return a + b;
}
console.log(typeof(f2), f2 instanceof Function, f2(10, 20));


console.log("\n === 함수를 생성하는 방법3: new 연산자와 함께 Function 생성자 함수를 사용 === ");
var f3 = new Function("a", "b", "return a + b");
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));


console.log("\n === 함수를 생성하는 방법4: 익명(anonymous) 함수 === ");
// setTimeout(function(){
//     console.log("Time out!");
// }, 1000);

console.log("\n === 익명(anonymous) 함수의 또 다른 예: 한 번만(즉시) 실행하는 함수 === ");
/* 어디에서 쓸까?
    라이브러리(ex/ jQuery)를 만들 때 한 번만 실행되면 되는 동작(ex/ 초기화)을 함수 안에서만 동작하여 메모리를 많이
    잡어 먹지 않기 위해서
    -> 만약에 main에서 상당히 긴 동작이 돌아가면 main 자체가 끝이 나기 전까지 메모리를 너무 많이 잡아 먹고 있음
*/
var s = (function(a, b) {
    var m = 10;
    return a/10 + b/10;
})(10, 20);

console.log(s);

/* 가변 파라미터
    1. 자바스크립트는 기본적으로 가변 파라미터를 지원한다.
        파라미터는 고정되어 있지 않다.
*/

var f4 = function(a, b, c) {
    console.log(a, b, c);
}
f4(0, 1, 2, 3, 4, 5);       // -> result: 0, 1, 2   // 에러가 나지 않음

// 2. 예
console.log("\n === 가변 파라미터 함수 sum() === ");
var sum = function() {
    // console.log(arguments instanceof Array, arguments instanceof Object, arguments.length);
    // console.log(arguments); // result: { '0': 10, '1': 20, '2': 30 }
    var result = 0;
    for(var i = 0; i < arguments.length; i++) {
        // console.log(arguments[i]);   // result: 10, 20, 30
        result += arguments[i];
    }
    /* Error:   arguments의 __proto__는 Object Prototype에 chain이 되어 있기 때문에 
                === (arguments는 Object의 인스턴스이기 때문에) 
                === forEach는 Array의 내장 함수임 / arguments는 Object 형태이고 */
    // arguments.forEach(function(el) {
    //     result += el;
    // })
    Array.prototype.forEach.call(arguments, function(el) {
        result += el;
    });
    // 이렇게 하면 forEach에서 this는 arguments가 됨, bind() 같은 친구, call('this가 될 친구', callback Function)

    return result;
}

console.log(sum(10, 20, 30));
console.log(sum(20, 30));
console.log(sum(10));
console.log(sum(10, 20, 30, 40, 50));


