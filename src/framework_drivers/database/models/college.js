module.exports = (sequelize, type) => {
  const college = sequelize.define(
    "college",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      uuidIdentifier: {
        type: type.UUID,
        defaultValue: type.UUIDV4,
        allowNull: false
      },
      city: {
        type: type.STRING,
        allowNull: false
      },
      collegeName: {
        type: type.STRING,
        allowNull: false
      },

      deletedAt: {
        type: type.DATE,
        allowNull: true
      }
    },
    {
      underscored: true,
      freezeTableName: true
    }
  );

  // college.belongsTo(sequelize.model("state"), {
  //   as: "state",
  //   foreignKey: {
  //     allowNull: false
  //   }
  // });

  return college;
};
