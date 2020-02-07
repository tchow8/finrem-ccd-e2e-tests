

var contestedTabValidations = {
  '*':{
    tabs: [
      { name: 'History', seeText: ['Event','End state']},
      { name: 'Applicant', seeText: ['Applicant’s Details', 'Is the Applicant represented ?', 'Solicitor Details','Solicitor’s Contact Details'] },
      { name: 'Divorce Details', seeText: ['Divorce Details', 'Divorce Case Number','What stage has the divorce reached ?'] },
      { name: 'Respondent', seeText: ['Respondent’s Details','Is the respondent represented ?'] },
      { name: 'Nature of Application', seeText: ['Nature of application', 'Property adjustment order details','Order for children'] },
      { name: 'Case documents', seeText: ['Online Form A', 'Upload other documents','Upload case documents'] }

    ]

  },
  'Prepare For Hearing':{
    tabs: [
      { name: 'Scheduling and Listing', seeText: ['Special Measures',
        'This should be the FRC local to the applicant', 'Time Estimate', 'Hearing Date', 'Hearing Time','Hearing Court'] }
    ]
  },
  'Application Issued': {
    tabs: [
      { name: 'Scheduling and Listing', seeText: ['Has the applicant applied for help with fees online?','Order Summary']}
    ]
  }
};

exports.default = contestedTabValidations;