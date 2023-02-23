/* 
    String primitive type과 String 객체 함수 (String.prototype.*)
*/

// 배열처럼 접근이 가능하다.
var str1 = "Hello World!";
for(var i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = "hello";
var str3 = "world";
var str4 = str2 + " " + str3;
console.log(str4);

// casting
var str5 = "5" + 5;
console.log(str5);      // result: 55
var str5 = 5 + "5";
console.log(str5);      // -> 순서가 상관 있는 것이 아니다

var str6 = "boolean" + true;
console.log(str6);      // result: booleantrue

// 객체 함수
var str7 = "string1 string2 string3";
var index = str7.indexOf('string2');
console.log(index);     // result: 8 (string2의 's'의 index가 8임)

index = str7.indexOf('string4');
console.log(index);     // result: -1 / 없으니까

var str8 = str7.substring(10/*firstIndex*/, 13/*lastIndex -1 */);
console.log(str8);

var a = str7.split(" ");
console.log(a, a.length);

var a = str7.split(":");        // 없는걸로 쪼개니까 안 쪼개지고 원본 return
console.log(a, a.length);


                /* ============================== */
console.log("");