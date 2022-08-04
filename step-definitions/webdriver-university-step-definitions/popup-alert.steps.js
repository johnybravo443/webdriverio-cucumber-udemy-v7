import { PopupAlerts } from '../../enums-constants/enums'
import { Given, When, Then } from "@wdio/cucumber-framework";
import { POPUP_ALERT_PAGE_HEADER, POPUP_ALERT_MODEL_WINDOW_HEADER, POPUP_ALERT_TEXT } from "../../enums-constants/constants";
import PopUpAlertPage from '../../pageobjects/webdriver-university-pageobjects/popup-alert.page'

const popUpAlertsPage = new PopUpAlertPage()

const confirmAlertText = 'You pressed OK!'
const cancelAlertText = 'You pressed Cancel!'

// ##########################################################################
// ########################## Step Definitions ##############################
// ##########################################################################

Given(/^I am on popup alerts page$/, async () => {
    await expect(await popUpAlertsPage.mainHeader).toBeDisplayed()
    await expect(await popUpAlertsPage.mainHeader).toHaveText(POPUP_ALERT_PAGE_HEADER)
})

When(/^I click on (.+) button$/, async (value) => {
    switch(value) {
        case PopupAlerts.JavaScriptAlert:
            await popUpAlertsPage.clickPopupOrAlert(PopupAlerts.JavaScriptAlert)
            await popUpAlertsPage.browserPauseAsync(3000)
            break
        case PopupAlerts.ModelPopup:
            await popUpAlertsPage.clickPopupOrAlert(PopupAlerts.ModelPopup)
            await popUpAlertsPage.browserPauseAsync(3000)
            break
        case PopupAlerts.JavaScriptConfirmBox:
            await popUpAlertsPage.clickPopupOrAlert(PopupAlerts.JavaScriptConfirmBox)
            await popUpAlertsPage.browserPauseAsync(3000)
            break
        default:
            throw new Error('no such popup exists')
    }
})

Then(/^I accept the alert$/, async () => {
    await popUpAlertsPage.acceptAlert()
    await popUpAlertsPage.browserPauseAsync(3000)
})

Then(/^I dismiss the alert$/, async () => {
    await popUpAlertsPage.dismissAlert()
    await popUpAlertsPage.browserPauseAsync(3000)
})

Then(/^The alert is open$/, async () => {
    expect(await popUpAlertsPage.isAlertOpen()).toBeTruthy()
})

Then(/^The alert is closed$/, async () => {
    expect(await popUpAlertsPage.isAlertOpen()).toBeFalsy()
})

Then(/^The Model Popup is open$/, async () => {
    await expect(await popUpAlertsPage.modelWindow).toBeDisplayed()
    await expect(await popUpAlertsPage.modelWindowHeader).toHaveText(POPUP_ALERT_MODEL_WINDOW_HEADER)
    await popUpAlertsPage.browserPauseAsync(2000)
})

Then(/^I close the Model Popup window$/, async () => {
    await popUpAlertsPage.closeWindowPopup()
})

Then(/^The Confirm Box is open$/, async () => {
    await expect(await popUpAlertsPage.getAlertText()).toEqual(POPUP_ALERT_TEXT)
})

Then(/^the correct confirm alert text is displayed on the UI$/, async () => {
    await expect(await popUpAlertsPage.getConfirmAlertText()).toEqual(confirmAlertText)
})

Then(/^the correct cancel alert text is displayed on the UI$/, async () => {
    await expect(await popUpAlertsPage.getConfirmAlertText()).toEqual(cancelAlertText)
})