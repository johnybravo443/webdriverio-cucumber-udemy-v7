import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

// (\w+)
When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
    await browser.pause(2000)
});

When(/^I login with following user detail$/, async (table) => {
    let details = table.hashes()
    console.log(`username is -> ${details[0].username}`)
    console.log(`password is -> ${details[0].password}`)
    await $('#username').setValue(details[0].username);
    await $('#password').setValue(details[0].password);
    await $('button[type="submit"]').click();
});
When(/^I login with details$/, async (table) => {
    let details = table.rowsHash()
    console.log(`username is -> ${details.username}`)
    console.log(`password is -> ${details.password}`)
    await $('#username').setValue(details.username);
    await $('#password').setValue(details.password);
    await $('button[type="submit"]').click();
});