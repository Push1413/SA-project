import express from "express";
import { PORT } from "./config.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use({origin:process.env.CLIENT_URL, credentials:true});
app.use(express.json());
app.use(cookieParser());

app.use("api/posts", postRoute)


app.listen(PORT, ()=>{
 console.log(`App is listing to port: ${PORT}`);
});
