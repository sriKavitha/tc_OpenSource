import { Selector, t } from 'testcafe'
import { ClientFunction } from 'testcafe';
//import { searchPageLoc } from '../../webpage-Locators.json'
import { searchPageLoc } from '../../webpage-Locators.json'


export default class SearchPage {
    constructor() {
        this.searchTxtBox = Selector('#searchTerm')
        this.searchResults = Selector('.top_offset>ul>li>a')
        this.searchResults1 = Selector('.top_offset>ul>li').withText('Personal Banking')
        //   Selector('li').withText("Users and Roles")
        this.searchResultsText = Selector('div>h2')
    }

    async performWebSearch(txt) {

        await t
            .typeText(searchPageLoc.searchTextboxNavbar, "Banking", { paste: true })
            .pressKey('enter')
            .wait(1000)
            //Print and click the links...
            const elements =  await Selector('.top_offset>ul>li>a'); // get multiple same results
            const elementCount = await elements.count

            for (let i = 0; i < elementCount; i++) {
                await t.wait(3000)
                await t.click(searchPageLoc.searchResults.nth(i))
                //click('div.top_offset>ul>li>a.nth(2)')
                await t.wait(3000)
              //  const goBack = ClientFunction(() => window.history.back())
               // await goBack();
             }



    }
}