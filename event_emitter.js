var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log("listener 1 executed.");
};

var listener2 = function listerner2() {
    console.log("listener 2 executed.");
};

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " events' listeners");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("listener 1 is no longer being listened.");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " events listeners.");

console.log('Everything done.')