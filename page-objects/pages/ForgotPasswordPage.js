import { Selector, t } from 'testcafe'
import { ForgotPwd } from '../../webpage-Locators.json'


export default class ForgotPasswordPage {
    // constructor() {
    // this.signInButton=Selector('#signin_button')
    // this.forgotPwdLink=Selector('a').withText('Forgot your password ?')
    // this.emailTextBox=Selector('#user_email')
    // this.sendPwdButton=Selector('input[value="Send Password"]')
    // this.emailSentMsg=Selector('div')
    // }

    async forgotPwd(eMail) {
        await t
            .click(ForgotPwd.signInButton)
            .wait(1000)
            .click(ForgotPwd.forgotPwdLink)
            .typeText(ForgotPwd.emailTextBox, eMail, { paste: true })
            .click(ForgotPwd.sendPwdButton)
    }
}