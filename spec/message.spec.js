const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function () {

  // test 4
  it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect( function() { new Message();}).toThrow(new Error('Name required.'))
  })

  // test 5
  it("constructor sets name", function () {
    let message = new Message('name');
    expect(message.messageType).toEqual('name');
  })

  // test 6
  it("contains a commands array passed into the constructor as 2nd argument", function() {
    let message = new Message('name', 'commands');
    expect(message.value).toEqual('name', 'commands');
  })
  
});

  // Use this as a guide from command.spec.js:
  // it("throws error if command type is NOT passed into constructor as the first parameter", function() {
  //   expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  // });
