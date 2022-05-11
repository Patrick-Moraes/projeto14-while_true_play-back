import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import gamesRouter from "./routes/gamesRouter.js";

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Routers
app.get("/", (req, res) => {res.send("Online")})
app.use(gamesRouter);

app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
)