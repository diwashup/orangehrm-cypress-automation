
/// <reference types="cypress"/>

import { LoginPage } from './pages/login'
import { AdminPage } from './pages/Adminpage'

const login = new LoginPage()
const admin = new AdminPage()

describe('Add User Test Suite', () => {
  before(() => {
    login.visit()
    login.enterusername('Admin')
    login.enterpassword('admin123')
    login.clicklogin()
  });

  it('should search user successfully', () => {
    admin.navigateToUserManagement()
    admin.enterusername('virushka')
    admin.selectUserRole('ESS')
    admin.enteremployeename('Virat')
    admin.selectuserstatus('Enabled')
    admin.clicksearchbutton()
    // Verify the user is added
    admin.clickAddButtonf()
    admin.addselectUserRolef('Admin')
    admin.addemployeenameinputf('Admin')
    admin.addusernameinputf('Exxxxxxxxxample')
    admin.addselectstatusf('Enabled')
    admin.addpasswordinputf('Qw123123!@#')
    admin.clickSaveButtonf()
    
  });
});
