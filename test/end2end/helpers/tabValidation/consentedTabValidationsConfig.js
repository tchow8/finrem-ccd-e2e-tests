

var consentedTabValidations = {
  '*': {
    tabs: [
      { name: 'History', seeText: ['Event', 'End state'] },
      { name: 'Applicant', seeText: ['APPLICANT DETAILS'] },
      { name: 'Divorce', seeText: ['DIVORCE DETAILS', 'Divorce Case Number', 'What stage has the divorce reached ?'] },
      { name: 'Respondent', seeText: ['RESPONDENT DETAILS', 'Is the respondent represented ?'] },
      { name: 'Nature of Application', seeText: ['NATURE OF THE APPLICATION', 'ORDER FOR CHILDREN'] },
      { name: 'Case Documents', seeText: ['Draft Consent Order', 'Latest Consent Order', 'Form D81 Joint Document'] }

    ]

  },
  'Application Submitted':{
    tabs:[
    //   {name:'',seeText: []}
    ]
  }
};

exports.default = consentedTabValidations;