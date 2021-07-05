import {BaseElement} from '../elements/baseElement'

class BasePage {

  elements = {
    getLoginButton () {
      return new BaseElement({ css: '.auth-bar__item--text' })
    },
    getHeaderButtonByName (name) {
      return new BaseElement({ xpath: `//a[contains(.,'${name}')][contains(@class,'b-main-navigation__link')]` })
    }
  }

  navigate (link) {
    cy.visit(link)
  }

  goToLogin () {
    this.elements.getLoginButton().click()
  }

  openHeaderByName (name) {
    this.elements.getHeaderButtonByName(name).click()
  }

  getIntsFromArr (arr) {
    let intsArr = []
    cy.wrap(arr).each(($el, index, $list) => {
      let result = $el.match(/\d+(\.\d+)?/g)
      result ? intsArr.push(parseInt(result.join(''))) : intsArr.push(0)
    })
    return intsArr
  }
}

export default BasePage