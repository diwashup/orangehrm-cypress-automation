export class AdminPage {
  
  //Locators for click on adminmenu & usermanagement and seacrh user&admin
  adminMenu = ':nth-child(1) > .oxd-main-menu-item'
  userManagementMenu = '.--visited'
  unametextbox=':nth-child(2) > .oxd-input'
  userroledropdown='.oxd-select-wrapper'
  enteremployeenameinput='.oxd-autocomplete-text-input > input'
  statusdropdown=':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
  searchbutton='.oxd-form-actions > .oxd-button--secondary'

  // Locators for adding a new user(ESS/Admin)
  addbutton='.orangehrm-header-container > .oxd-button'
  adduserroledropdown=':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
  addemployeenameinput='.oxd-autocomplete-text-input > input'
  addusernameinput=':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
  addstatuschoicebox=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
  addpasswordinput='.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
  addconfirmpasswordinput=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
  savebutton='.oxd-button--secondary'
  confirmuseradded='.orangehrm-container'


  // Methods for navigating to User Management and searching for a user
  navigateToUserManagement() {
    cy.get(this.adminMenu).click()
    cy.get(this.userManagementMenu).click()
      .contains('li', 'Users')
      .click()

  }
  enterusername(username){
    cy.get(this.unametextbox).type(username)
  }
  selectUserRole(role) {
    cy.get(this.userroledropdown).eq(0).click()
      .contains(role).click()
  }
  enteremployeename(name){
  cy.get(this.enteremployeenameinput).type(name).wait(1000)
  cy.get('.oxd-autocomplete-dropdown')
    .contains(name)
    .click()
  }
  selectuserstatus(status){
    cy.get(this.statusdropdown).click().wait(1000)
    cy.get('.oxd-select-dropdown')
      .contains(status).click()
  }
  clicksearchbutton(){
    cy.get(this.searchbutton).click()
  }

  // Methods for adding a new user
  clickAddButtonf() {
    cy.get(this.addbutton).click()
  }
  addselectUserRolef(role) {
    cy.get(this.adduserroledropdown).click()
    cy.wait(1000)
    cy.get('.oxd-select-dropdown > *').contains(role).click()
  }
  addemployeenameinputf(name) {
    cy.get(this.addemployeenameinput).type(name)
    cy.wait(1000)
    cy.get('.oxd-autocomplete-dropdown > *').contains(name).click()
  }
  addusernameinputf(username) {
    cy.get(this.addusernameinput).type(username)
  }
  addselectstatusf(status) {
    cy.get(this.addstatuschoicebox).click()
    cy.get('.oxd-select-dropdown > *').contains(status).click()
  }
  addpasswordinputf(password) {
    cy.get(this.addpasswordinput).type(password)
    cy.get(this.addconfirmpasswordinput).type(password)
  }
  clickSaveButtonf() {
    cy.get(this.savebutton).click()
  }
  
  // Methods for searching a user and verifying in the table

}