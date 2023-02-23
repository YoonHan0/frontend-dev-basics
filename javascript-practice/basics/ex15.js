/*
    Date 객체 함수(Date.prototype.*)
*/

// 현재 시간
var now = new Date();
console.log(now);

// 2023년 2월 23일


// 2023년 2월 23일 22:22:22
var d2 = new Date(2023, 1, 23, 22, 22, 22);
console.log(d2);

// 객체 함수
console.log(
    "년:" + now.getFullYear() + "\n" +
    "월:" + (now.getMonth() + 1) + "\n" +
    "시:" + now.getDay() + "\n" +
    "일:" + now.getHours() + "\n" +
    "분:" + now.getMinutes() + "\n" +
    "초:" + now.getSeconds() + "\n" +
    "밀리초:" + now.getMilliseconds() + "\n"
);

d2.setFullYear(2024);       // 2024년으로 set
console.log(d2);

d2.setMonth(7)  // 8월로 set
console.log(d2);