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
    let message = new Message('Matt');
    expect(message.name).toEqual('Matt');
  })

  // test 6
  it("contains a commands array passed into the constructor as 2nd argument", function() {
    // before declare message declare array of commands 
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    // can make array 2nd arg for constructor

    let message = new Message('Test message with two commands', commands);
    console.log(message.commands);

    expect(message.commands).toEqual(commands);
    for (let i = 0; i < commands.length; i++) {
      console.log(commands[i]);
      expect(commands[i]).toEqual(commands[i]);
    }
    //expect(commands).toContain('MODE_CHANGE');
    //expect(message.commands).toContain('MODE_CHANGE');
    //expect(message.commands).toEqual((typeof(array));)
    
  })
  
});

  // Use this as a guide from command.spec.js:
  // it("throws error if command type is NOT passed into constructor as the first parameter", function() {
  //   expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  // });
