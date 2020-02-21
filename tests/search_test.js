import SearchPage from '../page-objects/pages/SearchPage';
import config from '../config.json'
import { Selector } from 'testcafe'
import { ClientFunction } from 'testcafe';


const searchPg = new SearchPage()

fixture('Search tests')
    .page(config.baseUrl)

//Search the website...
test("Search the website", async t => {
    await t.wait(1000)
   searchPg.performWebSearch("Banking")
    await t.wait(2000)
    // await t
    //     .typeText("form>input#searchTerm", "Banking", { paste: true })
    //     .pressKey('enter')
    //     .wait(1000)
    // //Print and click the links...
    // const elements = await searchPg.searchResults; // get multiple same results
    // const elementCount = await elements.count
    
    // for (let i = 0; i < elementCount; i++) {
    //     await t
    //         //.wait(1000)
    //         .click(Selector('div.top_offset>ul>li>a').nth(i))
    //         .wait(2000)
    //         const goBack = ClientFunction(() => window.history.back())
    //         await goBack();
    //     }
});