// app.js or index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Product from './Routes/Product.js';
import dotenv from 'dotenv';
import Signup from './Routes/Signup.js'
import LoginRoute from './Routes/LoginRoute.js'

dotenv.config();


const app = express();

const apiKey = process.env.MONGODB_URL;

mongoose
  .connect(apiKey, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('CONNECTED SUCCESSFULLY');
  })
  .catch((error) => {
    console.log('ERROR IN CONNECTION', error);
  });

app.listen(5000);
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/Signup",Signup);
app.use('/Login', LoginRoute);
app.use('/',Signup);

app.use('/admin/addProduct', Product);
app.use('/admin/showProduct', Product);
app.use('/images',express.static('images'));
app.use('/Checkout',Product);

