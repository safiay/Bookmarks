describe("title screen", function(){
    it("adds name and url to table when inputing it", function(){
        cy.task("taskcreateTables")
        cy.task("taskTruncateTables")
        
        cy.visit('/')
        cy.get('#name').type('Ramiro')
        cy.get('#url').type('Morales')
        cy.get('#submit').click()
        cy.get('#table').should("contain", "Ramiro","Safia")
    })
})