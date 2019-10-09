


const apiTest = process.env.APITEST;


function log(message,err){

  if (apiTest === 'yes'){
    console.log(new Date() + ' : ' + message);
  
    

  }else{
    const { I } = inject();
    I.say(new Date() + ' : ' + message);

    let scenarioSteps = debugReportJson[currentScenario]['steps'];
      scenarioSteps[message] = {};
      scenarioSteps[message]['url'] = '';
      scenarioSteps[message]['image'] = '';
      scenarioSteps[message]['stepDetails'] = 'Data Setup ' + message;

  }


}

exports.default = log;