import BasePage from './basePage'
import {BaseElement} from '../elements/baseElement'

class ForumPage extends BasePage {
  elements = {
    getNavigationHeaderByText (text) {
      return new BaseElement({ xpath: `//span[@class='project-navigation__sign'][contains(.,'${text}')]` })
    },
    getPageTitleLabel () {
      return new BaseElement({ css: `h1` })
    },
    getAllThemes () {
      return new BaseElement({ xpath: `//ul[@class='b-list-topics']/li` })
    },
    getMaxPagination () {
      return new BaseElement({ xpath: `//div[@class='b-hdtopic']//ul[@class="pages-fastnav"]/li[last()-1]` })
    },
    getAllUpdateTime () {
      return new BaseElement({ css: `a.link-getlast` })
    }
  }

  openNavigationHeaderByName (name) {
    this.elements.getNavigationHeaderByText(name).click()
  }

  getPageTitleText () {
    return this.elements.getPageTitleLabel().getElementText()
  }

  getThemesCount () {
    return this.elements.getAllThemes().getElementsCount()
  }

  openLastPage() {
    this.elements.getMaxPagination().click()
  }
  getAllUpdateTimeText() {
    return this.elements.getAllUpdateTime().getAllElementText()
  }
}

export default ForumPage