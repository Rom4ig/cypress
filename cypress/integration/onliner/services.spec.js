import BasePage from '../../pages/basePage'
import {CONST} from '../../helpers/constHelper'
import ServicePage from '../../pages/servicePage'

const basePage = new BasePage()
const servicePage = new ServicePage()

describe('Services Onliner', () => {

  it('Go to services', () => {
    basePage.navigate('https://www.onliner.by/')
    basePage.openHeaderByName(CONST.HEADERS.SERVICE)
    cy.title().should('eq', 'Заказы на услуги')
  })

  it('Sort by active', () => {
    servicePage.setStatusTo(CONST.STATUSES.ACTIVE)
    const servicesTextArray = servicePage.getAllServicesText()
    cy.wrap(servicesTextArray).each(($el, index, $list) => {
      expect($el).to.include('Не выполнен')
    })
  })

  it('Verify count of services', () => {
    const servicesCount = servicePage.getServicesCount()
    servicesCount.should('be.eq', 50)
  })

  it('Verify image of services', () => {
    const servicesImagesCount = servicePage.getAllServicesImagesCount()
    servicesImagesCount.should('be.eq', 50)
  })
})