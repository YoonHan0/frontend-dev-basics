/*
    default parameter
*/

const print = function(strs, end='\n') {        //end='\n'이렇게 default 값 정할 수 있음
    console.log(strs.join(end));
}



print(['Always', 'with', 'me'], ' ');