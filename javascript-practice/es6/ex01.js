/*
    let: block Scope의 변수
*/

try {
    if(true) {
        let  i = 10;
        var j = 20;
    }

    console.log(j);
    console.log(i);

} catch(e) {
    console.error('error' + e);
}

try {
    let f = function() {
        var m = 20;
        console.log("function f()");
    }

    f();
    console.log(m);
} catch(e) {
    console.error('error' + e);
}