export class Addemployee{
    pimmenu=':nth-child(2) > .oxd-main-menu-item'
    addemployeebutton=':nth-child(3) > .oxd-topbar-body-nav-tab-item'
    firstnametextbox='.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    middlenametextbox=':nth-child(2) > :nth-child(2) > .oxd-input'
    lastnametextbox=':nth-child(3) > :nth-child(2) > .oxd-input'
    eidtextbox='.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    createlogindetailcheckbox='.oxd-switch-input'
    usernametextbox=':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    passwordtextbox='.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    confirmpasswordtextbox='.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    statusoptions=':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'
    savebutton='.oxd-button--secondary'
    
    //Methods
    navigateToAddEmployeePage() {
        cy.get(this.pimmenu).click()
        cy.get(this.addemployeebutton).click()
    }
    enteremployeeDetails(firstname, middlename, lastname, eid) {
        cy.get(this.middlenametextbox).type(middlename)
        cy.get(this.firstnametextbox).type(firstname)
        cy.get(this.lastnametextbox).type(lastname)
        cy.get(this.eidtextbox).clear().type(eid)
    }
    enableLoginDetails() {
        cy.get(this.createlogindetailcheckbox).click()
    }
    enterLoginDetails(username, password, confirmpassword) {
        cy.get(this.usernametextbox).type(username)
        cy.get(this.passwordtextbox).type(password) 
        cy.get(this.confirmpasswordtextbox).type(confirmpassword)
    }
    selectStatus(status) {
        cy.get(this.statusoptions).click()
            //.contains(status).click()
    }
    clickSaveButton() {
        cy.get(this.savebutton).click()
    }
    
}