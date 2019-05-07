
function section4b() {
  const I = this;
  I.wait(5);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(10);
  I.click('Continue');
  I.wait(5);

}

module.exports = { section4b };