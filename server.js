const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const userRouter = require('./api/routes/userRoutes');


const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/user', userRouter);

app.listen(5000, () => {
  console.log('服务器运行在端口 5000');
});