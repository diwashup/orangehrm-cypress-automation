import{LoginPage}from './pages/login'
import{Addemployee}from './pages/addemployee'
/// <reference types="cypress" />

const login= new LoginPage()
const addemployee= new Addemployee()

describe('Add employee', () => {
    before(() => {
        login.visit()
        login.enterusername('Admin')
        login.enterpassword('admin123')
        login.clicklogin()
    })
    it('should add a new employee', () => {
        addemployee.navigateToAddEmployeePage()
        addemployee.enteremployeeDetails('Virat', 'Anushka', 'Kohli', '18')
        addemployee.enableLoginDetails()
        addemployee.enterLoginDetails('virushka', 'Esalacupnamdu1', 'Esalacupnamdu1')
        addemployee.selectStatus('Enabled')
        addemployee.clickSaveButton()
    
    })
})