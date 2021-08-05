
// fix my tests because they're just not working! sad times :(





describe("title screen", function () {
    beforeEach(function () {
        cy.task("taskTruncateTables")
    })
    it("adds name and url to table when inputing it", function () {
        cy.task("taskcreateTables")
        cy.visit('/')
        cy.get('#name').type('Ramiro')
        cy.get('#url').type('Morales')
        cy.get('#submit').click()
        cy.get('#table').should("contain", "Ramiro", "Safia")
    })
    it("delete a url from the table", function () {
        cy.task("taskcreateTables")
        cy.visit('/')
        cy.get("#bookmark-0")
        cy.get('#bookmark-0-delete').click()
        cy.get("#bookmark-0").should("not.exist")
    })

    it("UPDATE: update a specific bookmarl", function () {
        cy.task("taskCreateBookmark");
        cy.visit("/");
        //get first element
        cy.get("#bookmark-0")
            .should("contain", "Name: test-name")
            .should("contain", "URL: test-url.com");
        //click on the update button and types in new update fields and the check if updated fields were correct
        cy.get("#bookmark-0-update").click();
        cy.get("#name").type("test-change-name");
        cy.get("#url").type("test-change-url.com");
        cy.get("#submit").click();
        cy.get("#bookmark-0")
            .should("contain", "Name: test-change-name")
            .should("contain", "URL: test-change-url.com");
    });
})

