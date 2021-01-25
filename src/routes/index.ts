import express from "express";
import commentRoutes from "./comments";

const app = express.Router();

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world");
});

app.use(commentRoutes);

export default app;
