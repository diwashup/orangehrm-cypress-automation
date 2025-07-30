export class dashboardpage{
    getdashboardheader(){
        return cy.get('.oxd-topbar-header-breadcrumb > .oxd-text');
    }
    getquicklaunchsection(){
        // can also use cy.contains('Quick Launch')   contain is used to search text that is visibleon page
        return cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text');
    }
    gettimeatworksection(){
        return cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text');
    }
    validatedashboardloaded(){
        this.getdashboardheader().should('have.text', 'Dashboard');
        this.getquicklaunchsection().should('be.visible');
        this.gettimeatworksection().should('be.visible');
    }
}