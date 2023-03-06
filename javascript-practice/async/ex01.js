

const myAsyncFn01 = function(param, callback) {
    /*
        비동기 코드가 들어가게 됨
        - 파일 시스템 접근(file, io), 네트워크 통신, SQL to DB, setTimeout...
    */
   setTimeout(function() {
    if(param === 'data') {
        callback(null, "Ok");
    } else {
        callback(new Error('fail'), null);
    }
    
   }, 2000);
}

// test01: success  |   비동기 처리를 할 때 callback함수는 첫 인자를 error, 두번째 인자는 result를 받는 것이 일반적임
myAsyncFn01("data", function(error, result) {
    if(error) {
        console.error(error);
        return;
    }
    console.log(result);
});

// test02: fail
myAsyncFn01("", function(error, result) {
    if(error) {
        console.error(error);
        return;
    }
    console.log(result);
});

console.log("wait...");