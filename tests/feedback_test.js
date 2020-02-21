import FeedbackPage from '../page-objects/pages/FeedbackPage'
import config from '../config.json'
import {feedBack} from '../webpage-Locators.json'
import {Selector} from 'testcafe'


const feedbackPg = new FeedbackPage()

fixture('Feedback Tests')
    .page(`${config.baseUrl}`)
    
//Submit feedback form...
test.skip("Submit form feedback", async t => {
    feedbackPg.submitFeedback("name1", "email1","subject1","comment1")
    await t.wait(2000)
    await t.expect(Selector(feedBack.feedbackTitle).innerText).contains("Feedback")
           .expect(Selector(feedBack.feedbackTab).exists).notOk()
           .wait(1000)
});
