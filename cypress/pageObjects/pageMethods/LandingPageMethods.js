import LandingPageElements from '../pageElements/LandingPageElements'

export default class LandingPageMethods{
    constructor(){
        globalThis.element1 = new LandingPageElements()
    }
    launchSwagLabsApp(){
        cy.visit('/')
    }

    verifyLandingPageTitle(){
        cy.title().should('include', 'Swag Labs')
    }

    login(){
        element1.usernameTextField().type('standard_user')
        element1.passwordTextField().type('secret_sauce')
        element1.loginButton().click()
    }

}