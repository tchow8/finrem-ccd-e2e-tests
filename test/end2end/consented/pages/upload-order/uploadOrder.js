function uploadOrder(){
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Upload Order');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.click('Add new');
  I.wait(10);
  I.selectOption('select[id=uploadOrder_0_DocumentType]', 'generalOrder');
  I.wait(10);
  I.fillField('#uploadOrder_0_DocumentEmailContent', 'Testing the upload order');
  I.wait(10);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(10);
  I.fillField('input[id="uploadOrder_0_DocumentDateAdded-day"]', '10');
  I.wait(2);
  I.fillField('input[id="uploadOrder_0_DocumentDateAdded-month"]', '2');
  I.wait(2);
  I.fillField('input[id="uploadOrder_0_DocumentDateAdded-year"]', '2019');
  I.wait(10);
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(10);
}


module.exports = { uploadOrder };