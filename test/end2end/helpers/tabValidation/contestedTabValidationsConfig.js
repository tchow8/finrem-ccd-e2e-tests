

var contestedTabValidations = {
  'Any State':{
    tabs: [
      { name: 'History', seetext: ['Event','End state']},
      { name: 'Applicant', seetext: ['Applicant’s Details', 'Is the Applicant represented ?', 'Solicitor Details','Solicitor’s Contact Details'] },
      { name: 'Divorce Details', seetext: ['Divorce Details', 'Divorce Case Number','What stage has the divorce reached ?'] },
      { name: 'Respondent', seetext: ['Respondent’s Details','Is the respondent represented ?'] },
      { name: 'Nature of Application', seetext: ['Nature of application', 'Property adjustment order details','Order for children'] },
      { name: 'Case documents', seetext: ['Online Form A', 'Upload other documents','Upload case documents'] }

    ]

  },
  'Prepare For Hearing':{
    tabs: [
      { name: 'Payment Details', seeText: ['Special Measures',
        'This would usually be the applicants local Court', 'Time Estimate', 'Hearing Date', 'Hearing Time','Hearing Court'] }
    ] 
  },
  'Application Issued': {
    tabs: [
      { name: 'Scheduling and Listing', seeText: ['Has the applicant applied for help with fees online?','Order Summary']}
    ]
  }
};

exports.default = contestedTabValidations; 