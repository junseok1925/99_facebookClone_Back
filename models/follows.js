"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class follows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, {
        targetKey: "user_id",
        foreignKey: "user_id",
      });
    }
  }
  follows.init(
    {
      follow_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        reference: {
          model: "users",
          key: "user_id",
        },
        onDelete: "CASCADE",
      },
      follwer_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn("now"),
      },
    },
    {
      sequelize,
      modelName: "follows",
    }
  );
  return follows;
};
