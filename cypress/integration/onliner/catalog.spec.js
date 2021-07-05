import BasePage from '../../pages/basePage'
import {CONST} from '../../helpers/constHelper'
import CatalogPage from '../../pages/catalogPage'

const basePage = new BasePage()
const catalogPage = new CatalogPage()

describe('Catalog Onliner', () => {

  it('Go to catalog', () => {
    basePage.navigate('https://www.onliner.by/')
    basePage.openHeaderByName(CONST.HEADERS.CATALOG)
    cy.title().should('eq', 'Каталог Onliner')
  })

  it('Go to mobile phones', () => {
    catalogPage.goToMainCategoryByName(CONST.CATEGORIES.ELECTRONIC)
    catalogPage.goToSubCategoryByName(CONST.ELECTRONIC.PHONES)
    cy.title().should('contain', 'Товары в каталоге')
    const titleHeader = catalogPage.getPageTitleText()
    titleHeader.should('eq', 'Мобильные телефоны')
  })

  it('Set manufacturer to HONOR', () => {
    catalogPage.setManufacturerTo(CONST.MANUFACTURERS.HONOR)
    const headersArray = catalogPage.getAllHeadersItems()
    cy.wrap(headersArray).each(($el, index, $list) => {
      expect($el).to.include('HONOR')
    })
    catalogPage.goToNextItems()
    const headersArray2 = catalogPage.getAllHeadersItems()
    cy.wrap(headersArray2).each(($el, index, $list) => {
      expect($el).to.include('HONOR')
    })
  })

  it('Sort by most expensive', () => {
    catalogPage.changeSortTo(CONST.SORT.EXPENSIVE)
    const pricesArray = catalogPage.getAllPrices()
    const intsArray = catalogPage.getIntsFromArr(pricesArray)
    cy.wrap(intsArray).each(($el, index, $list) => {
      if (index < $list.length - 1) {
        expect($list[index]).to.gte($list[index + 1])
      }
    })
  })
})