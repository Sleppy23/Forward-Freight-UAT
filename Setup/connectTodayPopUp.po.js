class connectToday {
   get connectSelectors() {
    const selectors = {
      connectTodayButton: () => $( '.u_1974837788.align-center.dmButtonLink.dmWidget.dmWwr.default.dmOnlyButton.dmDefaultGradient'),
      connectWithUsTitle: () => $('.m-font-size-30.font-size-40'),
      customerName: () => $('[name="dmform-0"]'),
      phoneNumber: () => $('[name="dmform-4"]'),
      email: () => $('[name="dmform-1"]'),
      businessName: () => $('[name="dmform-5"]'),
      address: () => $('[name="dmform-6"]'),
      message: () => $('[name="dmform-3"]'),
      closeIcon: () => $('.dmPopupClose.dm-common-icons-close.oneIcon')
    }
    return selectors;
  }

customerInfo = {
    customerName: "Alyssa" + " " + Date.now() ,
    customerNumber: "222-222-222",
    customerEmail: "email@example.com",
    customerBuisnessName: "incorporation",
    customerAddress: "1234 denver st.",
    customerMessage: "notes"
}


  async fillOutConnectToday(){
    let customer = this.customerInfo
    browser.pause(10000)
    await this.connectSelectors.customerName().setValue(customer.customerName)
    await this.connectSelectors.email().setValue(customer.customerEmail)
    await this.connectSelectors.businessName().setValue(customer.customerBuisnessName)
    await this.connectSelectors.address().setValue(customer.customerAddress)
    await (await this.connectSelectors.phoneNumber()).setValue(customer.customerNumber)
    await (await this.connectSelectors.message()).setValue(customer.customerMessage) 
    browser.pause(10000)
    await this.connectSelectors.closeIcon().click()
  }
}
module.exports = new connectToday();
