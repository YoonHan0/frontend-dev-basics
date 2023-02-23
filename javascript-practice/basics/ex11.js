/*      Array 객체 함수: Array.prototype.*       */

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];

// concat: 배열 합치기
console.log("\n ===== concat ===== ");
var a1 = fruits.concat(colors);

console.log(a1);

// pop, push: stack 지원
console.log("\n ===== Stack 지원 ===== ");
var color = colors.pop();
console.log(color);

console.log(colors);
colors.push('red');
console.log(colors);

// join: 붙이기
console.log("\n ===== join ===== ");
var str = fruits.join(":");
console.log(str);

// reverse
console.log("\n ===== reverse ===== ");
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift: pop()과 반대로 인덱스가 가장 작은 값 리턴
console.log("\n ===== shift ===== ");

var numbers1 = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers1.shift();
console.log(number, numbers1);

// slice(s, n): s 인덱스부터 n-1까지 짤라서 리턴 | 기존 값은 유지됨
console.log("\n ===== slice ===== ");

console.log(numbers1);
var numbers2 = numbers1.slice(1, 3);
console.log(numbers2);
console.log(numbers1);

/* splice: 기존 값 유지 X
        1. index에서 count만큼 삭제하고 삭제된 요소를 배열에 담아 리턴
*/
console.log("\n ===== splice(index, count) ===== ");

console.log(fruits);
var fruits2 = fruits.splice(0, 2);
console.log(fruits2, fruits);

/* splice: 기존 값 유지 X
        2. index에서 count만큼을 삭제하고 replace로 대체한 후, 삭제된 요소를 배열에 담아서 리턴
*/
console.log("\n ===== splice(index, count, replace) ===== ");

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a1, a2);

/* splice: 기존 값 유지 X
        3. removeAt() 처럼 작동
*/
console.log("\n ===== removeAt() ===== ");

var a3 = [0, 1, 2, 3, 4];
a3.splice(2, 1);        // removeAt(2)
console.log(a3);


/* splice: 3. insertAt() 처럼 작동 */
console.log("\n ===== insertAt() ===== ");
var a4 = [0, 1, 2, 3, 4];
a4.splice(1, 0, 10);        // insertAt(2)
console.log(a4);

console.log("");