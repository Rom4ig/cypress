import BasePage from '../../pages/basePage'
import {CONST} from '../../helpers/constHelper'
import ForumPage from '../../pages/forumPage'

const basePage = new BasePage()
const forumPage = new ForumPage()

describe('Forum Onliner', () => {

  it('Go to Forum', () => {
    basePage.navigate('https://www.onliner.by/')
    basePage.openHeaderByName(CONST.HEADERS.FORUM)
    cy.title().should('eq', 'Форум onliner.by - Главная страница')
  })

  it('Open newest', () => {
    forumPage.openNavigationHeaderByName(CONST.FORUM_HEADER.NEWEST)
    const forumTitle = forumPage.getPageTitleText()
    forumTitle.should('include', CONST.FORUM_HEADER.NEWEST)
  })

  it('Verify count of themes', () => {
    const themesCount = forumPage.getThemesCount()
    themesCount.should('eq', 50)
  })

  it('Open last page and verify dates', () => {
    forumPage.openLastPage()
    const timeArray = forumPage.getAllUpdateTimeText()
    const intsArray = forumPage.getIntsFromArr(timeArray)
    cy.wrap(intsArray).each(($el, index, $list) => {
      expect($el).to.lt(24)
    })
  })
})