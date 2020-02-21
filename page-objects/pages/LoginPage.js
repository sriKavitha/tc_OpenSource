import { Selector, t } from 'testcafe'
import {LogIn} from '../../webpage-Locators.json'

class LoginPage {
//     constructor() {
// //        this.homePageSignInBtn = Selector("#signin_button")
//         this.loginUName = Selector("#user_login")
//         this.loginPwd = Selector("#user_password")
//         this.rememberMe = Selector("#user_remember_me")
//         this.signInBtn = Selector(".btn.btn-primary")
//         this.loginSuccessful = Selector("#account_summary_tab")
//         this.logOutIcon=Selector('.dropdown-toggle>i.icon-user')
//         this.logOutIconButton=Selector('#logout_link')
//         this.loginError=Selector('.alert.alert-error')
//     }
    async login(usr, pwd) {
        await t
             .click(LogIn.homePageSignInBtn)
             .typeText(LogIn.loginUName, usr, { paste: true })
             .typeText(LogIn.loginPwd, pwd, { paste: true })
             .click(LogIn.signInBtn)
    }
}
export default LoginPage
