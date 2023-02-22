/*
    자바스크립트 객체 4 - prototype 기반의 상속과 오버라이딩 : 자바스크립트 객체 지향 프로그래밍
*/
var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'bitacademy';
MyObject.prototype.course = 'Spring & React';
MyObject.prototype.info = function() {
    console.log(this.name + " : " + this.age + " : " + this.school + " : " + this.course);
}
console.log(MyObject.prototype);

// MyObject 인스턴스 생성1
var o1 = new MyObject("마이콜", 20);
o1.info();

// MyObject 인스턴스 생성2
var o2 = new MyObject("둘리", 10);
o2.info = function() {      // 요게 좀 오버라이딩 느낌이긴하네
    console.log("쉿 쉿 쉿!");
}
o2.info();
o1.info(); 