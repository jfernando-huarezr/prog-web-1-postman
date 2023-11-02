import express from "express";
import { json } from "body-parser"

import { showTicketRouter } from "./routes/show"

const app = express();
app.use(json());

app.use(showTicketRouter);

app.listen(3000, () => {
    console.log('microservice is up running on port 3000')
})