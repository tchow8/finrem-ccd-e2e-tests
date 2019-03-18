function judgeApproveTabs() {

  const I = this;
  I.wait(10);
  I.click('Applicant');
  I.wait(1);
  I.click('Respondent');
  I.wait(1);
  I.click('Divorce');
  I.wait(1);
  I.click('Nature of Application');
  I.wait(1);
  I.click('Authorisation');
  I.wait(1);
  I.click('Application documents');
  I.wait(1);
  I.see('OnlineFormA.pdf');
  I.wait(5);
  I.click('Payment details');
  I.wait(1);
  I.click('Admin Notes');
  I.wait(1);
  I.click('Judiciary Outcome');
  I.wait(1);
  I.see('Order Direction');
  I.wait(5);
  I.click('Orders');
  I.wait(1);
  I.see('Upload Order 1');
  I.wait(5);
  I.click('Solicitor Response');
  I.wait(1);
  I.see('Respond To Order Documents 1');
  I.wait(5);
  I.click('Notes');
  I.wait(1);
  I.see('Notes 1');
  I.wait(10);


}

module.exports = { judgeApproveTabs };