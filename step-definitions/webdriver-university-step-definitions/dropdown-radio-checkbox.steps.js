import { Given, When, Then } from '@wdio/cucumber-framework'
import { CheckboxesOptions, Radiobuttons } from '../../enums-constants/enums'
import DropdownRadioCheckboxPage from "../../pageobjects/webdriver-university-pageobjects/dropdown-radio-checkbox.page";

const dropdownRadioCheckboxPage = new DropdownRadioCheckboxPage()

// ##########################################################################
// ########################## Step Definitions ##############################
// ##########################################################################

Given(/^I select (.+) from dropdown one$/, async (value) => {
    await dropdownRadioCheckboxPage.selectFromDropdownOne(value)
    await dropdownRadioCheckboxPage.browserPauseAsync(2000)
})

Given(/^I select (.+) from dropdown two$/, async (value) => {
    await dropdownRadioCheckboxPage.selectFromDropdownTwo('JUnit')
    await dropdownRadioCheckboxPage.browserPauseAsync(2000)
})

Given(/^I select (.+) from dropdown three$/, async (value) => {
    await dropdownRadioCheckboxPage.selectFromDropdownThree('CSS')
    await dropdownRadioCheckboxPage.browserPauseAsync(2000)
})

Given(/^I am on dropdown menu, checkboxes and radio buttons page$/, async () => {
    await expect(dropdownRadioCheckboxPage.navbarHeader).toBeDisplayed()
})

When(/^I select checkbox (.+)$/, async (value) => {
    await dropdownRadioCheckboxPage.asyncSelectCheckbox(value)
})

Then(/^Checkbox (.+) is checked$/, async (value) => {
    switch(value) {
        case CheckboxesOptions.Option1:
            await expect(await dropdownRadioCheckboxPage.option1Checkbox).toBeChecked()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        case CheckboxesOptions.Option2:
            await expect(await dropdownRadioCheckboxPage.option2Checkbox).toBeChecked()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        case CheckboxesOptions.Option3:
            await expect(await dropdownRadioCheckboxPage.option3Checkbox).toBeChecked()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        case CheckboxesOptions.Option4:
            await expect(await dropdownRadioCheckboxPage.option4Checkbox).toBeChecked()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        default:
            throw new Error('No such checkbox checked')
    }
})

Then(/^Checkbox (.+) is unchecked$/, async (value) => {
    switch ( value ) {
        case CheckboxesOptions.Option1:
            await expect(await dropdownRadioCheckboxPage.option1Checkbox).not.toBeChecked()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        case CheckboxesOptions.Option2:
            await expect(await dropdownRadioCheckboxPage.option2Checkbox).not.toBeChecked()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        case CheckboxesOptions.Option3:
            await expect(await dropdownRadioCheckboxPage.option3Checkbox).not.toBeChecked()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        case CheckboxesOptions.Option4:
            await expect(await dropdownRadioCheckboxPage.option4Checkbox).not.toBeChecked()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        default:
            throw new Error('No such checkbox checked')
    }
})

When(/^I select radiobutton (.+)$/, async (value) => {
    await dropdownRadioCheckboxPage.selectRadiobutton(value)
})

Then(/^Radiobutton (.+) is checked$/, async (value) => {
    switch(value) {
        case Radiobuttons.Green:
            await expect(await dropdownRadioCheckboxPage.greenRadiobutton).toBeSelected()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        case Radiobuttons.Yellow:
            await expect(await dropdownRadioCheckboxPage.yellowRadiobutton).toBeSelected()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        case Radiobuttons.Purple:
            await expect(await dropdownRadioCheckboxPage.purpleRadiobutton).toBeSelected()
            await dropdownRadioCheckboxPage.browserPauseAsync(2000)
            break
        default:
            throw new Error('No such checkbox checked')
    }
})