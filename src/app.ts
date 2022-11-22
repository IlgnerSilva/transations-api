import * as express from "express";
import * as cors from "cors";
import { router } from "./useCases/router";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use("/", (req, res)=>{
    res.send("RAIZ!")
});

export { app };