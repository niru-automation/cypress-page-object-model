const appOR = require("../../objectRepository.json")
export default class LandingPageElements{    

    usernameTextField(){
        return cy.get(appOR.landingPageOR.login_username_TextField)
    }

    passwordTextField(){
        return cy.get(appOR.landingPageOR.login_password_TextField)
    }

    loginButton(){
        return cy.get(appOR.landingPageOR.login_button)
    }
}