import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { Reply } from "./Reply";

export const Comment = sequelize.define("comment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Comment.hasMany(Reply, {
    as: "replies",
    onDelete: "cascade",
    onUpdate: "cascade",
});
