/*
    Named export II
    
    destructing이 가능하다. -> import할 때 이름을 명시해서 해당 데이터만 import 하는 것
*/

const add =  function(a, b) {
        return a + b;
}
const substract = function(a, b) {
    return a - b;
}

export {add, substract};


