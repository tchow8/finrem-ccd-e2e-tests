function paymentPage() {

const I = this;
I.wait(2);
I.checkOption('input[id="helpWithFeesQuestion-No"]');
I.wait(2);
I.click('Continue');
I.wait(5);
}

module.exports = { paymentPage };