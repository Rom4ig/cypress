import BasePage from './basePage'
import {BaseElement} from '../elements/baseElement'

class ServicePage extends BasePage {
  elements = {
    getCheckBoxByText (text) {
      return new BaseElement({ xpath: `//ul//label[contains(., '${text}')]` })
    },
    getServiceItems () {
      return new BaseElement({ css: `.service-offers__item` })
    },
    getServiceImages () {
      return new BaseElement({ css: `.service-offers__image` })
    },
  }

  setStatusTo (manufacturer) {
    this.elements.getCheckBoxByText(manufacturer).click()
    cy.wait(2000)
    //this.elements.getCheckBoxByText(manufacturer).setCheckBox(true)
  }
  getServicesCount () {
    return this.elements.getServiceItems().getElementsCount()
  }
  getAllServicesText() {
    return this.elements.getServiceItems().getAllElementText()
  }
  getAllServicesImagesCount() {
    return this.elements.getServiceImages().getElementsCount()
  }
}

export default ServicePage