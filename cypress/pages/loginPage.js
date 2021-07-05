import BasePage from './basePage'
import {BaseElement} from '../elements/baseElement'

class LoginPage extends BasePage {
  elements = {
    getRegisterButton () {
      return new BaseElement({ xpath: `//a[contains(.,'Зарегистрироваться на Onliner')]` })
    },
    getEmailInput () {
      return new BaseElement({ xpath: `//input[contains(@placeholder, 'Ваш')]` })
    },
    getPasswordInput () {
      return new BaseElement({ xpath: `//input[contains(@placeholder, 'Придумайте')]` })
    },
    getRepeatPasswordInput () {
      return new BaseElement({ xpath: `//input[contains(@placeholder, 'Повторите')]` })
    },
    getRegisterSubmitButton () {
      return new BaseElement({ css: `button` })
    },
    getErrorMessagesLabels () {
      return new BaseElement({ css: `.auth-form__description_error` })
    },
    getPageTitleLabel () {
      return new BaseElement({ css: `.auth-form__title` })
    }
  }

  register (user, isSubmit = false) {
    this.elements.getEmailInput().fillText(user.email)
    this.elements.getPasswordInput().fillText(user.password)
    this.elements.getRepeatPasswordInput().fillText(user.repeat)
    if (isSubmit) {
      this.elements.getRegisterSubmitButton().click()
    }
    cy.wait(500)
  }

  goToRegister () {
    this.elements.getRegisterButton().click()
  }

  getErrorMessages () {
    return this.elements.getErrorMessagesLabels().getAllElementText()
  }

  getPageTitleText () {
    return this.elements.getPageTitleLabel().getElementText()
    //this.elements.getCheckBoxByText(manufacturer).setCheckBox(true)
  }
}

export default LoginPage