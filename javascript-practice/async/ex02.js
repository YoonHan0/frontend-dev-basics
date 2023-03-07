
/* 콜백 지옥에서 벗어나기 위해서 promise 라는 것을 사용하게 됨 */
// callback 대신에 promise 객체를 리턴함 -> ?: ES6에 나온 async, await를 사용하기 위해서
const myAsyncFn02 = function(param) {
    return new Promise(function(resolve, reject) {
        /*
            비동기 코드가 들어가게 됨
            - 파일 시스템 접근(file, io), 네트워크 통신, SQL to DB, setTimeout...
        */
        setTimeout(function() {
            if(param === 'data') {
                resolve('Ok');
            } else {
                reject(new Error('fail'));
            }
           }, 2000);
    });
}

// test01: success  |   비동기 처리를 할 때 callback함수는 첫 인자를 error, 두번째 인자는 result를 받는 것이 일반적임
/*
myAsyncFn02("data").then(function(error, result) {
    console.log(result);
})

// test02: fail
myAsyncFn02("").catch(function(error) {
    console.error(error);
});
*/
if(require.main === module) {
    /* 이렇게 한 번에 가능 */
    myAsyncFn02("data")
    .then(function(error, result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error);
    });
    console.log("wait...");
} else {
    module.exports = myAsyncFn02;
}


