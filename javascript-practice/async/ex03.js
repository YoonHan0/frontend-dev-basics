const fetch = require('./ex02');

/* async 키워드가 붙으면 해당 함수안에 비동기 처리가 있다~ 라는 말 */
const ex03 = async function(param) {
    try {
        const data = await fetch(param);    // 여기서 비동기 처리가 됨 : Blocking
        console.log(data);
    } catch(err) {
        console.error(err);
    }
    
}

ex03("data");
console.log("wait!!!");