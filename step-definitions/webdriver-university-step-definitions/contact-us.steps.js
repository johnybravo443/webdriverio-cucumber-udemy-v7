import { Given, When, Then } from '@wdio/cucumber-framework'
import { CONTACT_US_SUCCESS_MSG, ERROR_ALL_FIELD_REQUIRED } from '../../enums-constants/constants'
import BasePage from '../../pageobjects/page'
import ContactUsPage from '../../pageobjects/webdriver-university-pageobjects/contact-us.page'

const basePage = new BasePage()
const contactUsPage = new ContactUsPage()

// ##########################################################################
// ########################## Step Definitions ##############################
// ##########################################################################

Given(/^I navigate to url (.+)$/, async (url) => {
    await basePage.navigateToUrlAsync(url)
})

Given(/^I am on ContactUs page$/, async () => {
    expect(await contactUsPage.isContactUsFormDisplayed()).toBeDisplayed()
})

Given(/^I enter the following contact details$/, async (table) => {
    let details = table.hashes()
    await contactUsPage.setFirstName(details[0].firstName)
    await contactUsPage.setLastName(details[0].lastName)
    await contactUsPage.setEmail(details[0].email)
    await contactUsPage.setComments(details[0].comments)
})

When(/^I click on submit$/, async () => {
    await contactUsPage.clickSubmit()
})

Then(/^The form is submitted successfully$/, async () => {
    await expect(await contactUsPage.contactSubmittedSuccessMsgLocator).toHaveText(CONTACT_US_SUCCESS_MSG)
    await contactUsPage.browserPauseAsync(2000)
})

Then(/^The form is not submitted successfully$/, async () => {
    await expect(await contactUsPage.isErrorMessageDisplayed()).toBeTruthy()
    await contactUsPage.browserPauseAsync(2000)
})

Then(/^Unsuccessful submission error message is displayed$/, async () => {
    await expect(await contactUsPage.unsuccessfulSubmitErrorMsgLocator).toHaveTextContaining(ERROR_ALL_FIELD_REQUIRED)
    await contactUsPage.browserPauseAsync(2000)
})