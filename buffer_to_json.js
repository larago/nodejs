var buf = new Buffer('something');
var json = buf.toJSON(buf);
console.log(json);