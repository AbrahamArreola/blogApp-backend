import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const DB_DRIVER = process.env.DATABASE_DRIVER;
const DB_USER = process.env.DATABASE_USER;
const DB_URL = process.env.DATABASE_URL;
const DB_NAME = process.env.DATABASE_NAME;

export const sequelize = new Sequelize(
    `${DB_DRIVER}://${DB_USER}@${DB_URL}/${DB_NAME}`
);

sequelize
    .sync()
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log(error);
    });
