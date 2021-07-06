export class BaseElement {
  constructor ({ css, xpath }) {
    this.css = css
    this.xpath = xpath
    if (this.xpath) {
      this.element = cy.xpath(this.xpath)
    }
    if (this.css) {
      this.element = cy.get(this.css)
    }
  }

  click () {
    this.element.click()
  }

  fillText (text) {
    if (text) {
      this.element.type(text)
    }
  }

  fillTextWithClear (text) {
    this.element.type(`{selectall}{backspace}${text}`)
  }

  setStateCheckBox (state) {
    state ? this.element.check() : this.element.uncheck()
  }

  getElementText () {
    const test = this.element.invoke('text').then((text) => {
      return text
    })
    return test
  }

  getAllElementText () {
    const textArray = []
    this.element.each(($el) => {
      cy.wrap($el).invoke('text').then((text) => {
        textArray.push(text.trim())
      })
    })
    return textArray
  }
  getElementsCount() {
    return this.element.its('length')
  }
}