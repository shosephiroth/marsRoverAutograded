class Message {
   // Write code here!
   constructor(name, commands) {
     this.name = name;
     if (!name) {
       throw Error("Name required.");
     }
     this.commands = commands;
     // add in later:
     // if (!commands) {
     // throw Error("Command required.");
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
