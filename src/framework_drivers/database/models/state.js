module.exports = (sequelize, type) => {
  const state = sequelize.define(
    "state",
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
      name: {
        type: type.STRING,
        allowNull: false
      }
    },
    {
      underscored: true,
      freezeTableName: true
    }
  );

  return state;
};
