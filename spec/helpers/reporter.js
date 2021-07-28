let studentSpecs = [];

var gradeReporter = {
      specDone: function(result) {
         console.log('Spec: ' + result.fullName + ' was ' + result.status);
   
         for(var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Failure: ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
          }

         studentSpecs.push(result);
     }
};

jasmine.getEnv().clearReporters();              
jasmine.getEnv().addReporter(gradeReporter);

exports.array = studentSpecs;
