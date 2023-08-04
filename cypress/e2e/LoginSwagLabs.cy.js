import LoginSwagLabs from "../pages/LoginSwagLabs";

describe('Login en Swag Labs ', () => {

    const url = 'https://www.saucedemo.com/';

    const username = 'standard_user';
    const password = 'secret_sauce';

    beforeEach(() => {
       
        cy.visit( url );
        
    });
   
    it('debe hacer login correctamente', () => {
        
        //Iniciar sesion
        LoginSwagLabs.typeUserName( username ); //ingresando username
        LoginSwagLabs.typePassword( password ); //ingresando password
        LoginSwagLabs.clickLoginBtn(); //haciendo clic en "Login"

        LoginSwagLabs.selectElement(); //Seleccionando elemento al carrito
        LoginSwagLabs.clickCarritoCompras(); //Seleccionando el carrito
        cy.wait(500);
        LoginSwagLabs.clickRemoveElement(); // Removiendo elemento del carrito

        LoginSwagLabs.clickBurgerMenu(); // Haciendo click en el menu
        LoginSwagLabs.clickLogoutBtn(); // Haciendo Logout de la app




    });

})