"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
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

      this.hasMany(models.likes, {
        sourceKey: "post_id",
        foreignKey: "post_id",
      });

      is.hasMany(models.comments, {
        sourceKey: "post_id",
        foreignKey: "post_id",
      });

      this.hasMany(models.images, {
        sourceKey: "post_id",
        foreignKey: "post_id",
      });
    }
  }
  posts.init(
    {
      post_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        pe: DataTypes.INTEGER,
        reference: {
          model: "users",
          key: "user_id",
        },
        onDelete: "CASCADE",
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      likes: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
      modelName: "posts",
    }
  );
  return posts;
};
