function optionsPage(){
    const I = this;
    I.wait(10);
    I.selectOption('select[id="next-step"]', 'Case Submission');
    I.wait(10);
    I.click('Go');
    I.wait(10);
}

module.exports = { optionsPage };