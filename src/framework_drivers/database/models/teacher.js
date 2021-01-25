module.exports = (Sequelize, DataTypes) => {
  const teacher = Sequelize.define("teacher", {
    // Model attributes are defined here

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Name is already in use"
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  teacher.belongsTo(Sequelize.model("management"), {
    foreignKey: {
      name: "managementRole",
      allowNull: true
    }
  });

  return teacher;
};
