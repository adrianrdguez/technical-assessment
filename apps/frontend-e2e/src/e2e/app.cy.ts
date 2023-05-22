const API_URL = 'http://localhost:3333';


describe('Users', () => {
  const testUser = {
    username: 'Johnny',
    name: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    phone: '+34632143567',
  };

  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/api/users?page=0&limit=10`, {
      fixture: 'example.json',
    }).as('users');
    cy.visit('/');
    cy.wait('@users');
  });

  it('displays a list of users and navbar', () => {
    cy.get('[data-cy=ucademy-logo]').should('be.visible');
    cy.get('[data-cy=users-table]').should('be.visible');
    cy.get('[data-cy=sidebar-menu]').should('be.visible');
    cy.get('[data-cy=create-user]').should('be.visible');
    cy.get('[data-cy=table-next-button]').should('be.visible');
    cy.get('[data-cy=table-prev-button]').should('be.visible');
    cy.get('tr').should('have.length.gt', 0);
  });

  it('should pass next page in the table', () => {
    cy.intercept('GET', `${API_URL}/api/users?page=10&limit=10`, {
      fixture: 'example2.json',
    }).as('users2');
    cy.get('[data-cy=table-next-button]').click();
    cy.wait('@users2');
  });

  it('should create a new user', () => {
    cy.intercept('POST', `${API_URL}/api/users`, {
      body: { statusCode: 201 },
    }).as('createUserRequest');
    cy.get('[data-cy=create-user]').click();
    cy.get('[data-cy=userForm-name]').type(testUser.name);
    cy.get('[data-cy=userForm-lastName]').type(testUser.lastName);
    cy.get('[data-cy=userForm-username]').type(testUser.username);
    cy.get('[data-cy=userForm-email]').type(testUser.email);
    cy.get('[data-cy=userForm-phone]').type(testUser.phone);
    cy.get('[data-cy=userForm-save]').click();
    cy.wait(['@createUserRequest', '@users'])
      .then(([xhrObject]) => {
        const requestBody = xhrObject.request.body;
        expect(requestBody).to.be.eql(testUser);
        debugger;
      });
  });

  it('should edit a created user', () => {
    cy.intercept('PUT', `${API_URL}/api/users/1d033f27-e8a5-4dfb-94df-7a2b6c599277`, {
      body: { statusCode: 201 },
    }).as('editUserRequest');
    cy.get('[data-cy=usersTable-row]').eq(5).find('[data-cy=info-button]').click();
    cy.get('[data-cy=userProfile-edit]').click();
    cy.get('[data-cy=userForm-name]').clear().type(testUser.name);
    cy.get('[data-cy=userForm-lastName]').clear().type(testUser.lastName);
    cy.get('[data-cy=userForm-username]').clear().type(testUser.username);
    cy.get('[data-cy=userForm-email]').clear().type(testUser.email);
    cy.get('[data-cy=userForm-phone]').clear().type(testUser.phone);
    cy.get('[data-cy2=userProfile-save]').click();
    cy.wait('@editUserRequest')
      .then(xhrObject => {
        const requestBody = xhrObject.request.body;
        expect(requestBody).to.be.eql(testUser);
      });
  });
});
