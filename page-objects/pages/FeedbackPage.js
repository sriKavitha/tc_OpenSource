import { Selector, t } from 'testcafe'
import {feedBack} from '../../webpage-Locators.json'

export default class FeedbackPage {
    constructor() {
        // this.feedbackTab = Selector("ul#pages-nav>li:nth-child(3)")
        // this.feedbackTitle = Selector("#feedback-title")
        // this.feedbackName = Selector("#name")   //Selector("#user_login")
        // this.feedbackEmail = Selector("#email")
        // this.feedbackSubject = Selector("#subject")
        // this.feedbackComment = Selector("#comment")
        // this.feedbackSubmit = Selector('.btn-signin.btn.btn-primary')
    }

    async submitFeedback(name, email, subject, comment) {
        await t
            .click(feedBack.feedbackTab)
            .typeText(feedBack.feedbackName, name, { paste: true })
            .typeText(feedBack.feedbackEmail, email, { paste: true })
            .typeText(feedBack.feedbackSubject, subject, { paste: true })
            .typeText(feedBack.feedbackComment, comment, { paste: true })
            .click(feedBack.feedbackSubmit)
        }

    
}

