/* 
    변수와 자형(Data Type)

    [기본타입(Primitive Type)]
    - undefined
    - number
    - string
    - boolean

    [객체] | object 타입을 리턴하면 object 형태로, {}도 리턴하면 ㅇㅇ, [] 역시 ㅇㅇ, null도 타입 리턴하면 object
    - object
        1. new 생성자함수() 사용해서 생성 | new Number() 하면 object 타입의 객체가 나온다~
            Number()    => object 타입의 객체
            String()    => object 타입의 객체
            Boolean()   => object 타입의 객체
            Object()    => object 타입의 객체
            Array()     => object 타입의 객체
            Date()      => object 타입의 객체
            RegExp()    => object 타입의 객체
            Function()  => function 타입의 객체 **

        2. {}
        3. []
        4. null
    -function
*/
console.log("\n======== 기본타입(undefined, number, string, boolean ========");
var u = undefined;  // var u; -> 이 코드와 동일, JavaScript는 선언과 정의를 구분하지 않는다.
var i = 10;
var s = 'Hello World';
var b = true;

console.log(u, " : " , typeof(u));
console.log(i + " : " + typeof(i));
console.log(s + " : " + typeof(s));
console.log(b + " : " + typeof(b));

console.log("\n======= 객체타입(object) =======");
var i2 = new Number(10);
var s2 = new String('Hello World!');
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();
var o2 = {};
var a2 = [];
var n = null;

console.log(i2 + ":" + typeof(i2) + " : " + (i2 instanceof(Number)));
console.log(s2 + ":" + typeof(s2) + " : " + (s2 instanceof(String)));
console.log(b2 + ":" + typeof(b2) + " : " + (b2 instanceof(Boolean)));
console.log(o + ":" + typeof(o) + " : " + (o instanceof(Object)));
console.log(a + ":" + typeof(a) + " : " + (a instanceof(Array)));
console.log(d + ":" + typeof(d) + " : " + (d instanceof(Date)));

console.log("\n===== 잠깐 쉬고 =====");
console.log(o2 + ":" + typeof(o2) + " : " + (o2 instanceof(Object)));
console.log(a2 + ":" + typeof(a2) + " : " + (a2 instanceof(Array)));
console.log(n + ":" + typeof(n));

/* 생성자 함수 예시
function Student(name) {        // 생성자 함수는 대게 이렇게 정의되어 있다!
    this.name = name;
}
var o = new Student('윤한영');
console.log(typeof(o));
*/

// var a = 10;
// console.log(`a의 값은 ${a}이다.`);       // ""와 ''의 차이는 없음 -> 구글은 ''를 더 선호한다카더라~

console.log("\n======= 객체타입(function) =======");
function f1(a, b) {
    return a + b;
}

var f2 = function(a, b) {
    return a + b;
}

var f3 = new Function("a", "b", "return a + b");
console.log(f1(10, 20), f2(10, 20), f3(10, 20));
console.log("f1:", typeof(f1));
console.log("f2:", typeof(f2));
console.log("f3", typeof(f3));

console.log("\n======= 원시 타입도 메소드를 호출할 수 있다.(유사 객체) =======");
console.log(b2.valueOf());
console.log(b.valueOf());   // -> new Boolean(b).valueOf() 이렇게 임시 객체를 만들어서 실행됨
