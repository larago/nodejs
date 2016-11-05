var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0){
    console.log(buffer1 + " before "+ buffer2);
}else if (result == 0){
    console.log(buffer1 + " equal to "+ buffer2);
}else {
    console.log(buffer1 + " after "+ buffer2);
}