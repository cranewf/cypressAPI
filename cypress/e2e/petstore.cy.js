const userData = require("../fixtures/user.json");
const userUrl = userData.url;
const user = userData.user;
const userNumber = 0;

describe("User", () => {
  beforeEach(() => {
    cy.createUser(userUrl, user[userNumber]).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq(`${user[userNumber].id}`);
    });
  });

  it("The user was successfully created", () => {
    cy.getUser(userUrl, user[userNumber].username).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(user[userNumber].id);
      expect(response.body.username).to.eq(user[userNumber].username);
    });
  });

  it("Updating user data", () => {
    const userNew = 1;

    cy.updateUser(userUrl, user[userNumber].username, user[userNew]).then(
      (response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq(`${user[userNumber].id}`);
      }
    );

    cy.getUser(userUrl, user[userNew].username).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(user[userNew].id);
      expect(response.body.username).to.eq(user[userNew].username);
      expect(response.body.firstName).to.eq(user[userNew].firstName);
      expect(response.body.lastName).to.eq(user[userNew].lastName);
    });
  });

  it("Deleting a user", () => {
    cy.deleteUser(userUrl, user[userNumber].username).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq(`${user[userNumber].username}`);
    });

    cy.getUser(userUrl, user[userNumber].username).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq("User not found");
    });
  });
});
