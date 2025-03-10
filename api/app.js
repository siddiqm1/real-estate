import express from "express"
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"

const app = express();
const port = 8800;
app.use(express.json())

app.use("/api/posts", postRoute);

app.use("/api/auth", authRoute);

app.listen(port, () => {
    console.log(`Running in server ${port}`)
});