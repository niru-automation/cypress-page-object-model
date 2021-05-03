import InventoryPageElements from '../pageElements/InventoryPageElements'

let value

export default class InventoryPageMethods{
    
    constructor(){
        globalThis.element = new InventoryPageElements()
    }    

    verifyIfInventoryPageIsDisplayed(){
        element.inventoryPageLogo().should('exist')
    }

    addItemToCart(item){
        value = element.inventoryItemNameLabel().contains(item).parent().parent()
        value.find('+div').contains('ADD TO CART').click()
        value.should('contain','REMOVE')
    }

    removeItemFromCart(item){
        value = element.inventoryItemNameLabel().contains(item).parent().parent()
        value.find('+div').contains('REMOVE').click()
        value.should('contain','ADD TO CART')
    }

}