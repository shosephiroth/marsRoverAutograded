class Rover {
  // Write code here!
   // define constructor with 1 param (position)
      // set position
      // set mode 
      // set generatorWatts'
	constructor(position) {
		this.position = position;
		this.mode = 'NORMAL';
		this.generatorWatts = 110;
	}

  //define a function called receiveMessage(message)
    //return {
        // message: message name
        // results: this.buildResults(message)
    // } 
      //buildResults(message){
    // initialize result array
    // go through each command
    // check what type of command it is
    // if command is status check
        // add this to the result array
      // {
      //   completed: true, 
      //   roverStatus: {
      //     mode: 'NORMAL', 
      //     generatorWatts: 110,
      //     position: 87382098
      //   }
      // }
  //}
    
	receiveMessage(message) {
		let response = {
			message: message.name,
			results: []
		};
		for (let i=0;i<message.commands.length;i++) {
			if (message.commands[i].commandType === 'STATUS_CHECK') {
				response.results.push({
					completed: true,
					roverStatus: {
						mode: this.mode,
						generatorWatts: this.generatorWatts,
						position: this.position
					}
				});
			} else if (message.commands[i].commandType === 'MODE_CHANGE') {
				this.mode = message.commands[i].value;
				response.results.push({
					completed: true
				});
			} else if (message.commands[i].commandType === 'MOVE') {
				if (this.mode === 'LOW_POWER') {
					response.results.push({
						completed: false
					});
				} else {
					this.position = message.commands[i].value;
					response.results.push({
						completed: true
					});
				}
			} else {
				response.results.push({
					completed: true
				});
			}
		}
		return response;
	}

}

module.exports = Rover;