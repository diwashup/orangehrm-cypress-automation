import { LoginPage } from "./pages/login"
import { LeavePage } from "./pages/leavepage"

const login=new LoginPage()
const leave=new LeavePage()

describe('Leave page tests',() =>{
    beforeEach(() => {
        login.visit();
        login.enterusername('Admin');
        login.enterpassword('admin123');
        login.clicklogin();
    })

    it('should navigate to leave page', () => {
        leave.clickleavebutton()
        leave.searchleavelist('2023-01-01', '2023-12-31', 'Taken', 'CAN-FMLA', 'John Doe', 'Quality Assurance')
        //leave.clickapplyleave()
    })


})