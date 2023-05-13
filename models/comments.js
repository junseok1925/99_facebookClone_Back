"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        targetKey: "user_id",
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Posts, {
        targetKey: "post_id",
        foreignKey: "post_id",
        onDelete: "CASCADE",
      });
    }
  }
  Comments.init(
    {
      comment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
<<<<<<< HEAD
=======
        references: {
          model: "users",
          key: "user_id",
        },
        onDelete: "CASCADE",
>>>>>>> b87f588923c6388727d5764de2975e6083562b8d
      },
      post_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
<<<<<<< HEAD
=======
        references: {
          model: "posts",
          key: "post_id",
        },
        onDelete: "CASCADE",
>>>>>>> b87f588923c6388727d5764de2975e6083562b8d
      },
      comment: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );
  return Comments;
};
