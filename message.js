class Message {
   // Write code here!
   constructor(messageType, value) {
     this.messageType = messageType;
     if (!messageType) {
       throw Error("Name required.");
     }
     this.value = value;
   }
   
}

// use this as a reference, from command.js:

// class Command {
//    constructor(commandType, value) {
//      this.commandType = commandType;
//      if (!commandType) {
//        throw Error("Command type required.");
//      }
//      this.value = value;
//    }
 
//  }

module.exports = Message;
