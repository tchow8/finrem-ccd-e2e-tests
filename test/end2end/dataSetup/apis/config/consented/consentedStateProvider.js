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
    },

    'Prepare for Hearing': {
      prevStates: ['Scheduling and Hearing'],
      nextSteps: [
        { nextStep: 'Submit Uploaded Case Files', endState: 'Ready for Hearing' }
      ]
    },
        

    'Solicitor Draft Order': {
      prevStates: ['Ready for Hearing'],
      nextSteps: [
        { nextStep: 'Upload Draft Order', endState: 'Review Order' }
      ]
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
        { nextStep: 'Allocate to Judge', endState: 'Gate Keeping & Allocation' },
        { nextStep: 'Progress to Listing', endState: 'Scheduling and Hearing' },
        { nextStep: 'Consent Order Payment', endState: 'Consent Process' }

      ]
    } ,

    'Scheduling and Hearing': {
      prevStates: ['Gate Keeping & Allocation', 'Application Issued'],
      nextSteps: [
        { nextStep: 'List for Hearing', endState: 'Prepare for Hearing' }
      ]
    },
    'Draft Order Not Approved':{
      prevStates: ['Review Order'],
      nextSteps: [
        { nextStep: 'Send refusal reasons', endState: 'Solicitor Draft Order' }
      ]

    },
    'Schedule & Raise Directions Order':{
      prevStates: ['Review Order','Judge Draft Order'],
      nextSteps: [
        { nextStep: 'Upload Order', endState: 'Order Drawn' }
      ] 
    },
    'Order Drawn': {
      prevStates: ['Schedule & Raise Directions Order'],
      nextSteps: [
        { nextStep: 'Send Order', endState: 'Order Sent' }
      ]
    },
    'Order Sent': {
      prevStates: ['Order Drawn'],
      nextSteps: [
        { nextStep: 'Close Case', endState: 'End Case' },
        { nextStep: 'Prepare for Hearing', endState: 'Prepare for Hearing' }
      ]
    },
    'Consent Process':{
      prevStates: ['Application Issued'],
      nextSteps: [
        {nextStep: 'Assign To Judge', endState:'Awaiting Judiciary Response'}
      ]
    },
    'Consent Order Not Approved':{
      prevStates: ['Awaiting Judiciary Response'],
      nextSteps: [
        { nextStep: 'Upload Order', endState: 'Case Worker Review' }
      ] 
    }
       
  },
  judge:{
    'Gate Keeping & Allocation': {
      prevStates: ['Application Issued'],
      nextSteps: [
        { nextStep: 'Give Allocation Directions', endState: 'Scheduling and Hearing' }]
    },
    'Ready for Hearing': {
      prevStates: ['Prepare for Hearing'],
      nextSteps: [
        { nextStep: 'Solicitor To Draft Order', endState: 'Solicitor Draft Order' },
        { nextStep: 'Judge To Draft Order', endState: 'Judge Draft Order' }
      ]
    },
    'Review Order':{
      prevStates: ['Solicitor Draft Order'],
      nextSteps: [
        { nextStep: 'Draft Order Not Approved', endState: 'Draft Order Not Approved' },
        { nextStep: 'Draft Order Approved', endState: 'Schedule & Raise Directions Order' }
      ] 
    },

    'Judge Draft Order': {
      prevStates: ['Ready for Hearing'],
      nextSteps: [
        { nextStep: 'Upload Draft Order', endState: 'Schedule & Raise Directions Order' }
      ]
    },
    'Awaiting Judiciary Response':{
      prevStates: ['Consent Process'],
      nextSteps: [
        {nextStep: 'General Order', endState: 'Consent Not Approved'},
        { nextStep: 'Application Not Approved', endState: 'Consent Order Not Approved' }

      ]
    }
  }


};

exports.default = consentedtate;