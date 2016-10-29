// import events
var events = require('events');

// create eventEmitter object
var eventEmitter = new events.EventEmitter();

// create processing program
var connectHandler = function(){
    console.log('Successfully connected.');

    // trigger data_received
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
    console.log('successfully get data.');
});

// trigger connection event
eventEmitter.emit('connection');

console.log('done');