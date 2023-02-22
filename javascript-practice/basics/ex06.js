/* 
자바스크립트 객체 1 - object 타입

    1. 자바스크립트 객체는 function 타입과 object 타입 딱 2가지!!
    2. 보통, function 타입의 객체는 "함수"라고 부른다.
    3. 따라서 자바스크립트에서 객체라고 부르는 것은 object 타입의 객체를 가리킨다.
*/

/*  생성 방법1
    - 생성자 함수를 사용하는 방법
        1. Number, Boolean, String, Object, Array 내장 객체
        2. 사용자 정의 생성자 함수
*/
var o1 = new Object();
o1.name = "윤한영";
o1.age = 26;
o1.another = new Object();
o1.another.name = "마이콜";
o1.another.age = 20;

console.log(o1);

/*  생성 방법2
    - {} literal 사용하는 방법
*/
var o2 = {};
o2.name = "윤한영";
o2.age = 26;
o2.another = {};
o2.another.name = "마이콜";
o2.another.age = 20;

console.log(o2);

/*  생성 방법3
    - (J)ava(S)cript (O)bject (N)otation
*/
var o3 = {
    name: '윤한영',
    age: 26,
    another: {
        name: '마이콜',
        age: 20
    },
};

console.log(o3);