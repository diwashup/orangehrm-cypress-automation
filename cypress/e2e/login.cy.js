/// <reference types="cypress"/>
import { LoginPage} from "./pages/login";
const login= new LoginPage();
describe('User login', () => {
  it('Login with correct values', () => {
    login.visit();
    login.enterusername('Admin');
    login.enterpassword('admin123');
    login.clicklogin();
    // login.validateLoginSuccess();
  })
  it('Login with correct username incorrect password', () => {
    login.visit();
    login.enterusername('Admin');
    login.enterpassword('adminss123');
    login.clicklogin();
    // login.validateLoginSuccess();
  })
  it('Login with incorrect username and correct password', () => {
    login.visit();
    login.enterusername('Admin1');
    login.enterpassword('admin123');
    login.clicklogin();
    // login.validateLoginSuccess();
  })
  it('Login with both incorrect values', () => {
    login.visit();
    login.enterusername('Admin11');
    login.enterpassword('adminss123');
    login.clicklogin();
    // login.validateLoginSuccess();
  })
})