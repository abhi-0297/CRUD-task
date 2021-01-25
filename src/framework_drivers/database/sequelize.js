const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("school", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 10,
    min: 1,
    acquire: 30000,
    idle: 10000
  }
});
// MODELS
const classesModel = require("./models/classes");
const studentModel = require("./models/student");
const teacherModel = require("./models/teacher");
const subjectModel = require("./models/subject");
const managementModel = require("./models/management");
const collegeModel = require("./models/college");
const stateModel = require("./models/state");

// INITIALIZE MODELS
managementModel(sequelize, Sequelize);
teacherModel(sequelize, Sequelize);
classesModel(sequelize, Sequelize);
subjectModel(sequelize, Sequelize);
studentModel(sequelize, Sequelize);
collegeModel(sequelize, Sequelize);
stateModel(sequelize, Sequelize);
module.exports = sequelize;
