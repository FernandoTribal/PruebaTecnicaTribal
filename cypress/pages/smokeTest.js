

class SmokeTest {

    elements = {

        username: () => cy.get('#user-name'),
        Password: () => cy.get('#password'),
        loginBtn: () => cy.get('login-button')

    }

    typeUserName( username ) {
        this.elements.username().type( username )
    }
    typePassword( password ) {
        this.elements.Password().type( password )
    }
    clickLoginBtn() {
        this.elements.loginBtn().click()
    }

}
module.exports = new SmokeTest;