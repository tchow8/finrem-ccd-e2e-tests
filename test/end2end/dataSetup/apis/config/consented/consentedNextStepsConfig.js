
let caseSubmissionHwf = {
  'authorisationName': 'Teegan Olsen',
  'authorisationFirm': 'Consequatur Totam q',
  'authorisation2b': 'Consequatur dicta s',
  'authorisation3': '1978-07-10',
  'helpWithFeesQuestion': 'Yes',
  'HWFNumber': 'HWF22345',
  'orderSummary': {
    'PaymentReference': 'null',
    'PaymentTotal': '5000',
    'Fees': [
      {
        'value': {
          'FeeCode': 'FEE0229',
          'FeeAmount': '5000',
          'FeeDescription': 'Application for a financial order',
          'FeeVersion': '1'
        }
      }
    ]
  }
};

let caseSubmissionPBA = {
  'authorisationName': 'Uriah Bender',
  'authorisationFirm': 'Rem debitis ut optio',
  'authorisation2b': 'Senior',
  'authorisation3': '1982-03-13',
  'helpWithFeesQuestion': 'No',
  'PBANumber': 'PBA0066906',
  'PBAreference': 'Pba Reference for test',
  'amountToPay': '5000',
  'orderSummary': {
    'PaymentReference': 'null',
    'PaymentTotal': '5000',
    'Fees': [
      {
        'value': {
          'FeeCode': 'FEE0229',
          'FeeAmount': '5000',
          'FeeDescription': 'Application for a financial order',
          'FeeVersion': '1'
        }
      }
    ]
  }
};


const consentedNextSteps = {

  solicitor : {
    'Case Submission|HWF': {
      id: '',
      data: caseSubmissionHwf
    },
    'Case Submission|PBA': {
      id: '',
      data: caseSubmissionPBA 
    },
    'Respond To Order': {
      id: '',
      data: {
        'respondToOrderDocuments': [
          {
            'id': null,
            'value': {
              'DocumentType': 'Other',
              'DocumentDateAdded': '2019-10-10',
              'DocumentFileName': 'SomeDocument',
              'DocumentLink': {
                'document_url': 'http://dm-store-aat.service.core-compute-aat.internal/documents/a4f6cc3c-5e96-402a-a784-ac7e3f9382c1',
                'document_binary_url': 'http://dm-store-aat.service.core-compute-aat.internal/documents/a4f6cc3c-5e96-402a-a784-ac7e3f9382c1/binary',
                'document_filename': 'dummy.pdf'
              }
            }
          }
        ]
      }
    }
    
  },
  caseWorker : {
    'Awaiting Payment Response': {
      id: '',
      data: {}
    },
    'Fee Account Debited': {
      id: '',
      data: {}
    },
    'HWF Application Accepted': {
      id: '',
      data: {}
    },
    'PBA Payment': {
      id: '',
      data: {}
    },
    'Issue Application': {
      id: '',
      data: {
        'issueDate':'2019-10-10'
      }
    },
    'Assign To Judge': {
      id: '',
      data: {
        'assignedToJudgeReason': 'Draft consent order',
        'assignedToJudge': 'nasim_fr_judge@mailinator.com',
        'referToJudgeDate': '2019-10-10',
        'referToJudgeText': 'Test Assign to judge'
      }
    },
    'Upload Order': {
      id: '',
      data: {}
    },
    'Send Order': {
      id: '',
      data: {}
    },
    'Upload Consent Order':{
      id:'',
      data: {
        uploadConsentOrderDocuments:[] 
      }
    },
    'Amend Final Order':{
      id: '',
      data:{}
    }

  },
  judge : {
    'General Order': {
      id: '',
      data: {
        'generalOrderCollection':[] 
      }
    },
    'Application Not Approved': {
      id: '',
      data: {
        'orderRefusalCollectionNew': [
          {
            'id': 'cf5e3477-a8eb-443a-827c-24bcf285d088',
            'value': {
              'orderRefusalAfterText': 'Tempor ut totam et p',
              'orderRefusal': [
                'Provide pension values/property',
                'Order does not appear fair',
                'Transferred to Applicant’s home Court',
                'Hearing fixed for first available date',
                'The D81 incomplete',
                'Respondent – independent legal advice',
                'Pension annex',
                'Insufficient information provided – E',
                'Insufficient information provided – D',
                'Insufficient information provided – C',
                'Insufficient information provided – B',
                'Insufficient information provided – A'
              ],
              'orderRefusalOther': 'Aut et soluta quam a',
              'orderRefusalJudge': 'Recorder',
              'orderRefusalJudgeName': 'Blanditiis sint adip',
              'orderRefusalDate': null,
              'orderRefusalAddComments': 'Id magnam amet dol'
            }
          }
        ],
        'orderRefusalPreviewDocument': {
          'document_url': 'http://dm-store-aat.service.core-compute-aat.internal/documents/67e6986f-36e8-4e4d-9267-eefbb339604d',
          'document_filename': 'GeneralOrder.pdf',
          'document_binary_url': 'http://dm-store-aat.service.core-compute-aat.internal/documents/67e6986f-36e8-4e4d-9267-eefbb339604d/binary'
        }
      }
    }, 
    'Approve Application': {
      id: '',
      data: {
        'orderDirectionAbsolute': 'Yes',
        'servePensionProvider': 'No',
        'orderDirectionJudge': 'Her Honour Judge',
        'orderDirectionJudgeName': 'WiseMan',
        'orderDirectionDate': '2019-10-10',
        'orderDirectionAddComments': 'Approved'
      }
    } 
  }
};





exports.default = consentedNextSteps;