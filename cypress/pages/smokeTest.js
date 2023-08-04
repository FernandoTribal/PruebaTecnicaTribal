

class SmokeTest {

    elements = {

        username: () => cy.get('#user-name'), //Seleccionado el input de username
        Password: () => cy.get('#password'), // Seleccionando el input de password
        loginBtn: () => cy.get('login-button') //Seleccionando el boton de login

    }

    //Funcion para ingresar username
    typeUserName( username ) { 
        this.elements.username().type( username )
    }

    //Funcion para ingresar password
    typePassword( password ) {
        this.elements.Password().type( password )
    }

    //Funcion para dar clic en el boton de login
    clickLoginBtn() {
        this.elements.loginBtn().click()
    }

}
module.exports = new SmokeTest;