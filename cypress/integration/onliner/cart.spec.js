import BasePage from '../../pages/basePage'
import {CONST} from '../../helpers/constHelper'
import CatalogPage from '../../pages/catalogPage'

const basePage = new BasePage()
const catalogPage = new CatalogPage()

describe('Cart Onliner', () => {

  it('Go to catalog', () => {
    /*
    COMMAND DEMO
    */
    basePage.navigate('https://www.tut.by/')
    basePage.openHeaderByName(CONST.HEADERS.CATALOG)
    cy.title().should('eq', 'Каталог Onliner')
  })

  it('Go to playstations', () => {
    catalogPage.goToMainCategoryByName(CONST.CATEGORIES.ELECTRONIC)
    catalogPage.openMenuCategoryByName(CONST.MENU_CATEGORIES.VIDEO_GAMES)
    catalogPage.openItemMenuByName(CONST.VIDEO_GAMES.PLAYSTATION)
    const titleHeader = catalogPage.getPageTitleText()
    titleHeader.should('eq', 'Игровые приставки')
  })

  it('Add first item to cart', () => {
    catalogPage.openItemByNumber(1)
    catalogPage.addOrGoToCart()
    const cartText = catalogPage.addToCartText()
    cartText.should('eq', 'В корзине')
  })

  it('Go to cart and verify', () => {
    catalogPage.addOrGoToCart()
    const items = catalogPage.getCartItemsCount()
    items.should('eq', 1)
  })
})