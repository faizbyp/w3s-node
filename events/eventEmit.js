import {EventEmitter} from 'node:events';

const eventEmitter = new EventEmitter();
const myEventHandler = () => {
  console.log('i hear a scream!');
}

// create an event 'scream' and inserting the event handler
eventEmitter.on('scream', myEventHandler);

// emit the event 'scream'
eventEmitter.emit('scream');