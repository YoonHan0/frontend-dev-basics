module.exports = {
    PI: 3.14,
    min: function() {
        var min = Number.MAX_SAFE_INTEGER;      // Number에서 나타낼 수 있는 가장 큰 수: 9007199254740991
        // Array.prototype.forEach.call(arguments, function(e){});
        Array.from(arguments).forEach(function(el) {
            if(el < min) {
                min = el;
            }
        });
        return min;
    },
    max: function() {
        var max = Number.MIN_SAFE_INTEGER;
        // Array.prototype.forEach.call(arguments, function(e){});
        Array.from(arguments).forEach(function(el) {
            if(el > max) {
                max = el;
            }
        });
        return max;
    }
}