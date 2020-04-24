
const navigateToList = () => cy.visit('http://localhost:3000/aircraft')
const getAircraftItems = () => cy.get('tbody > tr')

describe('aircraft spec', () => {

    beforeEach(() => navigateToList())

    it('should access list with all aircraft',  () => {
        const aircraft = cy.get('tbody > tr')

        aircraft.should('have.length', 2)
    });

    it('should show the first aircraft', () => {
        const aircraft = cy.get('tbody > tr').first()

        aircraft.click()

        cy.url().should('include', 'aircraft/BX123AC')

        cy.get('#code')
            .should('have.value', 'BX123AC')

        cy.get('#model')
            .should('have.value', 'Boeing 737 800')

    });

})