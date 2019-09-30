var hwfCaseSubmissionRequest = {
  'data': {
    'authorisationName': 'Beck Richmond',
    'authorisationFirm': 'Et rerum minus tempo',
    'authorisation2b': 'Similique ea qui sae',
    'authorisation3': '2019-10-04',
    'helpWithFeesQuestion': 'Yes',
    'HWFNumber': 'HWF22345',
    'orderSummary': {
      'PaymentReference': 'null',
      'PaymentTotal': '5000',
      'Fees': [
        {
          'value': {
            'FeeCode': 'FEE0228',
            'FeeAmount': '5000',
            'FeeDescription': 'Application (without notice)',
            'FeeVersion': '1'
          }
        }
      ]
    }
  },
  'event': {
    'id': 'FR_applicationPaymentSubmission',
    'summary': '',
    'description': ''
  },
  'event_token': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3aDAybWhqY2NjaXFsb2hoNjVybmdzbHAydSIsInN1YiI6Ijk2ODM0IiwiaWF0IjoxNTY5MzIyNTUzLCJjYXNlLWlkIjoiNzg2NzIxIiwiZXZlbnQtaWQiOiJGUl9hcHBsaWNhdGlvblBheW1lbnRTdWJtaXNzaW9uIiwiY2FzZS10eXBlLWlkIjoiRmluYW5jaWFsUmVtZWR5TVZQMiIsImp1cmlzZGljdGlvbi1pZCI6IkRJVk9SQ0UiLCJjYXNlLXN0YXRlIjoiY2FzZUFkZGVkIiwiY2FzZS12ZXJzaW9uIjoiNjRjZTVlZjFkODc3OGM0MGZkYjZkOGQ4MTM2NWRkZjBlZGViZmMzZiIsImVudGl0eS12ZXJzaW9uIjowfQ.CLhSzLNNbVhX9t-u8dKxrOTTVYyrlFrH9NLFXt7tGzc',
  'ignore_warning': false
};

exports.default = hwfCaseSubmissionRequest; 