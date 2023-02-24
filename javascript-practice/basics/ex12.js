/**
 * Array 확장(prototype 기반의 확장)
 * List 함수 
 */

Array.prototype.remove = function(index){      
    this.splice(index, 1);          
}

Array.prototype.insert = function(index, value) {
    if(value instanceof Array){
        // for(var i = 0; i < value.length; i++){
        //     this.splice(index+i, 0, value[i]);
        // }

        // 오류!!
        // 콜백 함수 안의 this는 어휘 상의 this와 일치하지 않는다.
        // value.forEach(function(e){
        //     this.splice(index++, 0, e); // Object global
        // });
        
        //해결 방법1
        // var _this = this;      // this를 지정해줌, Array의 this로 -> ex/a.insert이면 a배열의 this
        // console.log("_this: " + _this);
        // value.forEach(function(e) {     // value: ['a', 'b', 'c']
        //     console.log("===== this: " + this);     // 여기서 this가 왜 global인지...
        //     _this.splice(index++, 0, e);
        // });
        
        // 해결 방법2
        // Function.prototpye.bind() 함수를 사용한다.
        // 
        // value: ['a', 'b', 'c'] / index: 2 / e(element): 'a', 'b', 'c'
        value.forEach(function(e) {
            this.splice(index++, 0, e);
        }.bind(this));      



    }else {
        this.splice(index, 0, value);
    }
}

// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a', 'b', 'c']);       // a = [1, 2, 4]
console.log(a);
