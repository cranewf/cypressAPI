Cypress.Commands.add("createUser", (userUrl, user) => {
  cy.request({
    method: "POST",
    url: userUrl,
    body: {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phone: user.phone,
      userStatus: user.userStatus,
    },
  });
});

Cypress.Commands.add("getUser", (userUrl, username) => {
  cy.request({
    failOnStatusCode: false,
    method: "GET",
    url: userUrl + username,
  });
});

Cypress.Commands.add("updateUser", (userUrl, username, user) => {
  cy.request({
    method: "PUT",
    url: userUrl + username,
    body: {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phone: user.phone,
      userStatus: user.userStatus,
    },
  });
});

Cypress.Commands.add("deleteUser", (userUrl, username) => {
  cy.request({
    method: "DELETE",
    url: userUrl + username,
  });
});
