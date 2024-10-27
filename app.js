import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import ejsMate from "ejs-mate";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

import portalRouter from "./routes/portal.route.js";
app.use("/", portalRouter);

export { app };
