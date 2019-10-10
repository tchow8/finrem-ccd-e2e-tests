var {createConsentedCase} = require('../../createConsentedCase');

var consentedtate = {
  solicitor : {
    'Application Drafted':{
      prevStates: [],
      nextSteps:[
        { nextStep: 'Case Submission|HWF', endState: 'Awaiting HWF Decision' },
        { nextStep: 'Case Submission|PBA', endState: 'Application Submitted' }
      ],
      method: (solRef) => createConsentedCase(solRef) 
    }
  },
  caseWorker: {
    'Application Submitted': {
      prevStates: ['Application Drafted', 'Awaiting HWF Decision', 'Awaiting Payment Response'],
      nextSteps: [
        { nextStep: 'Issue Application', endState: 'Application Issued' }
      ]
    },
    'Awaiting HWF Decision': {
      prevStates: ['Application Drafted'],
      nextSteps: [
        { nextStep: 'HWF Application Accepted', endState: 'Application Submitted' },
        { nextStep: 'Fee Account Debited', endState: 'Application Submitted' },
        { nextStep: 'Awaiting Payment Response', endState: 'Awaiting Payment Response' }
      ]
    } ,
    'Awaiting Payment Response': {
      prevStates: ['Awaiting HWF Decision'],
      nextSteps: [
        { nextStep: 'HWF Application Accepted', endState: 'Application Submitted' },
        { nextStep: 'Fee Account Debited', endState: 'Application Submitted' }          ]
    } ,
    'Application Issued': {
      prevStates: ['Application Submitted'],
      nextSteps: [
        { nextStep: 'Assign To Judge', endState: 'Awaiting Judicial Response' }
      ]
    },

    'Consent Order Not Approved': {
      prevStates: ['Awaiting Judicial Response'],
      nextSteps: [
        { nextStep: 'Assign To Judge', endState: 'Awaiting Judicial Response' },
        { nextStep: 'Upload Order', endState: 'Consent Order Not Approved' },
        { nextStep: 'Send Order', endState: 'Awaiting Response' }

      ]
    },
    'Consent Order Approved': {
      prevStates: ['Awaiting Judicial Response'],
      nextSteps: [
        { nextStep: 'Assign To Judge', endState: 'Awaiting Judicial Response' },
        { nextStep: 'Upload Consent Order', endState: 'Consent Order Made' },
        { nextStep: 'Send Order', endState: 'Consent Order Made' },
        { nextStep: 'Amend Order', endState: 'Consent Order Approved' }
      ]
    },
    'Response Received': {
      prevStates: ['Awaiting Response'],
      nextSteps: [
        { nextStep: 'Assign To Judge', endState: 'Awaiting Judicial Response' }
      ]
    }    
  },
  judge:{
    'Awaiting Judicial Response': {
      prevStates: ['Application Issued'],
      nextSteps: [
        { nextStep: 'General Order', endState: 'Consent Order Not Approved' },
        { nextStep: 'Application Not Approved', endState: 'Consent Order Not Approved' },  
        { nextStep: 'Approve Application', endState: 'Consent Order Approved' }
      ]
    },
    'Awaiting Response': {
      prevStates: ['Consent Order Not Approved'],
      nextSteps: [
        { nextStep: 'Respond To Order', endState: 'Consent Order Not Approved' },
        { nextStep: 'Assign To Judge', endState: 'Response Received' }
      ]
    }
  }


};

exports.default = consentedtate;