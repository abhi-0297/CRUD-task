module.exports = (Sequelize, DataTypes) => {
  const management = Sequelize.define("management", {
    // Model attributes are defined here

    departmentName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Name is already in use"
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return management;
};
