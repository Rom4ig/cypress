Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click()
})

Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  const env = Cypress.env('ENV')

  if (env === 'PRODUCTION') {
    url = 'https://onliner.by/'
  }
  return originalFn(url, options)
})
