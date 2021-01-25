import app from "./config/config";
import routes from "./routes/index";

const port = app.get("port");

app.use(routes);

app.listen(port, () => {
    console.log("Listening on port:", port);
});
