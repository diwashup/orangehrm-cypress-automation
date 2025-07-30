import { LoginPage } from "./pages/login";
import { dashboardpage } from "./pages/dashboard";
const login = new LoginPage();
const dashboard = new dashboardpage();

describe('Dashboard page test', () => {
    beforeEach(() => {
        login.visit();
        login.enterusername('Admin');
        login.enterpassword('admin123');
        login.clicklogin();
    })
    it('Validate dashboard page loaded', () => {
        dashboard.validatedashboardloaded();
    })

})

