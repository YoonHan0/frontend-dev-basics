/* Parenthesis-less function & Template Literal */

const f = function(s, ...v) {
    // console.log(typeof(s), s instanceof Array, s.length);
    console.log(s, v);
}

f`
    color: #f00;
    font-size:20px;
    ${'hello'}
    ${() => {}}
`;