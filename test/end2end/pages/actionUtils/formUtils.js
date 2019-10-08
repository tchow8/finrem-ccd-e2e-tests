

function enterText(name,value){
  const I = this;

  I.fillField('//*[contains(@class ,"form-group")]//*[text() = "' + name + '"]/../../input', value);
}

function enterText2(name, value) {
  const I = this;
  
  I.fillField('//*[contains(@class,"case-field")]//*[text() = "' + name + '"]//ancestor::ccd-field-read/../following-sibling::div//input', value);
  
}


function select(name, value) {
  const I = this;

  I.waitForPage('//*[contains(@class ,"form-group")]//*[text() = "' + name + '"]/../select/option[text() = "'+value+'"]');
  I.selectOption('//*[contains(@class ,"form-group")]//*[text() = "' + name + '"]/../select', value);
}

function select2(name, value) {
  const I = this;

  I.waitForPage('//ccd-write-complex-type-field//ccd-field-write[not(@hidden)]//*[contains(text() ,"' + name +'")]//ancestor::*[contains(@class,"form-group")][1]//select/option[contains(text(),"'+value+'")]');
  I.selectOption('//ccd-write-complex-type-field//ccd-field-write[not(@hidden)]//*[contains(text() ,"'+name+'")]//ancestor::*[contains(@class,"form-group")][1]//select', value);
}


function childSelect(parent,name, value) {
  const I = this;

  I.waitForPage('//*[contains(@class ,"form-group")]//*[text() = "' + parent + '"]//ancestor::ccd-write-complex-type-field//ccd-field-write[not(@hidden)]//*[text() = "' + name + '"]/../select/option[text() = "' + value + '"]');
  I.selectOption('//*[contains(@class ,"form-group")]//*[text() = "' + parent + '"]//ancestor::ccd-write-complex-type-field//ccd-field-write[not(@hidden)]//*[text() = "' + name + '"]/../select', value);
}

function findAddress(name,value){
  const I = this;

  I.fillField('//*[contains(@class ,"form-group")]//*[text() = "' + name + '"]/../../input', value);
  I.click('//*[contains(@class ,"form-group")]//*[text() = "' + name + '"]/../../button');

}

function enterDate(name, value) {
  const I = this;

  let date = value.split('-'); 
  I.fillField('//*[contains(@class,"form-group")]//fieldset//legend/span[text() = "' + name + '"]/../..//*[contains(@class,"form-group-day")]/input', date[0]);
  I.fillField('//*[contains(@class,"form-group")]//fieldset//legend/span[text() = "' + name + '"]/../..//*[contains(@class,"form-group-month")]/input', date[1]);
  I.fillField('//*[contains(@class,"form-group")]//fieldset//legend/span[text() = "' + name + '"]/../..//*[contains(@class,"form-group-year")]/input', date[2]);

}

function enterDate2(name, value) {
  const I = this;

  let date = value.split('-');

  I.fillField('//*[contains(@class,"case-field")]//*[text() = "' + name + '"]//ancestor::ccd-field-read/../following-sibling::div//*[contains(@class,"form-group-day")]//input', date[0]);
  I.fillField('//*[contains(@class,"case-field")]//*[text() = "' + name + '"]//ancestor::ccd-field-read/../following-sibling::div//*[contains(@class,"form-group-month")]//input', date[1]);
  I.fillField('//*[contains(@class,"case-field")]//*[text() = "' + name + '"]//ancestor::ccd-field-read/../following-sibling::div//*[contains(@class,"form-group-year")]//input', date[2]);


}




function selectFile(name, file){
  const I = this;


  I.attachFile('//*[contains(@class,"form-group")]//*[text() = "' + name+'"]/../..//input[@type = "file"]',file);

}

function selectRadio(name, value){
  const I = this;

  I.checkOption('//fieldset//*[contains(@class,"case-field") ]//*[text() = "' + name+'"]//ancestor::fieldset//*[contains(@class,"multiple-choice")]//*[text() = "'+value+'"]//ancestor::*[contains(@class,"multiple-choice")]//input');
}

module.exports = {
  selectRadio, selectFile, enterDate, enterDate2, findAddress, select, select2, enterText, enterText2, childSelect
};