export class LoginPage {
    usernamebox= ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    passwordbox= ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    loginbutton= ".oxd-button"

    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }
    enterusername(username){
        cy.get(this.usernamebox).type(username);
    }
    enterpassword(password){
        cy.get(this.passwordbox).type(password);
    }
    clicklogin(){
        cy.get(this.loginbutton).click();
    }
    //validateLoginSuccess() {
    //cy.url().should('include', '/dashboard');
    //} 
}