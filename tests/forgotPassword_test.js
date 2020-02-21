import ForgotPasswordPage from '../page-objects/pages/ForgotPasswordPage'
import { ForgotPwd } from '../webpage-Locators.json'

import config from '../config.json';
import { Selector } from 'testcafe'


const forgotPwdPg = new ForgotPasswordPage()

fixture('User gets an email for Forgotten Password')
        .page(config.baseUrl);

test.skip("Email sent to user email address", async t => {
        forgotPwdPg.forgotPwd("sai@sai.com")
        await t
                .wait(2000)
                .expect(Selector(ForgotPwd.emailSentMsg).innerText).contains("sai@sai.com")
});