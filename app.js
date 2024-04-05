import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import swaggerui from 'swagger-ui-express';
import 'express-async-errors';
const app = express();
import configuration from './configs/index.js' ;
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/contact.routes.js'
import swaggerjson from './docs/swagger.json' assert {type:'json'} ;


app.use(express.json());
app.use(cors());
app.use("/",router);

app.use('/api',swaggerui.serve, swaggerui.setup(swaggerjson));

mongoose.connect(configuration.mongoURI)
.then(() => {
    app.listen(configuration.port, ()=> {
        console.log("listening on port "+configuration.port);
    });
})
.catch(err => {
    console.log(err);
});