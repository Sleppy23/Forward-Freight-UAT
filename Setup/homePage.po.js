const { verify } = require('crypto')

class homePage {
  get homePageSelectors() {
    const selectors = {
      connectTodayButton: () => $('.u_1974837788.align-center.dmButtonLink.dmWidget.dmWwr.default.dmOnlyButton.dmDefaultGradient'),
      instagramId: () => $('._aacl _aacs _aact _aacx _aada'),
      instagramLink: () => $('.dmSocialInstagram.dm-social-icons-instagram.oneIcon.socialHubIcon.style5' ),
      linkedInModal: () => $('.modal__main.w-full'),
      linkedInLink: () => $('.dmSocialLinkedin.icon-linkedin.oneIcon.socialHubIcon.style5'),
      linkedInBuisnessName: () => $('top-card-layout__title.font-sans.text-lg papabear:text-xl.font-bold.leading-open.text-color-text.mb-0' ),
      facebookLink: () => $('.dmSocialFacebook.dm-social-icons-facebook.oneIcon.socialHubIcon.style5'),
      facebookCompanyName: () => $('.mfn553m3.th51lws0')
    }
    return selectors
  }

  async verifyInstagram() {
    await this.homePageSelectors.instagramLink().click()
    await expect(this.homePageSelectors.instagramId().toBeExisting())
    await browser.back()
  }

  async verifyLinkedIn() {
    await this.homePageSelectors.linkedInLink().click()
    await expect (browser.url().toHaveUrlContaining("forward"))
    await browser.back()
  }

  async verifyFacebook() {
    await this.homePageSelectors.facebookLink().click()
    await expect(this.homePageSelectors.facebookCompanyName().toBeExisitng())
    await browser.back()
}
}
module.exports = new homePage()
