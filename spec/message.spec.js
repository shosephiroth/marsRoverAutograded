const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {

  it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect( function() { new Message();}).toThrow(new Error('Message name required.'));
  });

  it("constructor sets name", function() {
    let message = new Message('New message!');
    expect(message.name).toEqual('New message!');
  });

  it("contains a commands array passed into the constructor as 2nd argument", function() {
    let commands = [new Command('STATUS_CHECK'), new Command('MOVE', 20)];
    let message = new Message('Another message!', commands);
    expect(message.commands).toEqual(commands);
  });

});
