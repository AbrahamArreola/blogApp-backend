import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Reply = sequelize.define("reply", {
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
