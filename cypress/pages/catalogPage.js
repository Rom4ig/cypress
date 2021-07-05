import BasePage from './basePage'
import {BaseElement} from '../elements/baseElement'

class CatalogPage extends BasePage {
  elements = {
    getMainCategoryByNameButton (category) {
      return new BaseElement({
        xpath: `//li[contains(.,'${category}')]`
      })
    },
    getSubCategoryByNameButton (category) {
      return new BaseElement({ xpath: `//h3[contains(.,'${category}')]` })
    },
    getSortButton () {
      return new BaseElement({ css: `.schema-order__link` })
    },
    getSortOption (option) {
      return new BaseElement({ xpath: `//span[contains(.,'${option}')]` })
    },
    getCheckBoxByText (text) {
      return new BaseElement({ xpath: `//ul//label[contains(., '${text}')]//span[@class='i-checkbox']` })
    },
    getPricesLabel () {
      return new BaseElement({ css: `.schema-product__price-group .schema-product__price-value.schema-product__price-value_primary` })
    },
    getHeaderItem () {
      return new BaseElement({ xpath: `//div[not (contains(., 'Реклама'))]//div[@class='schema-product__title']//span[@data-bind='html: product.extended_name || product.full_name']` })
    },
    getNextItemsLabel () {
      return new BaseElement({ css: `.schema-pagination__main` })
    },
    getPageTitleLabel () {
      return new BaseElement({ css: `.schema-header__title` })
    },
    getMenuCategoryByName (name) {
      return new BaseElement({ xpath: `//div[@class='catalog-navigation-list__aside-title'][contains(.,'${name}')]` })
    },
    getMenuItemByName (name) {
      return new BaseElement({ xpath: `//div[contains(@style,'display: block')]//a[@class='catalog-navigation-list__dropdown-item'][contains(.,'${name}')]` })
    },
    getItemByNumber (number) {
      return new BaseElement({ xpath: `(//div[@class='schema-product__title'])[${number}]` })
    },
    getAddToCartButtonByNumber (number) {
      return new BaseElement({ xpath: `(//div[@class='product-aside__item-i'])[${number}]//a[contains(@class,'product-aside__item-button')][2]` })
    },
    getCartItems (){
      return new BaseElement({ css: `.cart-form__offers-item.cart-form__offers-item_secondary` })
    }
  }

  goToMainCategoryByName (category) {
    this.elements.getMainCategoryByNameButton(category).click()
  }

  goToSubCategoryByName (category) {
    this.elements.getSubCategoryByNameButton(category).click()
  }

  changeSortTo (sort) {
    this.elements.getSortButton().click()
    this.elements.getSortOption(sort).click()
    cy.wait(1000)
  }

  setManufacturerTo (manufacturer) {
    this.elements.getCheckBoxByText(manufacturer).click()
    cy.wait(1000)
    //this.elements.getCheckBoxByText(manufacturer).setCheckBox(true)
  }

  getAllPrices () {
    return this.elements.getPricesLabel().getAllElementText()
  }

  getAllHeadersItems () {
    return this.elements.getHeaderItem().getAllElementText()
  }

  goToNextItems () {
    this.elements.getNextItemsLabel().click()
  }

  getPageTitleText () {
    return this.elements.getPageTitleLabel().getElementText()
  }

  openMenuCategoryByName (name) {
    this.elements.getMenuCategoryByName(name).click()
  }

  openItemMenuByName (name) {
    this.elements.getMenuItemByName(name).click()
  }

  openItemByNumber (number) {
    this.elements.getItemByNumber(number).click()
  }

  addOrGoToCart (number = 1) {
    this.elements.getAddToCartButtonByNumber(number).click()
  }

  addToCartText (number = 1) {
    return this.elements.getAddToCartButtonByNumber(number).getElementText()
  }

  getCartItemsCount () {
    return this.elements.getCartItems().getElementsCount()
  }
}

export default CatalogPage