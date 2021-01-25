module.exports = (Sequelize, DataTypes) => {
  const student = Sequelize.define("student", {
    // Model attributes are defined here

    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phoneNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: {
        msg: "Name is already in use"
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  student.belongsTo(Sequelize.model("classes"), {
    foreignKey: {
      name: "studentClasses",
      allowNull: true
    }
  });
  student.belongsToMany(Sequelize.model("subject"), {
    as: "subjects",
    through: "studentsSubject",
    allowNull: false
  });
  Sequelize.model("subject").belongsToMany(student, {
    as: "students",
    through: "studentsSubject",
    allowNull: false
  });

  return student;
};
