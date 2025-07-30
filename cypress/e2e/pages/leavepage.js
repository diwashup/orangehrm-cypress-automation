export class LeavePage {
    clickleave= ':nth-child(3) > .oxd-main-menu-item'

    //Locators for form fill to search leave list
    fillfromdate=':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    filltodate=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    leavestatus='.oxd-multiselect-wrapper > .oxd-select-text'
    leaveType=':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    EmployeeName='.oxd-autocomplete-text-input > input'
    subunit=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    searchbutton='.oxd-button--secondary'
    includepastemployeeslider='.oxd-switch-input'

    

    //methods
    clickleavebutton() {
        cy.get(this.clickleave).click()
        
    }
    searchleavelist(fromDate, toDate, leaveStatus, leaveType, employeeName, subUnit) {
        cy.get(this.fillfromdate).type(fromDate)
        cy.get(this.filltodate).type(toDate)
        cy.wait(2000)
        cy.get(this.leavestatus).click()
        cy.get('.oxd-select-dropdown > *').contains(leaveStatus).click()
        
        cy.get(this.leaveType).click()
        cy.get('.oxd-select-wrapper-dropdown> *').contains(leaveType).click()
        cy.wait(2000)
        cy.get(this.EmployeeName).type(employeeName)
        cy.get(this.subunit).click()
        cy.get('.oxd-select-dropdown > *').contains(subUnit).click()
        cy.wait(2000)
        cy.get(this.includepastemployeeslider).click()
        cy.get(this.searchbutton).click()
        
    }
    // clickapplyleave() {
    //     cy.get('.oxd-topbar-body-nav > ul').contains('Apply').click()
    // }



}