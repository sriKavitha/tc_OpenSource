import LoginPage from '../page-objects/pages/LoginPage';
import config from '../config.json';
import { LogIn } from '../webpage-Locators.json'
import { Selector } from 'testcafe'

const loginPg = new LoginPage()

fixture('Login Tests')
    .page(`${config.baseUrl}`)


//Login using Invalid credentials...
test.skip("Login with Invalid Credentials", async t => {
    loginPg.login("Invalid username", "invalid password")
    await t
        .wait(1000)
        .expect(Selector(LogIn.loginError).innerText).contains("Login and/or password are wrong.")
        .expect(Selector(LogIn.homePageSignInBtn).exists).notOk()
});

//Login using Valid credentials....    
test.skip("Login with Valid Credentials", async t => {
    loginPg.login(config.uName, config.pWord)
    await t
        .wait(3000)
        .expect(Selector(LogIn.loginSuccessful).innerText).contains("Account Summary")
        .expect(Selector(LogIn.homePageSignInBtn).exists).notOk()
});


//Login using Valid credentials.... and logout from application    
test.skip("Login with Valid Credentials and Logout from the application", async t => {
    loginPg.login(config.uName, config.pWord)
    await t
        .wait(1000)
        .expect(Selector(LogIn.loginSuccessful).innerText).contains("Account Summary")
        .click(LogIn.logOutIcon)
        .click(LogIn.logOutIconButton)
});
