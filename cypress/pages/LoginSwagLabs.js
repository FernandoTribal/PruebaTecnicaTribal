

class LoginSwagLabs {

    elements = {

        username: () => cy.get('#user-name'), //Seleccionado el input de username
        Password: () => cy.get('#password'), // Seleccionando el input de password
        loginBtn: () => cy.get('#login-button'), //Seleccionando el boton de login
        addElement: () => cy.get('#add-to-cart-sauce-labs-bike-light'), // Seleccionando elemento a agregar
        carritoCompras: () => cy.get('#shopping_cart_container'), // Seleccionando el icono del carrito de compras

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
    selectElement() {
        this.elements.addElement().click()
    }
    clickCarritoCompras() {
        this.elements.carritoCompras().click()
    }

}
module.exports = new LoginSwagLabs;