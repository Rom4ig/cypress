import BasePage from '../../pages/basePage'
import {CONST} from '../../helpers/constHelper'
import LoginPage from '../../pages/loginPage'

const basePage = new BasePage()
const loginPage = new LoginPage()

describe('Login Onliner', () => {

  it('Go to register page', () => {
    basePage.navigate('https://www.onliner.by/')
    basePage.goToLogin()
    loginPage.goToRegister()
    const titleHeader = loginPage.getPageTitleText()
    titleHeader.should('contain', 'Регистрация')
  })

  it('Invalid email', () => {
    loginPage.register({ email: 'kek' })
    let messages = loginPage.getErrorMessages()
    cy.wrap(messages).should('include', 'Некорректный e-mail')
  })

  it('Invalid password', () => {
    loginPage.register({ password: 'kek' }, true)
    let messages = loginPage.getErrorMessages()
    cy.wrap(messages).should('include', 'Пароль должен быть от 8 до 64 символов')
  })

  it('Invalid repeat password', () => {
    loginPage.register({ repeat: 'lol' })
    let messages = loginPage.getErrorMessages()
    cy.wrap(messages).should('include', 'Пароли не совпадают')
  })
})