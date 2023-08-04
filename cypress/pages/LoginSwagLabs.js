

class LoginSwagLabs {

    elements = {

        username: () => cy.get('#user-name'), //Seleccionado el input de username
        Password: () => cy.get('#password'), // Seleccionando el input de password
        loginBtn: () => cy.get('#login-button'), //Seleccionando el boton de login
        addElement: () => cy.get('#add-to-cart-sauce-labs-bike-light'), // Seleccionando elemento a agregar
        carritoCompras: () => cy.get('#shopping_cart_container'), // Seleccionando el icono del carrito de compras
        removeElement: () => cy.get('#remove-sauce-labs-bike-light'), // seleccionando remover elemento
        burgerMenu: () => cy.get('#react-burger-menu-btn'), // Seleccionando menu de hamburgesa
        logoutBtn: () => cy.get('#logout_sidebar_link'), // Seleccionando boton de logout

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

    // Funcion para agregar elemento al carrito
    selectElement() {
        this.elements.addElement().click()
    }

    // Funcion para ir al carrito de compras
    clickCarritoCompras() {
        this.elements.carritoCompras().click()
    }

    // Funcion para remover elemento del carrito de compras
    clickRemoveElement() {
        this.elements.removeElement().click()
    }

    // Funcion para seleccion el menu de hamburguesa
    clickBurgerMenu() {
        this.elements.burgerMenu().click();
    }

    // Funcion para dar click en el boton de logout
    clickLogoutBtn() {
        this.elements.logoutBtn().click();
    }

}
module.exports = new LoginSwagLabs;