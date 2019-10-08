
let caseSubmissionHwf = {
  'authorisationName': 'Teegan Olsen',
  'solicitorFirm': 'Consequatur Totam q',
  'authorisation2b': 'Consequatur dicta s',
  'authorisation3': '1978-07-10',
  'helpWithFeesQuestion': 'Yes',
  'HWFNumber': 'HWF22345',
  'orderSummary': {
    'PaymentReference': 'null',
    'PaymentTotal': '25500',
    'Fees': [
      {
        'value': {
          'FeeCode': 'FEE0229',
          'FeeAmount': '25500',
          'FeeDescription': 'Application for a financial order',
          'FeeVersion': '1'
        }
      }
    ]
  }
};

let caseSubmissionPBA = {
  'authorisationName': 'Uriah Bender',
  'solicitorFirm': 'Rem debitis ut optio',
  'authorisation2b': 'Senior',
  'authorisation3': '1982-03-13',
  'helpWithFeesQuestion': 'No',
  'PBANumber': 'PBA0066906',
  'PBAreference': 'Pba Reference for test',
  'amountToPay': '25500',
  'orderSummary': {
    'PaymentReference': 'null',
    'PaymentTotal': '25500',
    'Fees': [
      {
        'value': {
          'FeeCode': 'FEE0229',
          'FeeAmount': '25500',
          'FeeDescription': 'Application for a financial order',
          'FeeVersion': '1'
        }
      }
    ]
  }
};


const contestedNextSteps = {

  solicitor : {
    'Case Submission|HWF': {
      id: 'FR_applicationPaymentSubmission',
      data: caseSubmissionHwf
    },
    'Case Submission|PBA': {
      id: 'FR_applicationPaymentSubmission',
      data: caseSubmissionPBA 
    },
    'Submit Uploaded Case Files':{
      id: 'FR_submitUploadedCaseFiles',
      data: {}
    },
    'Upload Draft Order':{
      id: 'FR_uploadDraftOrder',
      data: {
        uploadPostHearingDraftOrder: [
          {
            id: null,
            value: {
              purposeOfDocument: 'Draft order',
              uploadDraftDocument: {
                document_url: 'http://dm-store-aat.service.core-compute-aat.internal/documents/082cf1bd-a529-45d2-b45c-c4b7f269b595',
                document_binary_url: 'http://dm-store-aat.service.core-compute-aat.internal/documents/082cf1bd-a529-45d2-b45c-c4b7f269b595/binary',
                document_filename: 'dummy.pdf'
              }
            }
          }
        ]
      }
    }
  },
  caseWorker : {
    'Issue Application': {
      id: 'FR_issueApplication',
      data: {
        'issueDate': '2019-10-10'   
      }
    },
    'Allocate to Judge': {
      id: 'FR_allocateToJudge',
      data :{} 
    },
    'Progress To Listing': {
      id: 'FR_progressToSchedulingAndListing',
      data:{} 
    },
    'Consent Order Payment': {
      id: 'FR_uploadConsentedOrderWithPayment',
      data:{} 
    },
    'Consent Order (No Payment)': {
      id: 'FR_uploadConsentedOrderNoPayment',
      data:{} 
    },
    'HWF Application Accepted': {
      id: 'FR_HWFDecisionMade',
      data: {} 
    },
    'Fee Account Debited': {
      id: 'FR_HWFFeeAccountDebited',
      data: {}
    }, 
    'Awaiting Payment Response': {
      id: 'FR_awaitingPaymentResponseFromHWF',
      data:{} 
    },
    'List for Hearing':{
      id: 'FR_addSchedulingListingInfo',
      data: {
        'timeEstimate': '10',
        'hearingDate': '2019-12-10',
        'hearingTime': '10',
        'regionListSL': 'london',
        'londonFRCListSL': 'cfc',
        'cfcCourtListSL': 'FR_s_CFCList_16'
      } 
    },
    'Consent Order Payment':{
      id : '',
      data: {
        'uploadConsentedOrder': {
          'document_url': 'http://dm-store-aat.service.core-compute-aat.internal/documents/640492d0-6dc0-40f0-94f0-9f65512d6c63',
          'document_binary_url': 'http://dm-store-aat.service.core-compute-aat.internal/documents/640492d0-6dc0-40f0-94f0-9f65512d6c63/binary',
          'document_filename': 'dummy.pdf'
        }
      }
    },
    'Assign To Judge':{
      id: '',
      data: {
        assignToJudgeReason: 'Draft consent order',
        assignToJudgeText: 'Test reason '
      }
    },
    'Upload Order': {
      id: '',
      data: {
        uploadOrder: []
      }
    }

  },
  judge : {
    'Give Allocation Directions':{
      id: 'FR_giveAllocationDirections',
      data: {
        'allocatedCourtListGA': {
          'region': 'london',
          'londonList': 'cfc',
          'cfcCourtList': 'FR_s_CFCList_16'
        },
        'applicationAllocatedTo': 'No',
        'caseAllocatedTo': 'Yes',
        'judgeAllocated': ['FR_judgeAllocatedList_3'],
        'judgeTimeEstimate': 'standardTime'
      }
    },
    'Solicitor To Draft Order':{
      id: 'FR_solicitorToDraftOrder',
      data: {
        attendingCourtWithAssistance: 'Test auto setup attendingCourtWithAssistance',
        attendingCourtWithArrangement: 'Test auto setup attendingCourtWithArrangement' 
      }
    },
    'Judge To Draft Order': {
      id: 'FR_judgeToDraftOrder',
      data: {
        attendingCourtWithAssistance: 'Test auto setup attendingCourtWithAssistance',
        attendingCourtWithArrangement: 'Test auto setup attendingCourtWithArrangement'
      }
    }
    ,
    'General Order':{
      id: '',
      data: {
        'generalOrders':[]
      }
    }
    ,
    'Application Not Approved': {
      id: '',
      data: {
        applicationNotApproved:[]
      }
    }
  }
};





exports.default = contestedNextSteps;