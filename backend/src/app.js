import express from  'express';
import  path  from 'path';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from "cors"

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api' , require("./routes").apiRoutes)


export {app}