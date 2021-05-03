
const appOR = require("../../objectRepository.json")
export default class InventoryPageElements{

    inventoryPageLogo(){
        return cy.get(appOR.inventoryPageOR.logo)
    }

    inventoryItemNameLabel(){
        return cy.get(appOR.inventoryPageOR.item_name_Label)
    }

    inventoryItemSiblingDiv(){
        return find(appOR.inventoryPageOR.item_SiblingDivComponent)
    }

    inventoryItemAddToCartButton(){
        return contains(appOR.inventoryPageOR.Item_AddToCart_Button)
    }

    inventoryItemRemoveButton(){
        return cy.get(appOR.inventoryPageOR.Item_Remove_Button)
    }

}