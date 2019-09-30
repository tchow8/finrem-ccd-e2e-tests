

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
    'Application Issued': {
        tabs: [
            { name: 'Payment Details', seeText: ['Has the applicant applied for help with fees online?','Order Summary']}
        ]
    }
}

exports.default = contestedTabValidations; 