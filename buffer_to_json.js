var buf = new Buffer('something');
console.log(buf);
var json = buf.toJSON(buf);
console.log(buf)

console.log(json);