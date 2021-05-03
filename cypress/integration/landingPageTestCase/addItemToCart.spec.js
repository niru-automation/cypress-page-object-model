import LandingPageMethods from '../../pageObjects/pageMethods/LandingPageMethods'
import InventoryPageMethods from '../../pageObjects/pageMethods/InventoryPageMethods'

describe('Add Item To Cart',()=>{

    
    const landingPage = new LandingPageMethods()
    const inventoryPage = new InventoryPageMethods()

    before(()=>{
        cy.fixture('items').then((data)=>{
            globalThis.data = data
        })
    })

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

     it ('should add item to cart',()=>{
        inventoryPage.addItemToCart(data.itemsValues.itemName)
    })

    it ('should remove item from cart',()=>{
        inventoryPage.removeItemFromCart(data.itemsValues.itemName)
    })

})