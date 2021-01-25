module.exports = (Sequelize, DataTypes) => {
  const subject = Sequelize.define("subject", {
    // Model attributes are defined here
    subjectName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Name is already in use"
      }
    }
  });

  subject.belongsToMany(Sequelize.model("classes"), {
    as: "class",
    through: "class_subject",
    allowNull: false
  });
  Sequelize.model("classes").belongsToMany(subject, {
    as: "subjects",
    through: "class_subject",
    allowNull: false
  });
  return subject;
};
