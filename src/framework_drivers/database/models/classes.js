module.exports = (Sequelize, DataTypes) => {
  const classes = Sequelize.define("classes", {
    // Model attributes are defined here

    class_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Name is already in use"
      }
    },
    total_student: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    class_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    floor_no: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  classes.belongsTo(Sequelize.model("teacher"), {
    foreignKey: {
      name: "classTeacher",
      allowNull: true
    }
  });
  return classes;
};
