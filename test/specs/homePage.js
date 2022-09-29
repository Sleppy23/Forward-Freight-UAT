const connectPopUp = require('../../Setup/connectTodayPopUp.po.js')
const homePagePo = require('../../Setup/homePage.po')

describe('forward freight website smoke test', () => {
  it('should load the home page', async () => {
    await browser.url(`https://forwardfreightlogistics.net/`)
    let mainLogo = $(
      '.u_1271573278.dmRespRow.dmDefaultListContentRow.fullBleedChanged.fullBleedMode.mini-header-show-row'
    )
    await expect(mainLogo).toBeExisting()
  })
  it('should verify connect today pop up opens', async () => {
    await connectPopUp.connectSelectors.connectTodayButton().click()
    await expect(
      connectPopUp.connectSelectors.connectWithUsTitle()
    ).toBeExisting()
  })

  it('should fill out pop up form', async () => {
    connectPopUp.fillOutConnectToday()
    await browser.pause(5000)
  })

  it('should click and verify instagram', async () => {
    homePagePo.verifyInstagram()
  })

  it('should click and verify Linkedin', async () => {
    homePagePo.verifyLinkedIn()
  })

  it('should click and verify facebook', async () => {
    homePagePo.verifyLinkedIn()
  })

  it('should click and verify twitter', async () => {
    
  })

})
