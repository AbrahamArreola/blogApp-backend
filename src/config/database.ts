import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("mysql://root@localhost/interview_db");

sequelize
    .sync()
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log(error);
    });
