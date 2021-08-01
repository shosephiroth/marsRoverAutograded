class Rover {
   // Write code here!
   constructor(position) {
     this.position = position;
     this.mode = 'NORMAL';
     this.generatorWatts = 110;

   }

  receiveMessage(message) {
    return message;

  }
}

module.exports = Rover;
