

class SmokeTest {

    elements = {

        username: () => cy.get('#user-name'),
        Password: () => cy.get('#password'),
        loginBtn: () => cy.get('login-button')

    }

}