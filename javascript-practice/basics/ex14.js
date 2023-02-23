/*
    URL 다루기
*/

var url = "http://www.mysite.com/user?name=윤한영&email=yoon@gmail.com";

// 1. escape: URL 전부를 encoding할 때
var url2 = escape(url);
console.log(url2);

// 2. encodeURI: URL 중 파라미터만을 encoding 한다. url 전체를 encoding 해야 하는 경우에 사용
var url3 = encodeURI(url);
console.log("\n" + url3);

// 3. encodeURIComponent: 값만 Encondig 해야 하는 경우에 사용
var url4 = encodeURIComponent(url);
console.log("\n" + url4);

/*
    4. 만들어야 할 URL
        http://www.mysite.com/user?name=윤한영&email=yoon@gmail.com

        : 파라미터 값들을 뽑아놓았을 때(아래의 formData 객체처럼) 이런 식으로 사용하면 된다~
*/
var url = "http://www.mysite.com/user";
var formData = {
    name: '윤한영',
    email: 'yoon@gmail.com'
}
var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    return qs.join("&");
}
console.log("\n" + url + "?" + toQueryString(formData)); 

console.log("");