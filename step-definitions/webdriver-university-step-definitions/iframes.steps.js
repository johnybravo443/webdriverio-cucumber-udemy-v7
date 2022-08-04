import { Given, When, Then } from '@wdio/cucumber-framework'
import { IFRAME_PAGE_HEADER, IFRAME_POPUP_DIALOG_TITLE } from '../../enums-constants/constants'
import IframePage from "../../pageobjects/webdriver-university-pageobjects/iframe.page"

const iframePage = new IframePage()

// ##########################################################################
// ########################## Step Definitions ##############################
// ##########################################################################

Given(/^I am on IFrames page$/, async ()=>  {
    await expect(await iframePage.navTitles[0]).toBeDisplayed()
    await expect(await iframePage.navTitles[0]).toHaveText(IFRAME_PAGE_HEADER)
})

When(/^I switch to iframe$/, async () => {
    await iframePage.switchToIFrame()
})

When(/^I click on Find out more$/, async () => {
    await iframePage.clickOnFindOutMore()
})

Then(/^popup dialog window is displayed$/, async () => {
    await expect(await iframePage.modelDialogWindow).toBeDisplayed()
    await expect(await iframePage.modelTitle).toHaveText(IFRAME_POPUP_DIALOG_TITLE)
    await iframePage.browserPauseAsync(2000)
})

Then(/^I close the popup dialog$/, async () => {
    await iframePage.closeModelDialog()
})

When(/^I click on navbar option (.+)$/, async (value) => {
    await iframePage.clickOptionOnNavbar(value)
})

Then(/^Special Offers page is displayed$/, async () => {
    await expect(await iframePage.ourProductsSpecialOffers).toBeDisplayed()
    await iframePage.browserPauseAsync(2000)
})