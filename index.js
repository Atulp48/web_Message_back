import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import route from "./routes/route.js";
import { SocktCon } from "./socket/index.js";

const app = express();
app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);
Connection();
SocktCon();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is listen at ${PORT}`));
