import LandingPageMethods from '../../pageObjects/pageMethods/LandingPageMethods'
import InventoryPageMethods from '../../pageObjects/pageMethods/InventoryPageMethods'

describe('Login to SwagLabs',()=>{
    
    
    const landingPage = new LandingPageMethods()
    const inventoryPage = new InventoryPageMethods()

    it ('should launch swag Labs application',()=>{
        landingPage.launchSwagLabsApp()
    })

    it ('should have title Swag Labs',()=>{
        landingPage.verifyLandingPageTitle()
    })

    it ('should login',()=>{
        landingPage.login()
    })

     it ('should navigate to items page',()=>{
         inventoryPage.verifyIfInventoryPageIsDisplayed()
     })

})