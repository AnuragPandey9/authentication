require('dotenv').config('/.env');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./dbConnection/dbConnector');
const routes = require('./routes/routes');
const cors = require('cors');

app.set('dbObj',db);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(process.cwd()+'/dist/authAngular'));
app.use('/authentication',routes);
app.listen(5000,()=>{
    console.log(process.cwd()+'/dist/authAngular/index.html')
    console.log('listening at 5000');
});
