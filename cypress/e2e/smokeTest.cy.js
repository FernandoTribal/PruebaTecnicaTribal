import smokeTest from "../pages/smokeTest";

describe('Smoke Test ', () => {

    const url = 'https://www.saucedemo.com/';

    const username = 'standard_user';
    const password = 'secret_sauce';

    beforeEach(() => {
       
        cy.visit( url );
        
    });
   
    it('debe hacer login correctamente', () => {
        
        //Iniciar sesion
        smokeTest.typeUserName( username ); //ingresando username
        smokeTest.typePassword( password ); //ingresando password
        smokeTest.clickLoginBtn(); //haciendo clic en "Login"

        
        


    });

})