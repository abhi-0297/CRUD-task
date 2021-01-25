const server = require("./src/framework_drivers/server/server");
const sequelize = require("./src/framework_drivers/database/sequelize");

const runServer = () => {
  // connection and syncing of database

  sequelize
    .sync((force = true))
    .then(val => {
      console.log(
        "connection made to the database successfully and tables created"
      );
    })
    .catch(err => {
      console.log("error", err);
    });

  // start the server
  server.listen(3000, () => {
    console.log("server running");
  });
};

runServer();
