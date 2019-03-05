function optionsPage(){
    const I = this;
    I.wait(10);
    I.selectOption('select[id="next-step"]', 'Case Submission');
    I.wait(5);
    I.click('Go');
    I.wait(5);
}

module.exports = { optionsPage };